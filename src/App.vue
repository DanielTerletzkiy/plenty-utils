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
};
</script>

<style>
.theme--dark.v-application {
  background: #18191a;
}

.text,
span {
  display: block;
}

.v-card__title {
  display: block;
}
</style>
