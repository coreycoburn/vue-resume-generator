<template>
  <div class="p-8">
    <h1 class="text-4xl text-center mb-8">Vue Resume Generator</h1>

    <p>Vue Resume Generator</p>

    <p>Your current data.json:</p>

    <div v-text="data"></div>
  </div>
</template>

<script>
import data from "@/assets/user/data.json";

export default {
  name: "home",

  data() {
    return {
      data
    };
  }
};
</script>
