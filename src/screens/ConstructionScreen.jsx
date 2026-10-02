import { useLang } from '../context/LangContext'
import { T } from '../components/T'
import Icon from '../components/Icon'

export default function ConstructionScreen() {
  const { lang, setLang } = useLang()
  const logoSrc = lang === 'ar' ? '/brand/logo-ar-landscape.svg' : '/brand/logo-en-landscape.svg'

  return (
    <section className="uc">
      <div className="lang uc-lang" role="group" aria-label="Language">
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

      <div className="uc-stage">
        <img className="uc-logo" src={logoSrc} alt="Cube Burger" fetchPriority="high" />

        <h1 className="uc-head">
          <T en="The menu is being rebuilt." ar="القائمة قيد التحديث." block />
        </h1>
        <p className="uc-sub">
          <T en="New prices, new dishes. Back very soon." ar="أسعار جديدة وأصناف جديدة. نعود قريباً." block />
        </p>

        <a className="uc-ig" href="https://instagram.com/cubeburger_irq" target="_blank" rel="noreferrer">
          <Icon name="logo-instagram" />
          <span className="uc-ig-txt">
            <T en="Updates on Instagram" ar="التحديثات على إنستغرام" />
          </span>
          <span className="uc-ig-handle">@cubeburger_irq</span>
        </a>
      </div>
    </section>
  )
}
