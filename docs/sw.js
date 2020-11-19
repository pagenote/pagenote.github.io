var version="0.12.3",cacheName="pre_cache_"+version,apiCacheName="runtime_cache"+version,cacheFiles=["/","/new","/setting","/me","/donation","https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js","https://unpkg.com/react@16.13.1/umd/react.production.min.js"];self.addEventListener("install",(function(e){console.log("Service Worker 状态： install");var t=caches.open(cacheName).then((function(e){return e.addAll(cacheFiles)}));e.waitUntil(t)})),self.addEventListener("activate",(function(e){console.log("Service Worker 状态： activate");var t=caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!==cacheName&&e!==apiCacheName)return caches.delete(e)})))}));return e.waitUntil(t),self.clients.claim()})),self.addEventListener("fetch",(function(e){e.request.url.match(/https:\/\/pagenote\.cn.*(lib\/|img|icons|css$|\.js$|html|)/)?caches.open(apiCacheName).then((function(t){return fetch(e.request).then((function(n){return t.put(e.request.url,n.clone()),n}))})):e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})).catch((function(t){return console.log(t),fetch(e.request)})))}));