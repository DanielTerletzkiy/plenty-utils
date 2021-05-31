<template>
  <div class="mt-4">
    <Construction :formulas="formulas" :examples="examples" :util="util" type="rectangle"/>
  </div>
</template>

<script>
import Construction from '../helper/Construction' 
export default {
  components: {
    Construction
  },
  computed: {
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  },

  data: () => ({
    formulas: [
      { description: 'P', formula: '2 * ( a + b )' },
      { description: 'A', formula: 'a * b' },
      { description: 'a', formula: 'A/b' },
      { description: 'b', formula: 'A/a' },
    ],
    examples: [
      {
        description: 'P',
        given: ['a = 6cm'],
        process: ['4 * a', '4 * 6cm', '24cm'],
      },
      {
        description: 'A',
        given: ['a = 8cm'],
        process: ['a²', 'a * a', '8 * 8', '64cm²'],
      },
      {
        description: 'a',
        given: ['A = 16cm²'],
        process: ['√A', '√16', '4cm'],
      },
    ],
  }),
};
</script>

<style></style>
