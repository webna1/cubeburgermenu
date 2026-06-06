import { useState, useEffect } from 'react'
import { LangProvider } from './context/LangContext'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import DrinksScreen from './screens/DrinksScreen'
import './App.css'

export default function App() {
  const [view, setView] = useState(() => {
    const h = (window.location.hash || '').replace('#', '')
    return h === 'menu' || h === 'drinks' ? h : 'home'
  })

  useEffect(() => {
    document.body.setAttribute('data-view', view)
    try {
      history.replaceState(null, '', view === 'home' ? window.location.pathname : `#${view}`)
    } catch {}
  }, [view])

  return (
    <LangProvider>
      <div className="grain" />
      <div id="app">
        <HomeScreen onNavigate={setView} />
        <MenuScreen onBack={() => setView('home')} />
        <DrinksScreen onBack={() => setView('home')} />
      </div>
    </LangProvider>
  )
}
