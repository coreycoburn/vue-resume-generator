<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/template-1">Template 1</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#nav {
  display: none;
}
</style>
