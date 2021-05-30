<template>
  <div class="mt-4">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="227"
              height="254"
              viewBox="0 0 227 254"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="150%" y2="0%">
                  <stop
                    offset="0%"
                    style="stop-color: #8e2de2; stop-opacity: 1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: #4a00e0; stop-opacity: 1"
                  />
                </linearGradient>
              </defs>
              <g
                id="Rectangle_1"
                data-name="Rectangle 1"
                transform="translate(14 27)"
                fill="none"
                stroke="url(#gradient)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
              >
                <rect x="5" y="5" width="190" height="190" fill="none" />
              </g>
              <text
                id="A"
                transform="translate(1 249)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">A</tspan>
              </text>
              <text
                id="B"
                transform="translate(214 249)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">B</tspan>
              </text>
              <text
                id="C"
                transform="translate(214 22)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">C</tspan>
              </text>
              <text
                id="D"
                transform="translate(0 22)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">D</tspan>
              </text>
              <text
                id="a-2"
                data-name="a"
                transform="translate(108 249)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">a</tspan>
              </text>
              <line
                id="Line_1"
                data-name="Line 1"
                x2="181"
                y2="181"
                transform="translate(23.5 36.5)"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="5"
              />
              <text
                id="d-2"
                data-name="d"
                transform="translate(114 122)"
                fill="#707070"
                font-size="20"
                font-family="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">d</tspan>
              </text>
            </svg>
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
              <v-col>
                <v-row
                  v-for="example in examples"
                  :key="example.description"
                >
                  <div style="display: flex; align-items: center">
                    <span class="text-h5 font-weight-bold" style="min-width: 40px; text-align: right">
                      {{ example.description }}
                    </span>
                    <v-divider vertical class="mx-2" />
                    <span
                      class="text-h6 font-weight-light"
                      style="display: flex; align-items: center"
                    >
                      <span>Given:</span>
                      <div class="mx-1" />
                      <v-card
                        outlined
                        rounded="lg"
                        class="pa-1"
                        style="display: flex"
                      >
                        <div
                          v-for="(given, i) in example.given"
                          :key="given"
                          style="display: flex"
                        >
                          <span>
                            {{ given }}
                          </span>
                          <v-divider
                            v-if="i != example.given.length - 1"
                            vertical
                            class="mx-1"
                          />
                        </div>
                      </v-card>
                      <v-divider vertical class="mx-2" />
                    </span>
                    <v-menu
                      content-class="rounded-lg"
                      :nudge-width="200"
                      offset-x
                    >
                      <template #activator="{ on: onMenu }">
                        <v-tooltip bottom :value="isPhone">
                          <template #activator="{ on: onTooltip }">
                            <v-btn icon v-on="{ ...onMenu, ...onTooltip }"
                              ><v-icon>mdi-eye</v-icon></v-btn
                            >
                          </template>

                          <span>{{isPhone?'':'Show Answer'}}</span>
                        </v-tooltip>
                      </template>

                      <v-card rounded="lg" outlined style="overflow: hidden">
                        <v-card-text>
                          <v-row v-for="(step,x) in example.process" :key="step">
                            <v-icon v-if="x!=example.process.length-1">
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
                            <span :class="x!=example.process.length-1?'text-h6 font-weight-light':'text-h5 font-weight-bold'">{{ step }}</span>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                  </div>
                </v-row>
              </v-col>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    util() {
      console.log(this.$route);
      return this.utilities[this.$route.params.id];
    },
  },

  data: () => ({
    formulas: [
      { description: 'P', formula: '4 * a' },
      { description: 'A', formula: 'a²' },
      { description: 'a', formula: '√A' },
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
