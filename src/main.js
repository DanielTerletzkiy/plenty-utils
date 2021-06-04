import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

//meta tags for google bots
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

//haptic vibration feedback
import VueHaptic from 'vue-haptic';
Vue.use(VueHaptic, {
  patterns: {
    success: [10, 100, 30],
    failure: [10, 50, 10, 50, 50, 100, 10],
    long: 200,
    default: 10,
  },
});

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
    util() {
      return this.utilities[this.$route.params.id];
    },
    category() {
      try {
        var category = Object.keys(this.util.categories).find((e) =>
          this.util.categories[e].find(
            (x) => x.name == this.$route.path.split('/')[3]
          )
        );
        var item = this.util.categories[category].find(
          (x) => x.name == this.$route.path.split('/')[3]
        );
        item.parent = category;
        console.log(item);
        return item;
      } catch (error) {
        return {};
      }
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
            { name: 'Square', icon: 'mdi-crop-square' },
            { name: 'Rectangle', icon: 'mdi-rectangle-outline' },
            { name: 'Circle', icon: 'mdi-circle-outline' },
          ],
          algebra: [
            { name: 'Calculator', icon: 'mdi-calculator' },
            { name: 'Converter', icon: 'mdi-tape-measure' },
            { name: 'Functions', icon: 'mdi-function-variant' },
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
