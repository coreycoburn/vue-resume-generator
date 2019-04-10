<template>
  <div id="app" class="flex">
    <div id="nav" class="p-12">
      <ul>
        <li><router-link to="/">Home</router-link></li>

        <li><router-link to="/template-1">Template 1</router-link></li>
      </ul>
    </div>

    <transition name="fade">
      <router-view />
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
