import { T } from './T'

function priceNum(p) {
  if (p == null) return null
  const t = String(p).trim()
  return /^[\d,]+$/.test(t) ? parseInt(t.replace(/,/g, ''), 10) : null
}

function VariantRows({ opts }) {
  return (
    <div className="variants">
      {opts.map((o, i) => {
        const pn = priceNum(o.price)
        return (
          <div key={i} className={`vrow${pn === null ? ' info' : ''}`}>
            <span className="vname"><T en={o.o_en} ar={o.o_ar} /></span>
            <span className="vlead" />
            <span className="vprice">{o.price}</span>
          </div>
        )
      })}
    </div>
  )
}

function SandwichMealRows({ sm }) {
  return (
    <div className="variants">
      <div className="vrow">
        <span className="vname"><T en="Sandwich" ar="ساندويتش" /></span>
        <span className="vlead" />
        <span className="vprice">{sm[0]}</span>
      </div>
      <div className="vrow">
        <span className="vname"><T en="Meal" ar="وجبة" /></span>
        <span className="vlead" />
        <span className="vprice">{sm[1]}</span>
      </div>
    </div>
  )
}

export default function ItemCard({ item }) {
  const searchStr = `${item.nm_en || ''} ${item.nm_ar || ''} ${item.ds_en || ''} ${item.ds_ar || ''}`.toLowerCase()
  const pn = priceNum(item.price)
  const hasSimplePrice = !item.opts && !item.sm

  return (
    <article className="card" data-search={searchStr}>
      <div className="thumb">
        <ion-icon name="fast-food"></ion-icon>
      </div>
      <div className="cbody">
        <h3 className="cname"><T en={item.nm_en} ar={item.nm_ar} /></h3>
        {(item.ds_en || item.ds_ar) && (
          <p className="cdesc"><T en={item.ds_en} ar={item.ds_ar} /></p>
        )}
        {item.opts && <VariantRows opts={item.opts} />}
        {item.sm && <SandwichMealRows sm={item.sm} />}
        {hasSimplePrice && (
          <div className="cfoot">
            <span className={`cprice${pn === null ? ' na' : ''}`}>
              {item.price || '—'}
              {pn !== null && <i>IQD</i>}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}
