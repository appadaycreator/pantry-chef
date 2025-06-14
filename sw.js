const CACHE_NAME = 'pantry-chef-cache-v1';
const urlsToCache = [
  './',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/recipes.js',
  'js/recipe-list.js',
  'js/affiliates.js',
  'data/recipes.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  'images/ogp-image.jpg',
  'recipes.html'
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    for (const url of urlsToCache) {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok) {
          await cache.put(url, response.clone());
        } else {
          console.warn('Skip caching:', url, response.status);
        }
      } catch (err) {
        console.warn('Failed to fetch', url, err);
      }
    }
  })());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

