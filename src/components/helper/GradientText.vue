<template>
  <v-card-title
    :class="'text-'+type+' font-weight-bold'"
    v-bind:style="{
      'text-transform': 'uppercase',
      background: util?util.gradient:color,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }"
  >
    {{text}}
  </v-card-title>
</template>

<script>
export default {
  props: {
    text: undefined,
    type: String,
    color: String,
  }
};
</script>

<style></style>
