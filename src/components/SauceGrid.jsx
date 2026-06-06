import { T } from './T'

export default function SauceGrid({ sauces }) {
  return (
    <div className="sauces">
      {sauces.map((s, i) => (
        <div className="sauce" key={i}>
          <span className="sn"><T en={s.sn_en} ar={s.sn_ar} /></span>
          <span className="sp">{s.price} <i>IQD</i></span>
        </div>
      ))}
    </div>
  )
}
