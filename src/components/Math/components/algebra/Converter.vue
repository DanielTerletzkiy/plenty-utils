<template>
  <div>
    <v-card outlined class="mt-4" rounded="xl">
      <v-card-title
        class="text-h5 font-weight-bold"
        v-bind:style="{
          'white-space': 'inherit !important',
          'text-transform': 'uppercase',
          background: util.gradient,
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-box-decoration-break': 'clone',
        }"
      >
        Length
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Value"
          single-line
          hide-details
          rounded
          filled
          outlined
          tabindex="1"
          v-model="baseLengthValue"
          type="number"
          @input="
            () => {
              calculateLengthUnits();
            }
          "
          style="position: sticky; top: 64px; z-Index: 2; backdrop-filter: blur(5px)"
          clearable
        />
        <v-btn-toggle :style="{ margin: isPhone ? '-8px' : 'auto', marginTop: '8px'}" mandatory rounded v-model="baseLengthUnit">
          <v-btn
            v-for="(item, i) in lengthUnits"
            :key="i"
            icon
            :ripple="false"
            :value="item"
          >
            {{ item }}
          </v-btn>
        </v-btn-toggle>
        <v-row class="mx-n4 my-0" :style="{ flexDirection: isPhone ? 'column' : 'row' }">
          <v-col @click="baseLengthUnit=item.unit" v-for="(item, i) in lengthUnitValues" :key="i" style="min-width: 160px">
            <v-card :flat="item.unit != baseLengthUnit" :style="{ border: item.unit == baseLengthUnit ? 'thin solid #03A9F4' : 'thin solid rgba(255, 255, 255, 0.12)'}">
              <v-card-title
                class="text-h5 font-weight-bold"
                v-bind:style="{
                  'white-space': 'inherit !important',
                  'text-transform': 'uppercase',
                  background: util.gradient,
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  '-webkit-box-decoration-break': 'clone',
                }"
              >
                {{ Number(Math.round(item.value + 'e6') + 'e-6') }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.unit }}
              </v-card-subtitle>
            </v-card>
            <v-row class="ma-0" v-if="i!=lengthUnitValues.length-1&& !true">
              <v-icon color="grey" small>mdi-arrow-down</v-icon> : 10
              <div class="mx-2"/>
              <v-icon color="grey" small>mdi-arrow-up</v-icon> * 10
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    lengthUnits: ['mm', 'cm', 'dm', 'm', 'dam', 'hc', 'km'],
    baseLengthValue: 1,
    baseLengthUnit: 'm',
    lengthUnitValues: [],
  }),

  watch:{
    baseLengthUnit(){
      this.calculateLengthUnits()
    }
  },

  methods: {
    calculateLengthUnits() {
      var minValue = this.baseLengthValue;

      //Get smallest unit value
      for (
        let i =
          this.lengthUnits.length -
          this.lengthUnits.indexOf(this.baseLengthUnit);
        i <= this.lengthUnits.length;
        i++
      ) {
        let unit = this.lengthUnits[this.lengthUnits.length - i];
        if (unit != this.baseLengthUnit) {
          //console.log(unit);
          minValue = minValue * 10;
        }
      }
      console.log('min: ', minValue);

      //Get all units from list with smallest number
      var unitValue = minValue;
      var unitArray = [{ unit: 'mm', value: minValue||0 }];
      for (let i = 1; i < this.lengthUnits.length; i++) {
        let unit = this.lengthUnits[i];
        unitValue = unitValue / 10;
        //console.log(unit, ' : ', Number(Math.round(unitValue + 'e6') + 'e-6'));
        unitArray.push({ unit: unit, value: unitValue });
      }
      console.log('max: ', unitArray);
      this.lengthUnitValues = unitArray;
    },
  },

  mounted: function (){
    this.calculateLengthUnits()
  }
};
</script>

<style></style>
