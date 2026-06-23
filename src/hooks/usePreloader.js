import { useState, useEffect } from 'react'

function collectImages() {
  return ['/images/cube-logo.png']
}

export function usePreloader() {
  const [loaded, setLoaded] = useState(0)
  const [total, setTotal] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const urls = collectImages()
    setTotal(urls.length)
    if (urls.length === 0) { setReady(true); return }
    let count = 0
    for (const url of urls) {
      const img = new Image()
      img.onload = img.onerror = () => {
        count++
        setLoaded(count)
        if (count === urls.length) setReady(true)
      }
      img.src = url
    }
  }, [])

  return { ready, progress: total > 0 ? loaded / total : 0 }
}
