// New menu prices and section order, applied over the live database rows until
// the database itself is updated. Delete this file and its use in liveMenu.js then.
const P = {
  'curly-fries': 5250, 'french-fries': 3500, 'cube-fries': 5750,
  'texas-fries': 8750, 'cube-style-fries': 8750, 'chicken-alfredo-fries': 8750,
  'cube-salad': 14750, 'crab-salad': 13750, 'summer-garden': 6500,
  'cube-burger': 11000, 'classic-burger': 11000, 'chili-n-cheese': 12000,
  'rebel-chicken': 11750, 'chicken-ranch': 9750, 'grilled-chicken': 8750,
  'bacon-chicken': 9750, 'bbq-chicken': 11750, 'chicken-philly': 10000,
  'kids-bites': 9000,
}

export function applyLocalOverrides(items) {
  return items.filter((i) => i.id !== 'kids-beef-burger').map((i) => {
    const out = { ...i }
    out.customizable_options = (i.customizable_options ?? []).map((o) => (o.id === 'add-patty' ? { ...o, price: 6500 } : o))
    if (P[i.id] != null) out.base_price = P[i.id]
    if (i.id === 'chicken-alfredo-fries') out.base_price = 8750
    if (i.id === 'boneless') {
      out.base_price = 8750
      out.options = []
      const row = (id, pcs, en, ar, price) => ({ id, price, name: { en: `${pcs} pcs — ${en}`, ar: `${pcs} قطع — ${ar}` } })
      const plain = ['Honey Mustard, Buffalo, BBQ', 'هني ماسترد، بافلو، باربكيو']
      const rich = ['Garlic Parmesan, Crazy Mix', 'ثوم وبارميزان، كريزي مكس']
      out.size_options = [
        row('6', 6, ...plain, 8750), row('6r', 6, ...rich, 9500),
        row('10', 10, ...plain, 13500), row('10r', 10, ...rich, 14750),
      ]
    }
    if (i.id === 'caesar-salad') {
      out.base_price = 8500
      out.size_options = i.size_options.map((s) =>
        s.id === 'classic' ? { ...s, price: 8500 } : /chicken/i.test(s.name.en) ? { ...s, price: 11750 } : s)
    }
    if (i.id === 'classic-burger') {
      out.description = {
        en: '150 g Angus beef, cheese, ketchup, garlic mayo, mustard, lettuce, tomato, onion and pickle.',
        ar: '١٥٠ غرام من لحم أنغوس البقري، جبن، كاتشب، مايونيز بالثوم، خردل، خس، طماطم، بصل ومخلل',
      }
    }
    return out
  })
}

const ORDER = ['appetizers', 'fries', 'salads', 'wings', 'beef-burgers', 'chicken-burgers', 'kids',
  'desserts', 'mocktails', 'cold-drinks', 'hot-drinks', 'milkshakes', 'sauces']

export function reorderLocalCategories(categories) {
  const rank = (c) => (ORDER.includes(c.id) ? ORDER.indexOf(c.id) : ORDER.length)
  return [...categories].sort((a, b) => rank(a) - rank(b))
}
