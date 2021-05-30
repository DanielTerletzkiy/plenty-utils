import Vue from 'vue';
import VueRouter from 'vue-router';
import UtilitiesList from '../components/UtilitiesList.vue';

//Utils
import Categories from '../components/Categories.vue';

//Categories
import Square from '../components/Math/components/geometry/Square.vue';
import Rectangle from '../components/Math/components/geometry/Rectangle.vue';
import Circle from '../components/Math/components/geometry/Circle.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UtilitiesList,
  },
  {
    path: '/Categories/:id/',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: 'Rectangle',
        component: Rectangle,
      },
      {
        path: 'Square',
        component: Square,
      },
      {
        path: 'Circle',
        component: Circle,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
