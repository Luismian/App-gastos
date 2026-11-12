self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('gastos-store-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html' // Si tienes separado tu HTML, asegúrate de incluir los archivos principales aquí
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});