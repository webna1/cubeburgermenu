import { useLang } from '../context/LangContext'
import { T } from '../components/T'

export default function HomeScreen({ onNavigate }) {
  const { lang, setLang } = useLang()

  return (
    <section className="screen" id="screen-home">
      <div className="hero">
        <div className="toprow">
          <span className="loc">
            <ion-icon name="location"></ion-icon>
            <T en="Cube Burger · Iraq" ar="كيوب برجر · العراق" />
          </span>
          <div className="lang" role="group" aria-label="Language">
            <button
              data-lang="en"
              className={lang === 'en' ? 'on' : ''}
              onClick={() => setLang('en')}
            >EN</button>
            <button
              data-lang="ar"
              className={`ar-lbl${lang === 'ar' ? ' on' : ''}`}
              onClick={() => setLang('ar')}
            >ع</button>
          </div>
        </div>

        <div className="brand">
          <img className="logo-mark" src="/images/cube-logo.png" alt="Cube Burger logo" />
          <div className="wordmark">
            <span className="l1">CUBE</span>
            <span className="l2">BURGER</span>
          </div>
          <div className="reshaping">
            <T en="RESHAPING FOOD" ar="نعيد تشكيل الطعام" />
          </div>
        </div>

        <nav className="cta">
          <button className="cbtn cbtn-primary" onClick={() => onNavigate('menu')}>
            <span className="ico"><ion-icon name="fast-food"></ion-icon></span>
            <span className="txt">
              <span className="big"><T en="Food" ar="الطعام" /></span>
              <span className="sub"><T en="Burgers · Sides · Salads" ar="برجر · أطباق جانبية · سلطات" /></span>
            </span>
            <span className="arr"><ion-icon name="arrow-forward"></ion-icon></span>
          </button>
          <button className="cbtn cbtn-secondary" onClick={() => onNavigate('drinks')}>
            <span className="ico"><ion-icon name="ice-cream"></ion-icon></span>
            <span className="txt">
              <span className="big"><T en="Drinks & Dessert" ar="المشروبات والحلى" /></span>
              <span className="sub"><T en="Coming soon" ar="قريباً" /></span>
            </span>
            <span className="arr"><ion-icon name="arrow-forward"></ion-icon></span>
          </button>
        </nav>

        <div className="handle">@cubeburgeriraq</div>
      </div>
    </section>
  )
}
