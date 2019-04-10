import Vue from 'vue'
import Router from 'vue-router'
import routes from './map'

Vue.use(Router)

let router,notFound

notFound = {
  path: '*',
  meta: {title: 404},
  component: {render:(h)=>h('h1','404 not found')}
}
router = new Router({
  mode: 'history',
  routes: Object.keys(routes).reduce((previous, current) => {
    return (previous.push({path: current, ...routes[current]}), previous)
  }, []).concat(notFound),
  scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0}
  }
})

router.beforeEach(({matched}, from, next) => {
  matched.filter(({meta}) => meta.title).map(({meta}) => {
      setTitle(meta.title)
  })
  next()
})

Vue.router = router

export default router

function setTitle(title, src = 'https://www.baidu.com/favicon.ico') {
    if (window.navigator.userAgent.toLocaleLowerCase().indexOf("houbank-") > 0) {//只有APP中内嵌才会要这样更改title
        let titleEl = document.querySelector("title")
        // alert("titleEl.innerHTML" + titleEl.innerHTML)
        titleEl.parentNode.removeChild(titleEl)

        let id, iframe
        id = '__refreshDocumentTitle__'
        iframe = document.getElementById(id)
        if (!iframe) {
            iframe = Object.assign(document.createElement('iframe'), {
                id,
                width: 0,
                height: 0,
                src: src,
                scolling: 'no',
                frameborder: 0
            })
            iframe.style.display = 'none'
            document.body.appendChild(iframe)
        } else {
            iframe.src = iframe.src
        }
    }
    document.title = title
}

