<template>
  <div id="app" class="flex min-h-screen">
    <div id="nav" class="w-1/4 max-w-xl p-12">
      <ul>
        <li><router-link to="/">Home</router-link></li>

        <li><router-link to="/template-1">Template 1</router-link></li>
      </ul>
    </div>

    <transition name="fade">
      <div class="w-3/4 bg-gray-100 max-w-5xl shadow-lg">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<style scoped>
@media print {
  #nav {
    display: none;
  }
}
</style>
