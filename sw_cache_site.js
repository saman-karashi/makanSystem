const cacheName = "v1";


const putInCache =async(req,data)=>{
const cache = await caches.open(cacheName);

await cache.put(req,data);
}

const cacheFirst = async(req)=>{
    const responseFromCache = await caches.match(req);

    if(responseFromCache){
        return responseFromCache
    }
    try {
        const resFromNetwork = await fetch(req);
        putInCache(req,resFromNetwork.clone());
        return resFromNetwork;
    } catch (error) {
        const err =await caches.match(req);
        console.error(`An error occured with:${err}`);
    }

}

//Fetch document data
self.addEventListener('fetch',e =>{
    e.respondWith(cacheFirst(e.request))
})


const deleteCache = async(key)=>{
    await caches.delete(key);
}


const deleteOldCaches = async()=>{
    const keyList = await caches.keys();

    const cachesToDelete = keyList.filter((key) => key !== cacheName);

    await Promise.all(cachesToDelete.map(deleteCache))
}

//Handle Activate event
self.addEventListener('activate',(e)=>{
    e.waitUntil(deleteOldCaches())
})
