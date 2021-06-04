<template>
  <div :style="{ display: isPhone ? 'block' : 'flex' }">
    <v-container
      v-if="
        !isPhone ||
        $route.path.split('/').length - 1 < 3
      "
      :style="{
        marginLeft: '0px',
        marginRight: '0px',
        maxWidth: isPhone ? '100%' : '300px',
      }"
    >
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
                '-webkit-box-decoration-break': 'clone',
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
              <div class="ml-1" style="width: 100%">
                <v-list-item
                  active-class="primary--text text--lighten-3"
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
    </v-container>
    <v-container>
      <v-card flat>
        <v-card-title
          class="text-h4 font-weight-bold"
          v-bind:style="{
            'white-space': 'inherit !important',
            'text-transform': 'uppercase',
            background: util.gradient,
            display: 'flex',
          }"
        >
          <v-icon x-large>{{ category.icon }}</v-icon
          >{{ category.name }}
        </v-card-title>

        <v-card-text>
          <router-view></router-view>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  },
  metaInfo() {
    const category = this.category.name;
    const name = this.util.name;
    return {
      title: name,
      titleTemplate: `${category} | ${name} | Plenty Utils`,
      meta: [
        {
          name: 'description',
          content: 'Plenty of useful information about Math',
        },
        { property: 'og:title', content: 'Math' },
        { property: 'og:site_name', content: 'Plenty Utils' },
        {
          property: 'og:description',
          content: 'Plenty of useful information about Math',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://plenty-utils.herokuapp.com/Categories/Math',
        },
      ],
    };
  },
};
</script>

<style></style>
