var version = '0.12.3';
var cacheName = 'pre_cache_'+version;
var apiCacheName = 'runtime_cache'+version;
var cacheFiles = [
    '/',
    '/new',
    '/setting',
    '/me',
    '/donation',
    'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js',
    'https://unpkg.com/react@16.13.1/umd/react.production.min.js'
];

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener('install', function (e) {
    console.log('Service Worker 状态： install');
    var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
        return cache.addAll(cacheFiles);
    });
    e.waitUntil(cacheOpenPromise);
    // self.skipWaiting();
});

// 监听activate事件，激活后通过cache的key来判断是否更新cache中的静态资源
self.addEventListener('activate', function (e) {
    console.log('Service Worker 状态： activate');
    var cachePromise = caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
            if (key !== cacheName && key !== apiCacheName) {
                return caches.delete(key);
            }
        }));
    });
    e.waitUntil(cachePromise);
    // 注意不能忽略这行代码，否则第一次加载会导致fetch事件不触发
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    // 需要缓存的xhr请求
    // console.log('正在请求：' + e.request.url);

    // 判断当前请求是否需要缓存
    var needCache = e.request.url.match(/https:\/\/pagenote\.cn.*(lib\/|img|icons|css$|\.js$|html|)/);

    if (needCache) {
        // 需要缓存
        // 使用fetch请求数据，并将请求结果clone一份缓存到cache
        // 此部分缓存后在browser中使用全局变量caches获取
        caches.open(apiCacheName).then(function (cache) {
            return fetch(e.request).then(function (response) {
                cache.put(e.request.url, response.clone());
                return response;
            });
        });
    }
    else {
        // 非api请求，直接查询cache
        // 如果有cache则直接返回，否则通过fetch请求
        e.respondWith(
            caches.match(e.request).then(function (cache) {
                return cache || fetch(e.request);
            }).catch(function (err) {
                console.log(err);
                return fetch(e.request);
            })
        );
    }
});
