<template>
  <div class="mt-4">
    <Construction
      :formulas="formulas"
      :examples="examples"
      :util="util"
      type="square"
    />
    <v-row class="mt-4">
      <v-row
        class="ma-0"
        :style="{ flexDirection: isPhone ? 'column' : 'row' }"
      >
        <v-col>
          <v-text-field
            label="Unit"
            prefix="Side a"
            single-line
            hide-details
            rounded
            filled
            outlined
            tabindex="1"
            v-model="a"
            type="number"
            @input="
              () => {
                calculatePerimiter();
                calculateArea();
              }
            "
          />
        </v-col>
        <v-col>
          <v-text-field
            label="Unit"
            prefix="Perimiter"
            single-line
            hide-details
            rounded
            filled
            outlined
            tabindex="1"
            v-model="P"
            type="number"
            @input="
              () => {
                calculateSide_Perimiter();
                calculateArea();
              }
            "
          />
        </v-col>
        <v-col>
          <v-text-field
            label="Unit"
            prefix="Area"
            single-line
            hide-details
            rounded
            filled
            outlined
            tabindex="1"
            v-model="A"
            type="number"
            @input="
              () => {
                calculateSide_Area();
                calculatePerimiter();
              }
            "
          />
        </v-col>
      </v-row>
    </v-row>
    <v-row :style="{ flexDirection: isPhone ? 'column' : 'row' }">
      <v-col>
        <v-card outlined style="diplay: flex">
          <v-card-title>
            Side (a)
            <v-spacer></v-spacer>
            <v-card-subtitle class="text-h6 font-weight-light py-1 px-0">
              √<strong class="font-weight-bold">{{
                A ? Number(Math.round(A + 'e2') + 'e-2') : 'A'
              }}</strong>
            </v-card-subtitle>
            <v-card-title
              class="text-h5 font-weight-bold py-1 pl-1"
              v-bind:style="{
                'white-space': 'inherit !important',
                'text-transform': 'uppercase',
                background: util.gradient,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                '-webkit-box-decoration-break': 'clone',
              }"
            >
              = {{ a ? Number(Math.round(a + 'e2') + 'e-2') : 'Result' }}
            </v-card-title>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined style="diplay: flex">
          <v-card-title>
            Perimiter (P)
            <v-spacer></v-spacer>
            <v-card-subtitle class="text-h6 font-weight-light py-1 px-0">
              <strong class="font-weight-bold">{{
                a ? Number(Math.round(a + 'e2') + 'e-2') : 'a'
              }}</strong>
              * 4
            </v-card-subtitle>
            <v-card-title
              class="text-h5 font-weight-bold py-1 pl-1"
              v-bind:style="{
                'white-space': 'inherit !important',
                'text-transform': 'uppercase',
                background: util.gradient,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                '-webkit-box-decoration-break': 'clone',
              }"
            >
              = {{ P ? Number(Math.round(P + 'e2') + 'e-2') : 'Result' }}
            </v-card-title>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined style="diplay: flex">
          <v-card-title>
            Area (A)
            <v-spacer></v-spacer>
            <v-card-subtitle class="text-h6 font-weight-light py-1 px-0">
              <strong class="font-weight-bold">{{
                a ? Number(Math.round(a + 'e2') + 'e-2') : 'a'
              }}</strong
              >²
            </v-card-subtitle>
            <v-card-title
              class="text-h5 font-weight-bold py-1 pl-1"
              v-bind:style="{
                'white-space': 'inherit !important',
                'text-transform': 'uppercase',
                background: util.gradient,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                '-webkit-box-decoration-break': 'clone',
              }"
            >
              = {{ A ? Number(Math.round(A + 'e2') + 'e-2') : 'Result' }}
            </v-card-title>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Construction from '../helper/Construction';
export default {
  components: {
    Construction,
  },
  computed: {
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  },

  data: () => ({
    a: undefined,
    A: undefined,
    P: undefined,

    formulas: [
      { description: 'a', formula: '√A' },
      { description: 'P', formula: '4 * a' },
      { description: 'A', formula: 'a²' },
    ],
    examples: [
      {
        description: 'a',
        given: ['A = 16cm²'],
        process: ['√A', '√16', '4cm'],
      },
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
    ],
  }),

  methods: {
    calculatePerimiter() {
      this.P = this.a * 4;
      return this.P;
    },
    calculateArea() {
      this.A = this.a * this.a;
      return this.A;
    },
    calculateSide_Area() {
      this.a = Math.sqrt(this.A);
      return this.a;
    },
    calculateSide_Perimiter() {
      this.a = this.P / 4;
      return this.a;
    },
  },
};
</script>

<style></style>
