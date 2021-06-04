<template>
  <div class="mt-4">
    <v-btn fab absolute fixed right>
      <v-icon
        large
        v-bind:style="{
          background: util.gradient,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-box-decoration-break': 'clone',
        }"
        @click="print()"
      >
        mdi-printer
      </v-icon>
    </v-btn>
    <v-card
      id="doc"
      elevation="6"
      class="rounded-lg"
      style="width: 21cm; height: 29.7cm"
      :color="$vuetify.theme.dark ? 'hsl(0, 0%, 16%)' : ''"
    >
    <div style="display: flex;">
      <v-textarea
        label="Header"
        v-if="!printMode"
        v-model="header"
        no-resize
        filled
        hide-details
        class="rounded-lg"
        rounded
        autofocus
        height="45mm"
        style="
          position: absolute;
          height: 45mm;
          width: 85mm;
          margin-left: 20mm;
          margin-top: 45mm;
        "
      />
      <span
        v-else
        style="
          position: absolute;
          height: 45mm;
          width: 85mm;
          margin-left: 20mm;
          margin-top: 45mm;
          border: 1px solid #ccc;
        "
        class="rounded-lg"
      >
        {{ header }}
      </span>

      <v-textarea
        label="Header 2"
        v-if="!printMode"
        v-model="header2"
        no-resize
        filled
        hide-details
        class="rounded-lg"
        rounded
        autofocus
        height="40mm"
        style="
          position: absolute;
          height: 40mm;
          width: 75mm;
          right: 10mm;
          margin-top: 50mm;
        "
      />
      <span
        v-else
        style="
          position: absolute;
          height: 40mm;
          width: 75mm;
          right: 10mm;
          margin-left: 20mm;
          margin-top: 50mm;
        "
        class="rounded-lg"
      >
        {{ header2 }}
      </span>
      </div>
      <v-textarea
        label="Content"
        v-if="!printMode"
        v-model="content"
        no-resize
        filled
        hide-details
        class="rounded-lg"
        rounded
        height="180mm"
        style="
          position: absolute;
          height: 180mm;
          width: 165mm;
          margin-left: 25mm;
          margin-top: calc(45mm + 45mm + 8.46mm);
        "
      />
      <span
        v-else
        style="
          position: absolute;
          height: 180mm;
          width: 165mm;
          margin-left: 25mm;
          margin-top: calc(45mm + 45mm + 8.46mm);
        "
      >
        {{ content }}
      </span>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';

Vue.use(VueHtmlToPaper);

export default {
  data: () => ({
    printMode: false,
    header: '',
    header2: '',
    content: '',
  }),

  watch: {
    printMode(value) {
      console.log(value);
    },
  },

  methods: {
    print() {
      this.$vuetify.theme.dark = false;
      this.printMode = true;

      setTimeout(async () => {
        await this.$htmlToPaper('doc');
        setTimeout(async () => {
          this.$vuetify.theme.dark = true;
          this.printMode = false;
        }, 1000);
      }, 1000);
    },
  },
};
</script>

<style></style>
