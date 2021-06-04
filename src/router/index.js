import Vue from 'vue';
import VueRouter from 'vue-router';
import UtilitiesList from '../components/UtilitiesList.vue';

//Utils
import Categories from '../components/Categories.vue';

// 404
import PageNotFound from '../components/PageNotFound.vue';


//Categories

//*Math
//?Geometry
import Square from '../components/Math/components/geometry/Square.vue';
import Rectangle from '../components/Math/components/geometry/Rectangle.vue';
import Circle from '../components/Math/components/geometry/Circle.vue';
//?Algebra
import Calculator from '../components/Math/components/algebra/Calculator.vue';
import Converter from '../components/Math/components/algebra/Converter.vue';

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
      //?Geometry
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

      //?Algebra
      {
        path: 'Calculator',
        component: Calculator,
      },
      {
        path: 'Converter',
        component: Converter,
      },

      //? 404
      { path: '', component: PageNotFound },
    ],
  },
  //? 404
  { path: '*', component: PageNotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
