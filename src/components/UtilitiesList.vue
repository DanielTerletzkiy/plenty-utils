<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="util in Object.values(utilities)" :key="util.name">
        <v-btn
          link
          :to="'Categories/' + util.name"
          x-large
          :width="isPhone ? '100%' : 300"
          :style="{ background: util.gradient }"
        >
          <v-icon large>{{ util.icon }}</v-icon
          ><span class="text-h4 font-weight-light">{{ util.name }}</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UtilitiesList',

  metaInfo() {
    return {
      title: 'Categories',
      meta: [
        { name: 'description', content: 'All useful utilities at a glance' },
        { property: 'og:title', content: 'Categories' },
        { property: 'og:site_name', content: 'Plenty Utils' },
        {
          property: 'og:description',
          content: 'All useful utilities at a glance',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://plenty-utils.herokuapp.com/' },
      ],
    };
  },
};
</script>
