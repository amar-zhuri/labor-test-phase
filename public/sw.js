const CACHE_NAME = 'laboratori-labor-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/src/assets/laboratory-hero.jpg',
  '/src/assets/blood-testing.jpg'
];

// Dynamic cache strategies
const CACHE_STRATEGIES = {
  images: 'cache-first',
  api: 'network-first',
  static: 'cache-first',
  html: 'network-first'
};

// Cache durations
const CACHE_DURATION = {
  images: 30 * 24 * 60 * 60 * 1000, // 30 days
  static: 7 * 24 * 60 * 60 * 1000,  // 7 days
  api: 5 * 60 * 1000                 // 5 minutes
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Enhanced fetch event with cache strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) return;

  const url = new URL(event.request.url);
  const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname);
  const isAPI = url.pathname.startsWith('/api/');
  const isStatic = /\.(css|js|woff|woff2|ttf|eot)$/i.test(url.pathname);

  if (isImage) {
    event.respondWith(handleImageRequest(event.request));
  } else if (isAPI) {
    event.respondWith(handleAPIRequest(event.request));
  } else if (isStatic) {
    event.respondWith(handleStaticRequest(event.request));
  } else {
    event.respondWith(handleHTMLRequest(event.request));
  }
});

// Cache-first strategy for images
async function handleImageRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return placeholder image if available
    return cache.match('/placeholder.svg') || new Response('Image not available', { status: 404 });
  }
}

// Network-first strategy for API calls
async function handleAPIRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Cache-first strategy for static assets
async function handleStaticRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Check if cache is still valid
    const cacheDate = new Date(cachedResponse.headers.get('date'));
    const now = new Date();
    const isExpired = (now.getTime() - cacheDate.getTime()) > CACHE_DURATION.static;
    
    if (!isExpired) {
      return cachedResponse;
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || new Response('Resource not available', { status: 404 });
  }
}

// Network-first strategy for HTML
async function handleHTMLRequest(request) {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    return cachedResponse || cache.match('/') || new Response('Offline', { status: 503 });
  }
}