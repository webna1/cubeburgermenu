import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { MENU } from '../data/menuData'
import { T } from '../components/T'
import MenuSection from '../components/MenuSection'

export default function MenuScreen({ onBack }) {
  const { toggleLang } = useLang()
  const [searching, setSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeChip, setActiveChip] = useState(MENU[0] ? `sec-${MENU[0].id}` : '')
  const screenRef = useRef(null)
  const searchInputRef = useRef(null)
  const navRef = useRef(null)
  const menuBodyRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('searching', searching)
    return () => document.body.classList.remove('searching')
  }, [searching])

  useEffect(() => {
    const screen = screenRef.current
    if (!screen) return
    const handleScroll = () => {
      if (document.body.classList.contains('searching')) return
      const secs = menuBodyRef.current ? Array.from(menuBodyRef.current.querySelectorAll('.sec')) : []
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

  const openSearch = () => {
    setSearching(true)
    setTimeout(() => searchInputRef.current?.focus(), 260)
  }

  const closeSearch = () => {
    setSearching(false)
    setSearchQuery('')
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    updateActiveChip(id)
  }

  const hasResults = !searching || !searchQuery ||
    MENU.some(sec =>
      sec.sauces || sec.items?.some(it =>
        `${it.nm_en || ''} ${it.nm_ar || ''} ${it.ds_en || ''} ${it.ds_ar || ''}`.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )

  return (
    <section className="screen sub" id="screen-menu" ref={screenRef}>
      <header className="topbar">
        <button className="iconbtn back" onClick={onBack} aria-label="Back">
          <ion-icon name="arrow-back"></ion-icon>
        </button>
        <div className="ttl">
          <b><T en="Menu" ar="القائمة" /></b>
          <small><T en="Reshaping Food" ar="نعيد تشكيل الطعام" /></small>
        </div>
        <div className="tools">
          <button
            className="iconbtn"
            onClick={searching ? closeSearch : openSearch}
            aria-label={searching ? 'Close search' : 'Search'}
          >
            <ion-icon name={searching ? 'close' : 'search'}></ion-icon>
          </button>
          <button className="iconbtn langbtn" onClick={toggleLang} aria-label="Switch language">
            <span className="en ar-lbl">ع</span>
            <span className="ar">EN</span>
          </button>
        </div>
      </header>

      <div className="searchwrap">
        <div className={`searchbox${searchQuery ? ' has' : ''}`}>
          <ion-icon name="search"></ion-icon>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search the menu…"
            aria-label="Search menu"
            autoComplete="off"
          />
          <button
            className="clr"
            onClick={() => { setSearchQuery(''); searchInputRef.current?.focus() }}
            aria-label="Clear"
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
      </div>

      <nav className="secnav" ref={navRef}>
        {MENU.map(sec => (
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

      <div className="menu-body" ref={menuBodyRef}>
        {MENU.map(sec => (
          <MenuSection key={sec.id} sec={sec} searchQuery={searching ? searchQuery : ''} />
        ))}
      </div>

      <div className={`no-results${searching && searchQuery && !hasResults ? ' show' : ''}`}>
        <ion-icon name="search"></ion-icon>
        <p><T en="No items found" ar="لا توجد نتائج" /></p>
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
