<template>
  <v-container style="max-width: 800px">
    <v-card flat>
      <v-card-title
        class="text-h4 font-weight-bold"
        v-bind:style="{
          'white-space': 'inherit !important',
          'text-transform': 'uppercase',
          background: util.gradient,
        }"
      >
        Categories
      </v-card-title>
      <v-card-text>
        <v-list
          rounded
          v-for="category in Object.keys(util.categories)"
          :key="category"
        >
          <v-card-title
            class="text-h6 font-weight-bold"
            v-bind:style="{
              'white-space': 'inherit !important',
              'text-transform': 'uppercase',
              background: util.gradient,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }"
          >
            {{ category }}
          </v-card-title>
          <div style="display: flex; margin-left: 16px">
            <v-divider
              vertical
              style="
                border: 3px solid rgba(255, 255, 255, 0.12);
                border-radius: 3px;
              "
            ></v-divider>
            <div class="ml-1">
              <v-list-item
                class="mb-0"
                v-for="item in util.categories[category]"
                :key="item.name"
                link
                :to="
                  ($route.path.includes($route.params.id + '/')
                    ? ''
                    : $route.params.id + '/') + item.name
                "
              >
              <v-list-item-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-avatar>
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item>
            </div>
          </div>
        </v-list>
      </v-card-text>
    </v-card>
    <router-view></router-view>
  </v-container>
</template>

<script>
/* eslint-disable prettier/prettier */

export default {
  computed: {
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  },
};
</script>

<style></style>
