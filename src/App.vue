<template>
  <v-app>
    <v-app-bar app color="#242526" dark>
      <v-card-title
        @click="$router.push('/')"
        class="text-h3 font-weight-light grey--text"
        >Plenty of Utils</v-card-title
      >
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary lighten-2" v-bind="attrs" v-on="on">
            <v-icon x-large>mdi-github</v-icon>
          </v-btn>
        </template>
        <v-card outlined width="135">
          <v-row class="ma-0">
            <v-col cols="12">
              <v-btn
                href="https://github.com/DanielTerletzkiy/plenty-utils"
                rounded
                style="border: 2px solid grey"
              >
                <v-icon>mdi-github</v-icon>Repo
              </v-btn>
            </v-col>
            <v-col>
              <gh-btns-star
                slug="DanielTerletzkiy/plenty-utils"
                show-count
              ></gh-btns-star>
            </v-col>
            <v-col>
              <gh-btns-fork
                slug="DanielTerletzkiy/plenty-utils"
                show-count
              ></gh-btns-fork>
            </v-col>
          </v-row>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main :style="{ height: isPhone ? 'calc(100% + 50px)' : '' }">
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

.gh-button-container {
  border-radius: 24px;
  border: 2px solid grey;
  background: hsl(0, 0%, 20%) !important;
}
.octicon {
  fill: #ffff !important;
}
.social-count {
  border: 2px solid grey;
  border-radius: 24px !important;
  background-color: hsl(0, 0%, 30%) !important;
}
.gh-button {
  border-radius: 24px !important;
  background-color: hsl(0, 0%, 20%) !important;
  border-right: 2px solid grey;
  background-image: none !important;
  text-decoration: none !important;
  color: #ffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  padding: 3px 10px;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
