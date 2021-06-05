<template>
  <v-app>
    <v-app-bar app color="#242526" dark>
      <v-card-title
        @click="$router.push('/')"
        class="text-h3 font-weight-light grey--text"
        >Plenty of Utils</v-card-title
      >
    </v-app-bar>

    <v-main style="height: calc(100% + 50px)">
      <router-view />
    </v-main>
    <v-bottom-navigation
      v-if="
        $route.path.includes('Categories/') &&
        $route.path.split('/').length - 1 < 3
      "
      style="height: 50px; background: #1e1e1e"
      fixed
    >
      <v-btn
        height="auto"
        text
        link
        replace
        :to="
          $route.path.includes('Categories/')
            ? util.name
            : 'Categrories/' + util.name
        "
        v-for="util in Object.values(utilities)"
        :key="util.name"
      >
        <span>{{ util.name }}</span>
        <v-icon
          large
          v-bind:style="{
            background: util.gradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            '-webkit-box-decoration-break': 'clone',
          }"
          >{{ util.icon }}</v-icon
        >
      </v-btn>
    </v-bottom-navigation>

    <v-bottom-navigation
      v-if="
        $route.path.includes('Categories/') &&
        $route.path.split('/').length - 1 >= 3
      "
      style="height: 50px; background: #1e1e1e"
      fixed
    >
      <div style="height: 100%; overflow-y: auto; overflow-x: auto">
        <v-btn
          height="auto"
          text
          v-haptic="{
            trigger: 'click',
          }"
          v-for="item in categories"
          :key="item.name"
          link
          :to="
            ($route.path.includes($route.params.id + '/')
              ? ''
              : $route.params.id + '/') + item.name
          "
        >
          <span>{{ item.name }}</span>
          <v-icon
            large
            v-bind:style="{
              background: util.gradient,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              '-webkit-box-decoration-break': 'clone',
            }"
            >{{ item.icon }}</v-icon
          >
        </v-btn>
      </div>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    categories() {
      var arr = [];

      Object.keys(this.util.categories).forEach((element) => {
        var items = this.util.categories[element];
        arr = arr.concat(items);
        console.log(arr);
      });

      return arr;
    },
  },

  metaInfo: {
    title: 'Plenty Utils',
    titleTemplate: '%s | Plenty Utils',
    meta: [
      {
        name: 'description',
        content: 'Plenty of useful utilities to satisfy plenty of needs',
      },
      { property: 'og:title', content: 'Plenty Utils' },
      { property: 'og:site_name', content: 'Plenty Utils' },
      {
        property: 'og:description',
        content: 'Plenty of useful utilities to satisfy plenty of needs',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://plenty-utils.herokuapp.com/' },
    ],
  },
};
</script>

<style lang="css">
/*.theme--dark.v-application {
  background: #18191a !important;
}*/

.text,
.v-card__title,
span {
  display: block;
}

.v-card__title {
  display: block;
}
</style>
