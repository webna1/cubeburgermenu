import { useLang } from '../context/LangContext'
import { T } from '../components/T'
import { CubeLogo } from '../components/CubeLogo'
import Icon from '../components/Icon'

export default function ConstructionScreen() {
  const { lang, setLang } = useLang()

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
        <div className="uc-cube"><CubeLogo size={104} /></div>

        <div className="wordmark uc-wordmark">
          <span className="l1">CUBE</span>
          <span className="l2">BURGER</span>
        </div>

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
