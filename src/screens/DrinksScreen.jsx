import { useLang } from '../context/LangContext'
import { T } from '../components/T'

export default function DrinksScreen({ onBack }) {
  const { toggleLang } = useLang()

  return (
    <section className="screen sub" id="screen-drinks">
      <header className="topbar">
        <button className="iconbtn back" onClick={onBack} aria-label="Back">
          <ion-icon name="arrow-back"></ion-icon>
        </button>
        <div className="ttl">
          <b><T en="Drinks & Dessert" ar="المشروبات والحلى" /></b>
          <small><T en="Reshaping Food" ar="نعيد تشكيل الطعام" /></small>
        </div>
        <div className="tools">
          <button className="iconbtn langbtn" onClick={toggleLang} aria-label="Switch language">
            <span className="en ar-lbl">ع</span>
            <span className="ar">EN</span>
          </button>
        </div>
      </header>

      <div className="soon">
        <div className="glyph">
          <ion-icon name="ice-cream"></ion-icon>
        </div>
        <h2>
          <span className="en">Coming <span className="em">Soon</span></span>
          <span className="ar blk">قريباً</span>
        </h2>
        <p>
          <T
            en="Our drinks & dessert menu is being crafted — milkshakes, mocktails & sweet finishes are on the way."
            ar="قائمة المشروبات والحلى قيد التحضير — ميلك شيك وموكتيل ولمسات حلوة في الطريق إليك."
          />
        </p>
        <div className="ph">
          <ion-icon name="time-outline"></ion-icon>
          <div className="pt">
            <b><T en="Stay tuned" ar="ترقّبوا" /></b>
            <span><T en="This section will be filled in soon." ar="سيتم إضافة هذا القسم قريباً." /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
