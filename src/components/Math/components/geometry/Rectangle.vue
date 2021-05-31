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
        given: ['a = 6cm', 'b = 3cm'],
        process: ['2 * ( a + b )', '2 * ( 6 + 3 )', '2 * 9', '18cm'],
      },
      {
        description: 'A',
        given: ['a = 8cm', 'b = 4cm'],
        process: ['a * b', '8 * 4', '32cm²'],
      },
      {
        description: 'a',
        given: ['A=16cm²', 'b=2cm'],
        process: ['A/b', '16/2', '8cm'],
      },
      {
        description: 'b',
        given: ['A=35cm²', 'b=5cm'],
        process: ['A/a', '35/5', '7cm'],
      },
    ],
  }),
};
</script>

<style></style>
