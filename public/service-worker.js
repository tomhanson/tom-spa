if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './'})
        .then(function (registration) {
            console.log('success', registration);
        })
        .catch(function (e) {
            console.error('failure', e);
        })
} else {
    console.log('Service Worker is not supported in this browser.');
}



const CACHE_VERSION = 'app-v1';
const CACHE_FILES = [
    '/index.html',
    '/grid-polyfill.js',
    'favicon.ico',
    'static/css/*',
    'static/js/*',
    'https://fonts.googleapis.com/css?family=Lato:100|Roboto+Condensed:300,400,700',
    // 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache', CACHE_FILES);
                return cache.addAll(CACHE_FILES);
            })
    );
});