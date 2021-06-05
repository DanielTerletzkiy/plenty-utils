<template>
  <div class="mt-4">
    <v-row>
      <v-col v-for="item in data" :key="item">
        <v-card class="pa-4" width="400" outlined>
          {{ item }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: undefined,
  }),
  mounted: async function () {
    var response = await fetch('/api/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    var body = await response.text();
    console.log(body);
    console.log(body.split('\t\n\t'));
    this.data = body.split('\t\n\t');
  },
};
</script>

<style></style>
