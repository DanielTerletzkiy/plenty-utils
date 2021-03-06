<template>
  <v-card rounded="xl" elevation="6" color="hsl(0, 0%, 16%)">
    <GradientText text="Construction" type="h4" />
    <v-card-text style="display: flex">
      <v-row
        justify="space-between"
        :style="{ flexDirection: isPhone ? 'column' : 'row' }"
      >
        <v-col
          :style="{
            display: 'flex',
            justifyContent: isPhone ? 'center' : 'none',
          }"
        >
          <SquareSVG v-if="type == 'square'" />
          <RectangleSVG v-if="type == 'rectangle'" />
        </v-col>
        <v-col class="pa-0 pt-4">
          <GradientText text="Formulas" type="h5" />
          <v-card-text>
            <v-col>
              <v-row v-for="formula in formulas" :key="formula.description">
                <span class="text-h6 font-weight-light"
                  >{{ formula.description }} =
                  <strong>{{ formula.formula }}</strong></span
                >
              </v-row>
            </v-col>
          </v-card-text>
        </v-col>
        <v-col class="pa-0 pt-4">
          <GradientText text="Examples" type="h5" />
          <v-card-text class="pb-0">
            <v-list rounded color="transparent" dense>
              <v-menu
                content-class="rounded-lg"
                offset-x
                offset-y
                top
                v-for="example in examples"
                :key="example.description"
              >
                <template #activator="{ on: onMenu }">
                  <v-list-item
                    v-on="{ ...onMenu }"
                    style="display: block !important; width: calc(100% + 40px);"
                    class="pr-0 ml-n5"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      "
                    >
                      <span
                        class="text-h5 font-weight-light"
                        style="min-width: 18px; text-align: center"
                      >
                        {{ example.description }}
                      </span>
                      <span
                        class="text-h6 font-weight-light"
                        style="display: flex; align-items: center"
                      >
                        <span>Given:</span>
                        <div class="mx-1" />
                        <v-card
                          outlined
                          rounded="pill"
                          class="pa-1 px-2"
                          style="display: flex"
                        >
                          <div
                            v-for="(given, i) in example.given"
                            :key="given"
                            style="display: flex"
                          >
                            <span class="grey--text">
                              {{ given }}
                            </span>
                            <v-divider
                              v-if="i != example.given.length - 1"
                              vertical
                              class="mx-1"
                            />
                          </div>
                        </v-card>
                      </span>
                    </div>
                  </v-list-item>
                </template>
                <v-card rounded="lg" outlined style="overflow: hidden">
                  <v-card-text>
                    <v-row v-for="(step, x) in example.process" :key="step">
                      <v-icon v-if="x != example.process.length - 1">
                        mdi-chevron-right
                      </v-icon>
                      <v-icon
                        large
                        v-else
                        v-bind:style="{
                          background: util.gradient,
                          '-webkit-background-clip': 'text',
                          '-webkit-text-fill-color': 'transparent',
                          '-webkit-box-decoration-break': 'clone',
                        }"
                        >mdi-equal</v-icon
                      >
                      <span
                        :class="
                          x != example.process.length - 1
                            ? 'text-h6 font-weight-light'
                            : 'text-h5 font-weight-bold'
                        "
                        >{{ step }}</span
                      >
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SquareSVG from './svg/Square.svg';
import RectangleSVG from './svg/Rectangle.svg';
import GradientText from '@/components/helper/GradientText';
export default {
  components: {
    SquareSVG,
    RectangleSVG,
    GradientText,
  },
  props: {
    formulas: Array,
    examples: Array,
    util: Object,
    type: String,
  },
};
</script>

<style></style>
