import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'alertDemo',
      component: () => import('./views/alert/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/radio',
      name: 'Radio',
      component: () => import( /* webpackChunkName: "about" */ './views/radio/index.vue')
    }, {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import( /* webpackChunkName: "about" */ './views/checkbox/index.vue')
    }
  ]
})