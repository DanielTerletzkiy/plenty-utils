<template>
  <div class="mt-4">
    <v-card outlined rounded="xl" max-width="470">
      <div style="background: hsl(0, 0%, 16%)">
        <v-card-title>
          {{ equation }}
        </v-card-title>
        <v-card-subtitle> = {{ result }} </v-card-subtitle>
      </div>
      <v-row class="ma-2">
        <v-spacer></v-spacer>
        <v-btn icon color="grey" @click="equation = equation.substring(0, equation.length - 1)">
          <v-icon> mdi-keyboard-backspace </v-icon>
        </v-btn>
        <v-btn icon color="grey" @click="()=>{equation = ''; result=''}">
          <v-icon> mdi-close-circle-outline </v-icon>
        </v-btn>
      </v-row>
      <div style="display: flex">
        <v-row class="ma-2" style="max-width: 216px">
          <v-col
            class="pa-1"
            v-for="item in [7, 8, 9, 4, 5, 6, 1, 2, 3]"
            :key="item"
          >
            <v-btn
              height="64"
              elevation="6"
              class="text-h4 font-weight-light grey--text"
              @click="equation += item"
            >
              {{ item }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="ma-2" style="max-width: 216px">
          <v-col
            class="pa-1"
            v-for="item in ['+', '-', '*', '/', '(', ')', '=']"
            :key="item"
          >
            <v-btn
              height="64"
              elevation="6"
              style="width: 100%"
              class="text-h4 font-weight-light grey--text"
              :style="{ background: item == '=' ? util.gradient : '' }"
              @click="
                () => {
                  if (item == '=') {
                    solve();
                  } else {
                    equation += item;
                  }
                }
              "
            >
              {{ item }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    equation: '',
    result: '',
  }),

  watch:{
    equation(){
      this.solve()
    }
  },

  methods: {
    solve() {
      this.result = eval(this.equation);
    },
  },
};
</script>

<style></style>
