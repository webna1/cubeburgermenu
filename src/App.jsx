import { useState, useEffect } from 'react'
import { LangProvider } from './context/LangContext'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import DrinksScreen from './screens/DrinksScreen'
import Preloader from './components/Preloader'
import { usePreloader } from './hooks/usePreloader'
import './App.css'

function AppInner() {
  const [view, setView] = useState(() => {
    const h = (window.location.hash || '').replace('#', '')
    return h === 'menu' || h === 'drinks' ? h : 'home'
  })
  const { ready, progress } = usePreloader()
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    document.body.setAttribute('data-view', view)
    try {
      history.replaceState(null, '', view === 'home' ? window.location.pathname : `#${view}`)
    } catch {}
  }, [view])

  return (
    <>
      {showPreloader && (
        <Preloader progress={progress} ready={ready} onDone={() => setShowPreloader(false)} />
      )}
      <div className="grain" />
      <div id="app">
        <HomeScreen onNavigate={setView} />
        <MenuScreen onBack={() => setView('home')} />
        <DrinksScreen onBack={() => setView('home')} />
      </div>
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  )
}
