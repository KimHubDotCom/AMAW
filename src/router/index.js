import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BigBikesListVue from '../views/bigbikes/BigBikesList.vue'
import ViewBigBike from '../views/bigbikes/ViewBigBike.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/bigbikes',
      component: BigBikesListVue
    },

    {
      path: '/bigbikes/:id',
      name:'ViewBigBike',
      component: ViewBigBike,
      props:true
    }
  ]
})

export default router
