<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="util in Object.values(utilities)" :key="util.name">
        <v-btn
          link
          :to="'Categories/' + util.name"
          x-large
          :width="isPhone ? '100%' : '100%'"
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
};
</script>
