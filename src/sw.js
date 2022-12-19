const registerServiceWorker = async()=>{
    if(process.env.NODE_ENV === 'production' && "serviceWorker" in navigator){
        try {
            const reg = await navigator.serviceWorker.register('/sw_cache_site.js');
            console.log('Service worker is registered.');
        } catch (error) {
            console.error('Service worker is not registered:' + error)
        }
    }
}


export default registerServiceWorker;