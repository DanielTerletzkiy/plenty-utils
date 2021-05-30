import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
    primaryColor() {
      return this.theme == 'dark'
        ? this.$vuetify.theme.themes.dark.primary
        : this.$vuetify.theme.themes.light.primary;
    },
    innerHeight: function () {
      return window.innerHeight;
    },
    isPhone() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  data: () => ({
    utilities: {
      Math: {
        name: 'Math',
        icon: 'mdi-math-compass',
        gradient: 'linear-gradient(to right, #8e2de2, #4a00e0)',
        categories: {
          geometry: [
            { name: 'Square', icon: 'mdi-' },
            { name: 'Rectangle', icon: 'mdi-' },
            { name: 'Circle', icon: 'mdi-' },
          ],
          algebra: [
            { name: 'Calculator', icon: 'mdi-' },
            { name: 'Unit Converter', icon: 'mdi-' },
            { name: 'Functions', icon: 'mdi-' },
          ],
        },
      },
      Chemistry: {
        name: 'Chemistry',
        icon: 'mdi-safety-goggles',
        gradient: 'linear-gradient(to right, #dc2424, #4a00e0)',
        categories: {},
      },
      Info: {
        name: 'Info',
        icon: 'mdi-earth',
        gradient: 'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)',
        categories: {},
      },
      Letters: {
        name: 'Letters',
        icon: 'mdi-file-document-edit-outline',
        gradient: 'linear-gradient(to right, #1c92d2, #64c2f5)',
        categories: {},
      },
    },
  }),
  methods: {},
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
