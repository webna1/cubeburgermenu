import { useEffect, useState } from 'react'

export default function Preloader({ progress, ready, onDone }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (!ready) return
    setHiding(true)
    const t = setTimeout(onDone, 500)
    return () => clearTimeout(t)
  }, [ready, onDone])

  return (
    <div className={`preloader${hiding ? ' hiding' : ''}`}>
      <img className="pl-logo" src="/images/cube-logo.png" alt="" />
      <div className="pl-wordmark">
        <span className="pl-l1">CUBE</span>
        <span className="pl-l2">BURGER</span>
      </div>
      <div className="pl-bar-wrap">
        <div className="pl-bar" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>
    </div>
  )
}
