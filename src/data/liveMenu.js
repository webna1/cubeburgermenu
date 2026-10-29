// The live menu: read from the master menu (the HR project's database) with
// the public key. Sold-out and removed
// items are filtered out by the database itself.
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from '../config'
import { SECTION_LOOK, EXTRAS_LOOK, UPGRADES_LOOK } from './sections'

const ITEM_COLS = 'id,category_id,name,description,image_url,base_price,sort_order,size_options,options,customizable_options'

async function get(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY },
  })
  if (!res.ok) throw new Error(`menu ${res.status}`)
  return res.json()
}

export async function fetchMenu() {
  const [categories, items] = await Promise.all([
    get('qr_categories?select=id,name,sort_order&order=sort_order'),
    get(`qr_items?select=${ITEM_COLS}&order=sort_order`),
  ])
  return toSections(categories, items)
}

const iqd = (n) => Math.round(n).toLocaleString('en-US')

/** Photos are full URLs (HR uploads them to Supabase storage). */
export const photo = (url) => url || null

/**
 * Price rows for one item, all as full prices (like the order site):
 * sizes replace the base price; a single-choice option adds to it.
 */
function priceRows(item) {
  const sizes = item.size_options ?? []
  const options = item.options ?? []
  if (sizes.length > 0) {
    const rows = sizes.map((s) => ({ o_en: s.name.en, o_ar: s.name.ar, price: iqd(s.price) }))
    // Options on a sized item (e.g. boneless flavours) only show their surcharge.
    for (const o of options) {
      rows.push({ o_en: o.name.en, o_ar: o.name.ar, price: o.price > 0 ? `+${iqd(o.price)}` : '' })
    }
    return rows
  }
  if (options.length > 0) {
    return options.map((o) => ({ o_en: o.name.en, o_ar: o.name.ar, price: iqd(item.base_price + o.price) }))
  }
  return null
}

function toCard(item) {
  const opts = priceRows(item)
  return {
    id: item.id,
    nm_en: item.name.en, nm_ar: item.name.ar,
    ds_en: item.description?.en || '', ds_ar: item.description?.ar || '',
    img: photo(item.image_url),
    ...(opts ? { opts } : { price: iqd(item.base_price) }),
  }
}

/** Every add-on across the menu once, split into extras and fries upgrades (ids "up-…"). */
function addonSections(items, categories) {
  const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]))
  const seen = new Map()
  for (const item of items) {
    for (const o of item.customizable_options ?? []) {
      if (!seen.has(o.id)) seen.set(o.id, { ...o, firstCat: item.category_id })
    }
  }
  const all = [...seen.values()]
  // The same label at two prices (cheese on a burger vs on fries) gets its section name.
  const label = (o, lang) => {
    const twin = all.some((x) => x.id !== o.id && x.name.en === o.name.en)
    const base = o.name[lang]
    return twin ? `${base} · ${catName[o.firstCat]?.[lang] ?? ''}` : base
  }
  const rows = (list, plus) =>
    list.map((o) => ({ sn_en: label(o, 'en'), sn_ar: label(o, 'ar'), price: `${plus ? '+' : ''}${iqd(o.price)}` }))
  const upgrades = all.filter((o) => o.id.startsWith('up-'))
  const extras = all.filter((o) => !o.id.startsWith('up-'))
  const out = []
  if (extras.length) out.push({ ...EXTRAS_LOOK, img: null, sauces: rows(extras, false) })
  if (upgrades.length) out.push({ ...UPGRADES_LOOK, img: null, sauces: rows(upgrades, true) })
  return out
}

/** Pure: database rows → the section shape MenuSection renders. */
export function toSections(categories, items) {
  const sections = []
  for (const cat of categories) {
    const catItems = items.filter((i) => i.category_id === cat.id)
    if (catItems.length === 0) continue
    const look = SECTION_LOOK[cat.id] ?? {}
    const section = {
      id: cat.id, name_en: cat.name.en, name_ar: cat.name.ar,
      img: look.img ?? null,
      kicker_en: look.kicker_en ?? '', kicker_ar: look.kicker_ar ?? '',
      intro_en: look.intro_en, intro_ar: look.intro_ar,
    }
    if (look.layout === 'grid') {
      sections.push(...addonSections(items, categories))
      section.sauces = catItems.map((i) => ({ sn_en: i.name.en, sn_ar: i.name.ar, price: iqd(i.base_price) }))
    } else {
      section.items = catItems.map(toCard)
    }
    sections.push(section)
  }
  // No sauces category → extras still show, at the end.
  if (!categories.some((c) => SECTION_LOOK[c.id]?.layout === 'grid')) sections.push(...addonSections(items, categories))
  return sections
}
