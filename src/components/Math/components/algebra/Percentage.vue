<template>
  <div class="mt-4">
    <v-card rounded="xl" outlined>
      <v-col>
        <v-row>
          <v-col>
            <v-card outlined @click="selected = 0">
              <GradientText :text="base" type="h5" />
              <v-card-subtitle> Base </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <v-card outlined @click="selected = 1">
              <GradientText :text="amount" type="h5" />
              <v-card-subtitle> Amount </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <v-card outlined @click="selected = 2">
              <GradientText :text="percentage" type="h5" />
              <v-card-subtitle> Percentage </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-fade-transition>
              <v-text-field
                v-if="selected == 1 || selected == 2"
                v-model="base"
                type="number"
                label="Base"
                filled
                rounded
                @input="calculate()"
              />
            </v-fade-transition>
          </v-col>
          <v-col>
            <v-fade-transition>
              <v-text-field
                v-if="selected == 0 || selected == 2"
                v-model="amount"
                type="number"
                label="Amount"
                filled
                rounded
                @input="calculate()"
              />
            </v-fade-transition>
          </v-col>
          <v-col>
            <v-fade-transition>
              <v-text-field
                v-if="selected == 0 || selected == 1"
                v-model="percentage"
                type="number"
                label="Percentage"
                filled
                rounded
                @input="calculate()"
              />
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import GradientText from '@/components/helper/GradientText';

export default {
  components: {
    GradientText,
  },

  methods:{
    calculate() {
      if(this.selected == 0){
        //Base
        this.base = (this.amount*100)/this.percentage
      }
      if(this.selected == 1){
        //Amount
        this.amount = (this.percentage*this.base)/100
      }
      if(this.selected == 2){
        //Percentage
        this.percentage = (this.amount/this.base)*100
      }
    }
  },

  data: () => ({
    selected: undefined,

    base: undefined,
    amount: undefined,
    percentage: undefined,
  }),
};
</script>

<style></style>
