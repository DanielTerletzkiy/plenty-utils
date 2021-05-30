<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="100"
      viewBox="0 0 200 100"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8e2de2" />
          <stop offset="100%" stop-color="#4a00e0" />
        </linearGradient>
      </defs>
      <rect
        width="200"
        height="100"
        stroke="url(#gradient)"
        stroke-width="20"
        fill="none"
      />
    </svg>
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
};
</script>

<style></style>
