import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { DRINKS } from '../data/menuData'
import { T } from '../components/T'
import MenuSection from '../components/MenuSection'

export default function DrinksScreen({ onBack }) {
  const { toggleLang } = useLang()
  const [activeChip, setActiveChip] = useState(DRINKS[0] ? `sec-${DRINKS[0].id}` : '')
  const screenRef = useRef(null)
  const navRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    const screen = screenRef.current
    if (!screen) return
    const handleScroll = () => {
      const secs = bodyRef.current ? Array.from(bodyRef.current.querySelectorAll('.sec')) : []
      const probe = 140
      let cur = secs[0]
      secs.forEach(sec => {
        if (sec.getBoundingClientRect().top - probe <= 0) cur = sec
      })
      if (cur) updateActiveChip(cur.id)
    }
    screen.addEventListener('scroll', handleScroll, { passive: true })
    return () => screen.removeEventListener('scroll', handleScroll)
  }, [])

  const updateActiveChip = (id) => {
    setActiveChip(id)
    const nav = navRef.current
    if (!nav) return
    const chip = nav.querySelector(`[data-sec="${id}"]`)
    if (chip) {
      nav.scrollTo({ left: chip.offsetLeft - nav.offsetWidth / 2 + chip.offsetWidth / 2, behavior: 'smooth' })
    }
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    updateActiveChip(id)
  }

  return (
    <section className="screen sub" id="screen-drinks" ref={screenRef}>
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

      <nav className="secnav" ref={navRef}>
        {DRINKS.map(sec => (
          <button
            key={sec.id}
            className={`chip${activeChip === `sec-${sec.id}` ? ' on' : ''}`}
            data-sec={`sec-${sec.id}`}
            onClick={() => scrollToSection(`sec-${sec.id}`)}
          >
            <T en={sec.name_en} ar={sec.name_ar} />
          </button>
        ))}
      </nav>

      <div className="menu-body" ref={bodyRef}>
        {DRINKS.map(sec => (
          <MenuSection key={sec.id} sec={sec} searchQuery="" />
        ))}
      </div>

      <footer className="foot">
        <img className="logo-foot" src="/images/cube-logo.png" alt="Cube Burger" />
        <div className="fl"><T en="All prices in Iraqi Dinar (IQD)" ar="جميع الأسعار بالدينار العراقي" /></div>
        <div className="fl brandline">@cubeburgeriraq</div>
        <div className="fl"><T en="King of the Table" ar="ملك الطاولة" /></div>
      </footer>
    </section>
  )
}
