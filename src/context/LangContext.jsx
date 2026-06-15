import { createContext, useContext, useState, useEffect } from 'react'

export const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('cb_lang') || 'ar' } catch { return 'ar' }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('cb_lang', lang) } catch {}
  }, [lang])

  const setLang = (l) => setLangState(l === 'ar' ? 'ar' : 'en')
  const toggleLang = () => setLangState(l => l === 'ar' ? 'en' : 'ar')

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
