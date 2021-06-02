<template>
  <div>
    <v-row :style="{ flexDirection: isPhone ? 'column' : 'row' }">
      <!--Length-->
      <v-col>
        <v-card outlined class="mt-4" rounded="xl">
          <GradientText text="Length" type="h5" />
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
              style="
                position: sticky;
                top: 64px;
                z-index: 2;
                backdrop-filter: blur(5px);
              "
              clearable
            />
            <v-btn-toggle
              v-if="!true"
              :style="{ margin: isPhone ? '-8px' : 'auto', marginTop: '8px' }"
              mandatory
              rounded
              v-model="baseLengthUnit"
            >
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
            <v-row
              class="mx-n4 my-0"
              :style="{ flexDirection: isPhone ? 'column' : 'row' }"
            >
              <v-col
                @click="baseLengthUnit = item.unit"
                v-for="(item, i) in lengthUnitValues"
                :key="i"
                style="min-width: 160px"
              >
                <v-card
                  :flat="item.unit != baseLengthUnit"
                  :style="{
                    border:
                      item.unit == baseLengthUnit
                        ? 'thin solid #03A9F4'
                        : 'thin solid rgba(255, 255, 255, 0.12)',
                  }"
                >
                  <GradientText
                    :text="Number(Math.round(item.value + 'e6') + 'e-6')"
                    type="h5"
                  />
                  <v-card-subtitle>
                    {{ item.unit.name }}
                  </v-card-subtitle>
                </v-card>
                <v-row
                  class="ma-0"
                  v-if="i != lengthUnitValues.length - 1 && !true"
                >
                  <v-icon color="grey" small>mdi-arrow-down</v-icon> : 10
                  <div class="mx-2" />
                  <v-icon color="grey" small>mdi-arrow-up</v-icon> * 10
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!--Volume-->
      <v-col>
        <v-card outlined class="mt-4" rounded="xl">
          <GradientText text="Volume" type="h5" />
          <v-card-text>
            <v-text-field
              label="Value"
              single-line
              hide-details
              rounded
              filled
              outlined
              tabindex="1"
              v-model="baseVolumeValue"
              type="number"
              @input="
                () => {
                  calculateVolumeUnits();
                }
              "
              style="
                position: sticky;
                top: 64px;
                z-index: 2;
                backdrop-filter: blur(5px);
              "
              clearable
            />
            <v-btn-toggle
              v-if="!true"
              :style="{ margin: isPhone ? '-8px' : 'auto', marginTop: '8px' }"
              mandatory
              rounded
              v-model="baseVolumeUnit"
            >
              <v-btn
                v-for="(item, i) in volumeUnits"
                :key="i"
                icon
                :ripple="false"
                :value="item"
              >
                {{ item }}
              </v-btn>
            </v-btn-toggle>
            <v-row
              class="mx-n4 my-0"
              :style="{ flexDirection: isPhone ? 'column' : 'row' }"
            >
              <v-col
                @click="
                  () => {
                    if (item.unit.type != 'liter') {
                      baseVolumeUnit = item.unit;
                    }
                  }
                "
                v-for="(item, i) in volumeUnitValues"
                :key="i"
                style="min-width: 160px"
              >
                <v-card
                  :disabled="item.unit.type == 'liter'"
                  :flat="item.unit != baseVolumeUnit"
                  :style="{
                    border:
                      item.unit == baseVolumeUnit
                        ? 'thin solid #03A9F4'
                        : 'thin solid rgba(255, 255, 255, 0.12)',
                  }"
                >
                  <GradientText
                    :text="Number(Math.round(item.value + 'e6') + 'e-6')"
                    type="h5"
                  />
                  <v-card-subtitle>
                    {{ item.unit.name }}
                  </v-card-subtitle>
                </v-card>
                <v-row
                  class="ma-0"
                  v-if="i != volumeUnitValues.length - 1 && !true"
                >
                  <v-icon color="grey" small>mdi-arrow-down</v-icon> : 10
                  <div class="mx-2" />
                  <v-icon color="grey" small>mdi-arrow-up</v-icon> * 10
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GradientText from '@/components/helper/GradientText';

export default {
  components: {
    GradientText,
  },
  data: () => ({
    //Length
    lengthUnits: [
      { unit: 'mm', name: 'Millimeter' },
      { unit: 'cm', name: 'Centimeter' },
      { unit: 'dm', name: 'Decimeter' },
      { unit: 'm', name: 'Meter' },
      { unit: 'dam', name: 'Decameter' },
      { unit: 'hc', name: 'Hectameter' },
      { unit: 'km', name: 'Kilometer' },
    ],
    baseLengthValue: 1,
    baseLengthUnit: 'm',
    lengthUnitValues: [],

    //Volume
    volumeUnits: [
      { unit: 'mm³', name: 'Cubic Millimeter', type: 'cubic' },
      { unit: 'cm³', name: 'Cubic Centimeter', type: 'cubic' },
      { unit: 'dm³', name: 'Cubic Decimeter', type: 'cubic' },
      { unit: 'm³', name: 'Cubic Meter', type: 'cubic' },
      { unit: 'ml', name: 'Milliliter', type: 'liter' },
      { unit: 'cl', name: 'Centiliter', type: 'liter' },
      { unit: 'dl', name: 'Deciliter', type: 'liter' },
      { unit: 'l', name: 'Liter', type: 'liter' },
      { unit: 'dal', name: 'Decaliter', type: 'liter' },
      { unit: 'hl', name: 'Hectoliter', type: 'liter' },
    ],
    baseVolumeValue: 1,
    baseVolumeUnit: null,
    volumeUnitValues: [],
  }),

  watch: {
    baseLengthUnit() {
      this.calculateLengthUnits();
    },
    baseVolumeUnit() {
      this.calculateVolumeUnits();
    },
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

      //Get all units from list with smallest number
      var unitValue = minValue;
      var unitArray = [];
      for (let i = 0; i < this.lengthUnits.length; i++) {
        let unit = this.lengthUnits[i];
        unitArray.push({ unit: unit, value: unitValue });
        unitValue = unitValue / 10;
      }
      this.lengthUnitValues = unitArray;
    },

    calculateVolumeUnits() {
      var minValue = this.baseVolumeValue;

      //Get smallest unit value

      for (
        let i =
          this.volumeUnits.length -
          this.volumeUnits.indexOf(this.baseVolumeUnit);
        i <= this.volumeUnits.length;
        i++
      ) {
        //console.log(i)
        let unit = this.volumeUnits[this.volumeUnits.length - i];
        if (unit != this.baseVolumeUnit&&unit.type!='liter') {
          minValue = minValue * 1000;
        }
      }

      //Get all units from list with smallest number
      var unitValue = minValue;
      var unitArray = [];
      for (let i = 0; i < 4; i++) {
        let unit = this.volumeUnits[i];
        unitArray.push({ unit: unit, value: unitValue });
        unitValue = unitValue / 1000;
      }

      var milliLiter = unitArray[2].value * 10000;

      //console.log('ml', milliLiter);
      var tempArray = [];
      for (let i = unitArray.length; i < this.volumeUnits.length; i++) {
        tempArray.push(this.volumeUnits[i]);
      }

      //tempArray = tempArray.reverse();
      for (let i = 0; i < tempArray.length; i++) {
        let unit = tempArray[i];
        milliLiter = milliLiter / 10;
        //console.log(unit.name);
        unitArray.push({ unit: unit, value: milliLiter });
      }
      this.volumeUnitValues = unitArray;
    },
  },

  mounted: function () {
    this.calculateLengthUnits();
    this.calculateVolumeUnits();
  },
};
</script>

<style></style>
