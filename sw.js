const CACHE_NAME = 'pantry-chef-cache-v1';
const urlsToCache = [
  './',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/recipes.js',
  'js/affiliates.js',
  'data/recipes.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  'images/ogp-image.jpg'
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error("Cache addAll failed:", err))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

