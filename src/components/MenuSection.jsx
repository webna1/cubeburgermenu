import { T } from './T'
import ItemCard from './ItemCard'
import SauceGrid from './SauceGrid'

export default function MenuSection({ sec, searchQuery }) {
  const q = searchQuery ? searchQuery.toLowerCase() : ''

  const visibleItems = sec.items
    ? (q
        ? sec.items.filter(it =>
            `${it.nm_en || ''} ${it.nm_ar || ''} ${it.ds_en || ''} ${it.ds_ar || ''}`.toLowerCase().includes(q)
          )
        : sec.items)
    : null

  if (q && visibleItems && visibleItems.length === 0 && !sec.sauces) return null

  return (
    <section className="sec" id={`sec-${sec.id}`}>
      {sec.img ? (
        <div className="sec-hero">
          <img src={sec.img} alt="" loading="lazy" />
          <div className="sec-hd">
            <div className="kicker"><T en={sec.kicker_en} ar={sec.kicker_ar} /></div>
            <div className="sec-title"><T en={sec.name_en} ar={sec.name_ar} /></div>
          </div>
        </div>
      ) : (
        <div className="sec-plain">
          <div className="kicker"><T en={sec.kicker_en} ar={sec.kicker_ar} /></div>
          <div className="sec-title"><T en={sec.name_en} ar={sec.name_ar} /></div>
        </div>
      )}

      {(sec.intro_en || sec.intro_ar) && (
        <p className="sec-intro"><T en={sec.intro_en} ar={sec.intro_ar} /></p>
      )}

      {sec.sauces && <SauceGrid sauces={sec.sauces} />}

      {visibleItems && (
        <div className="cards">
          {visibleItems.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      )}

      {sec.meal && (
        <div className="ribbon">
          <ion-icon name="star"></ion-icon>
          <span className="rt">
            <T
              en={<>Make it a meal — add a drink + fries for just <b>3,750 IQD</b></>}
              ar={<>اجعلها وجبة — أضف مشروباً وبطاطا مقابل <b>٣٬٧٥٠ دينار</b> فقط</>}
            />
          </span>
        </div>
      )}

      {(sec.note_en || sec.note_ar) && (
        <div className="sec-note">
          <ion-icon name="information-circle"></ion-icon>
          <span><T en={sec.note_en} ar={sec.note_ar} /></span>
        </div>
      )}
    </section>
  )
}
