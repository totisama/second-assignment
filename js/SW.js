var cacheName = 'v1.0'

var cacheAssets = [
  'index.html',
  'css/tooplate-crispy-kitchenyle.css',
  'css/bootstrap-icons.css',
  'css/bootstrap.min.css',
  'images/slide/jay-wennington-N_Y88TWmGwA-unsplash.webp',
  'images/slide/jason-leung-O67LZfeyYBk-unsplash.webp',
  'images/slide/ivan-torres-MQUqbmszGGM-unsplash.webp',
  'video/production_ID_3769033.webm',
  'video/production_ID_3769033.mp4',
]

// installation
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed')
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('Service Worker: Caching Files')
        cache.addAll(cacheAssets)
      })
      .then(() => self.skipWaiting())
  )
})

// activation
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Installed')
})

// fetch

self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetching')
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
