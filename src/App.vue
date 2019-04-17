<template>
  <div id="app" class="flex">
    <div id="nav" class="w-1/4 max-w-xl p-12">
      <ul>
        <ul v-for="(route, index) in routes" :key="index">
          <li class="mt-4">
            <router-link
              :to="{ name: route.name }"
              class="text-gray-700 capitalize"
              >{{ route.name }}</router-link
            >
            <ul v-for="child in route.children" :key="child.name" class="ml-6">
              <li class="mt-4">
                <router-link
                  :to="{ name: child.name }"
                  class="text-gray-700 capitalize"
                  >{{ child.name }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </div>

    <div class="max-w-5xl">
      <router-view />
    </div>
  </div>
</template>

<script>
import routes from "@/routes";

export default {
  name: "app",

  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
@media print {
  #nav {
    display: none;
  }
}
</style>
