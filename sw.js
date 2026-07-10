const CACHE = 'cube-assets-v3'

self.addEventListener('install', e => {
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)
  const isAsset = /\.(jpe?g|png|webp|gif|svg|woff2?|ttf)$/i.test(url.pathname)
  if (!isAsset) return

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        if (cached) return cached
        return fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone())
          return res
        })
      })
    )
  )
})
