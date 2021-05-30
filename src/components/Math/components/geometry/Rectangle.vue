<template>
  <div>
    
  </div>
</template>

<script>
export default {
  computed:{
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  }
};
</script>

<style></style>
