(function addColorPusher() {
    const angularJs = 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.30/angular.js'
    const colorPusherJs = 'https://unpkg.com/color-pusher@0.1.4/dist/color-pusher.js'
    const colorPusherCss = 'https://unpkg.com/color-pusher@0.1.4/dist/color-pusher.css'

    function loadJs(url) {
        return fetch(url)
        .then(r => r.text())
        .then(eval)
        .catch(console.error)
    }

    function loadCss(url) {
        $('<link/>', {
           rel: 'stylesheet',
           type: 'text/css',
           href: url
        }).appendTo('head')
    }

    loadCss(colorPusherCss)

    function loadColorPusher() {
        $('<color-pusher/>')
        .attr({
            selectors: 'header, body, .section-speakers, .section-organisers, .section-sponsors',
            colors: '#84b296, #eccf8d, #bb8138, #ac2016, #2c1507'
        })
        .appendTo($('body'))
    }

    function bootstrapApp() {
        angular.bootstrap(document, ['color-pusher'])
    }

    // assumes there is already bootstrap and jquery
    Promise.resolve()
        .then(() => loadJs(angularJs))
        .then(() => loadJs(colorPusherJs))
        .then(loadColorPusher)
        .then(bootstrapApp)
        .then(() => {
            console.log('started color-pusher')
        })

}())
