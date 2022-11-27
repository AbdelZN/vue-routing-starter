import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
// import the missing components

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home }
    // add the missing routes
  ]
})

export default router