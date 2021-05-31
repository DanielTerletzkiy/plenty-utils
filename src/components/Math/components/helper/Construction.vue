<template>
  <v-card rounded="xl" elevation="6" color="hsl(0, 0%, 16%)">
    <v-card-title
      class="text-h4 font-weight-bold"
      v-bind:style="{
        'white-space': 'inherit !important',
        'text-transform': 'uppercase',
        background: util.gradient,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-webkit-box-decoration-break': 'clone',
      }"
    >
      Construction
    </v-card-title>
    <v-card-text style="display: flex">
      <v-row justify="space-between">
        <v-col
          :style="{
            display: 'flex',
            justifyContent: isPhone ? 'center' : 'none',
            width: isPhone ? '100px' : 'auto',
          }"
        >
          <SquareSVG v-if="type=='square'"/>
          <RectangleSVG v-if="type=='rectangle'"/>
        </v-col>
        <v-col class="pa-0 pt-4">
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
            Formulas
          </v-card-title>
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
            Examples
          </v-card-title>
          <v-card-text>
            <v-list rounded color="transparent" dense>
              <v-menu
                content-class="rounded-lg"
                :nudge-width="200"
                offset-x
                left
                v-for="example in examples"
                :key="example.description"
              >
                <template #activator="{ on: onMenu }">
                  <v-list-item
                    v-on="{ ...onMenu }"
                    style="display: block !important"
                  >
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      "
                    >
                      <span
                        class="text-h5 font-weight-bold"
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
import SquareSVG from './svg/Square.svg'
import RectangleSVG from './svg/Rectangle.svg'
export default {
  components:{
    SquareSVG,
    RectangleSVG
  },
  props: {
    formulas: Array,
    examples: Array,
    util: Object,
    type: String,
  }
};
</script>

<style></style>
