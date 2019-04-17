<template>
  <div>
    <h1>Templates</h1>

    <router-view class="bg-gray-100 shadow-lg min-h-screen"></router-view>
  </div>
</template>

<style lang="scss" scoped>
@media print {
  h1 {
    display: none;
  }
}
</style>
