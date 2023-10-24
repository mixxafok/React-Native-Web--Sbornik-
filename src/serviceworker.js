const CACHE_NAME = "version-11";
const urlToCache = [
  '/',
  '/index.html',
  '/offine.html',
  '/serviceworker.js',
  '/static/js/787.04d9e719.chunk.js',
  '/static/js/787.04b9e719.chunk.js.map',
  '/static/js/main.b802a956.js.LICENSE.txt',
  '/static/js/main.b802a956.js',
  '/static/js/main.b802a956.js.map',
  '/static/css/main.739cc27e.css.map',
  '/static/css/main.739cc27e.css',
  ];

const self = this;

//install sw

self.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) =>{
        console.log('opened cache')
        return cache.addAll(urlToCache);
      })
  )
})

// listen for resquests

self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request)
      .then(()=>{
        return fetch(event.request)
          .catch(()=> caches.match('/index.html'))
      })
  )
})

// activate the SW

// self.addEventListener('activate',async (event)=>{
//   const cacheWhiteList = [];
//     cacheWhiteList.push(CACHE_NAME);

//     const cacheNames = await caches.keys();
//     await Promise.all(
//       cacheNames
//       .filter(name => name !== staticCacheName)
//       .map(name=> caches.delete(name))
//     )
// })