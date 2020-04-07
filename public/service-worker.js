var cacheName = "s4e-proofs-cache-" + Date.now()
var filesToCache = [
  "/",
  "/assets/svelte-logo-192x192.png",
  "/assets/svelte-logo-512x512.png",
  "/build/bundle.css",
  "/build/bundle.js",
  "/favicon.png",
  "/global.css",
  "/index.html",
  "/manifest.json",
  "/service-worker.js",
]
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName)
          }
        })
      )
    })
  )
})
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async function () {
      const response = await caches.match(e.request)
      return response || fetch(e.request)
    })()
  )
})
