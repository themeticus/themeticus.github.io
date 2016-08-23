if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('haaties-brudder')
}