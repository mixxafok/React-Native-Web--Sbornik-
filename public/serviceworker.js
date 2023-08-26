const CACHE_NAME = "version-1";
const urlToCache = ['index.html', 'offline.html', '../src/App.js'];

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
          .catch(()=> caches.match('index.html'))
      })
  )
})

// activate the SW

self.addEventListener('activate',async (event)=>{
  const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
      .filter(name => name !== staticCacheName)
      .map(name=> caches.delete(name))
    )
})