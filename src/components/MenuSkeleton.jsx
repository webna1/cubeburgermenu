const CARDS = [0, 1, 2, 3]

export function ChipsSkeleton() {
  return [78, 96, 70, 88, 82].map((w, i) => <span key={i} className="sk sk-chip" style={{ width: w }} />)
}

function SectionSkeleton({ hero }) {
  return (
    <section className="sec" aria-hidden="true">
      {hero
        ? <div className="sk sk-hero" />
        : <div className="sk-plain"><span className="sk sk-line" style={{ width: 70 }} /><span className="sk sk-line lg" style={{ width: 150 }} /></div>}
      <div className="cards">
        {CARDS.map(i => (
          <div key={i} className="card">
            <div className="sk sk-thumb" />
            <div className="cbody sk-body">
              <span className="sk sk-line lg" style={{ width: `${55 + (i % 3) * 12}%` }} />
              <span className="sk sk-line" style={{ width: '90%' }} />
              <span className="sk sk-line" style={{ width: '60%' }} />
              <span className="sk sk-line price" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function MenuSkeleton() {
  return (
    <div role="status" aria-label="Loading menu">
      <SectionSkeleton hero />
      <SectionSkeleton />
    </div>
  )
}
