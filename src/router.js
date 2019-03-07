import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Start',
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/game/:id',
      name: 'Game',
      props: true,
      component: Game
    }
  ]
})
