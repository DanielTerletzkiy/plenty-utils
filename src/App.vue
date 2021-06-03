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
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  metaInfo() {
        return {
            title: 'Plenty Utils',
            meta: [
                { name: 'description', content: 'Plenty of useful utilities to satisfy plenty of needs'},
                { property: 'og:title', content: 'Plenty Utils'},
                { property: 'og:site_name', content: 'Plenty Utils'},
                { property: 'og:description', content: 'Plenty of useful utilities to satisfy plenty of needs'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://plenty-utils.herokuapp.com/'},
            ]
        }
    },
};
</script>

<style lang="css">
/*.theme--dark.v-application {
  background: #18191a !important;
}*/


.text, .v-card__title, span {
  display: block;
}

.v-card__title {
  display: block;
}
</style>
