const STATIC_CACHE_NAME = 'akwaaba-database-site-base-static-v0.008.05';
const DYNAMIC_CACHE_NAME = 'akwaaba-database-site-dynamic-requests-v0.008.05';
const ASSETS = []; // DYNAMICALLY GENERATED IN PHP VIEW
const UNCACHEABLE_URLS = []; // DYNAMICALLY GENERATED IN PHP VIEW

//cache size limit function
const LIMIT_CACHE_SIZE = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(LIMIT_CACHE_SIZE(name, size));
            }
        });
    });
}
self.addEventListener('install', event => {
    console.log('sw installed');
    // event.waitUntil(
    //     caches.open(STATIC_CACHE_NAME).then(cache => {
    //         console.log('caching shell assets', cache);
    //         console.log({ "ASSETS": ASSETS });
    //         ASSETS.forEach((asset, i) => {
    //             // cache.add(asset)
    //             console.log('caching - ' + i, asset);
    //         });
    //         cache.addAll(ASSETS);
    //     })
    // );

    const filesUpdate = cache => {
        const stack = [];
        console.log('caching shell assets', cache);
        console.log({ "ASSETS": ASSETS });
        ASSETS.forEach(file => stack.push(
            cache.add(file).catch(_ => console.error(`can't load ${file} to cache`))
        ));
        return Promise.all(stack);
    };

    event.waitUntil(caches.open(STATIC_CACHE_NAME).then(filesUpdate));
});




//activate service worker.
self.addEventListener('activate', event => {
    // console.log('sw activated'); 
    event.waitUntil(
        caches.keys().then(keys => {
            // console.log({ keys });
            return Promise.all(keys
                    .filter(key => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
                    .map(key => caches.delete(key))
                )
                // keys.forEach(key=>{
                //     if (key !== STATIC_CACHE_NAME) {

            //     }
            // })
        })
    )
});

//fetch event
self.addEventListener('fetch', event => {
    console.log('fetch event', event);
    // UNCACHEABLE_URLS.forEach(url => {}); NOT WORKING

    if ((event.request.url.indexOf("api.") < 0) && (event.request.url.indexOf("db-api-v2.") < 0)) {
        if (event.request.url.indexOf("/login") > -1) {
            null;
        } else {
            event.respondWith(
                caches.match(event.request).then(cacheResponse => {
                    return cacheResponse || fetch(event.request).then(fetchResponse => {
                        return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                            cache.put(event.request.url, fetchResponse.clone());
                            LIMIT_CACHE_SIZE(DYNAMIC_CACHE_NAME, 30)
                            return fetchResponse;
                        });
                    });
                }).catch(() => {
                    if (event.request.url.indexOf('.png') > -1) {
                        // return caches.match(ASSETS[2]);
                    } else if (event.request.url.indexOf('.jpg') > -1) {
                        // return caches.match(ASSETS[2]);
                    } else {
                        // when all fails revert to default html
                        return caches.match(ASSETS[2]);
                    }
                })
            );
        }
    }
});

const SERVICE_WORKER_TYPES = {
    postAction: "POST_ACTION",
    networkStatus: "NETWORK_STATUS",

}

//message event
self.addEventListener('message', event => {
    // console.log('message event', event);
    const response = event.data,
        channel = new BroadcastChannel("SERVICE_WORKER_MESSENGER");
    console.log('response response', response);


    if (response.type === SERVICE_WORKER_TYPES.networkStatus) {
        console.log('message event networkStatus', event);
        let response = false;
        if (navigator.onLine === false) {
            response = false;
        } else {
            response = true;
        }
        channel.postMessage({
            type: SERVICE_WORKER_TYPES.networkStatus,
            message: response,
        });
    }

    if (response.type === SERVICE_WORKER_TYPES.postAction) {
        console.log('message event postAction', event);
    }
});