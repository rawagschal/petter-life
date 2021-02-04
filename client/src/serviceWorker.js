// const FILES_TO_CACHE = [
//     "./index.html",
//     "./assets/cover-image/petterLife-bg-13 2.png",
//     "./assets/logo/logo.png",
//     "../public/index.html"
// ];

// const APP_PREFIX = 'PetterLife-';
// const VERSION = 'version_01';
// const CACHE_NAME = APP_PREFIX + VERSION;

// window.self.addEventListener('install', function (e) {
//     e.waitUntil(
//         caches.open(CACHE_NAME).then(function (cache) {
//             console.log('installing cache : ' + CACHE_NAME)
//             return cache.addAll(FILES_TO_CACHE)
//         })
//     )
// })

// window.self.addEventListener('activate', function (e) {
//     e.waitUntil(
//         caches.keys().then(function (keyList) {
//             let cacheKeeplist = keyList.filter(function (key) {
//                 return key.indexOf(APP_PREFIX);
//             });
//             cacheKeeplist.push(CACHE_NAME);

//             return Promise.all(keyList.map(function (key, i) {
//                 if (cacheKeeplist.indexOf(key) === -1) {
//                     console.log('deleting cache : ' + keyList[i]);
//                     return caches.delete(keyList[i]);
//                 }
//             })
//             );
//         })
//     );
// });

// window.self.addEventListener('fetch', function (e) {
//     console.log('fetch request : ' + e.request.url)
//     e.respondWith(
//         caches.match(e.request).then(function (request) {
//                 return request || fetch(e.request)
//         })
//     )
// })