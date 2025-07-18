import {createWebHistory,  createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/adout.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetail from "../views/ProductDetails.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/Products', component: Products },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
},
);

export default router; 