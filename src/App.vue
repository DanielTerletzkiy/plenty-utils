<template>
  <v-app>
    <v-app-bar app color="#242526" dark>
      <v-card-title
        @click="$router.push('/')"
        class="text-h3 font-weight-light grey--text"
        >Plenty of Utils</v-card-title
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation
      v-if="
        $route.path.includes('Categories/') &&
        $route.path.split('/').length - 1 < 3
      "
      style="height: 57px; background: #1e1e1e"
    >
      <v-btn
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
      style="height: 57px; background: #1e1e1e"
    >
      <div
        v-for="category in Object.keys(util.categories)"
        :key="category"
        style="height: 100%; overflow-y: auto; overflow-x: auto"
      >
        <v-btn
          v-haptic="{
            trigger: 'click',
          }"
          v-for="item in util.categories[category]"
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
