import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import AgenteSaude from '../views/site/AgenteSaudePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/informativos',
    name: 'Informativos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Informativos.vue'),
  },
  {
    path: '/prontuarios',
    name: 'Prontuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Prontuarios.vue'),
  },
  {
    path: '/agente-saude',
    name: 'AgenteSaude',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/site/AgenteSaudePage.vue'),
  },
  {
    path: '/privacidade',
    name: 'Privacidade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacidade.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
