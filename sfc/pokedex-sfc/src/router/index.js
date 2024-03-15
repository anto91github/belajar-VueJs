import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListPokemonView from '../views/ListPokemon.vue'
import DetailPokemon from '@/views/DetailPokemon.vue'
// import DetailIndex from '@/views/DetailIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListPokemonView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    /*{
        path:'/pokemon/:name',
        component: DetailIndex,
        children:[
          {
            path:'',
            component: DetailPokemon
          },
        ]
    },*/
    {
      path:'/pokemon/:name',
      component: DetailPokemon,
    }
  ]
})

export default router
