
self.addEventListener('install', (event) => {
    // Cached files
    const cachedFiles = [
        '/Growthchart/',
        '/Growthchart/favicon.ico',
        '/Growthchart/apple-touch-icon.png',
    ];
    
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll(cachedFiles);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
