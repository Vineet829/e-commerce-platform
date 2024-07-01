const CACHE_NAME = 'sneakshop-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching assets');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('[Service Worker] Caching failed', error);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('[Service Worker] Returning from cache', event.request.url);
          return response;
        }
        console.log('[Service Worker] Fetching from network', event.request.url);
        return fetch(event.request)
          .then(networkResponse => {
            
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          })
          .catch(error => {
            console.error('[Service Worker] Fetch failed; returning offline page', error);
            return caches.match('/index.html'); 
          });
      })
      .catch(error => {
        console.error('[Service Worker] Fetch failed', error);
        return caches.match('/index.html'); 
      })
  );
});
