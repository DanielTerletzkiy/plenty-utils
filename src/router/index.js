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
import Percentage from '../components/Math/components/algebra/Percentage.vue';
import Converter from '../components/Math/components/algebra/Converter.vue';

//*Computer
//?Configurator
import ComputerBuilder from '../components/Computer/components/configurator/Builder';

//*Letters
//?Maker
import LetterConstructor from '../components/Letter/components/Construction.vue';

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
      //*Math
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
        path: 'Percentage',
        component: Percentage,
      },
      {
        path: 'Converter',
        component: Converter,
      },

      //*Computer
      //?Configurator
      {
        path: 'Builder',
        component: ComputerBuilder,
      },

      //*Letters
      //?Maker
      {
        path: 'Construction',
        component: LetterConstructor,
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
