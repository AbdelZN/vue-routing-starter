import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
// import the missing components
import About from '../components/About.vue';
import ProductList from '../components/ProductList.vue';
import CreatProduct from '../components/CreateProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/productlist', component: ProductList },
    { path: '/createproduct', component: CreatProduct }

    // add the missing routes
  ]
})

export default router