<template>
  <div class="flex">
    <div class="w-1/3 bg-gray-800 text-gray-100 p-10 text-center">
      <div class="flex justify-center">
        <img
          v-if="data.headshot.display"
          class="rounded-full h-40 w-40 mb-8 border-2"
          src="@/assets/user/headshot.jpg"
          alt="headshot"
        />
        <div
          v-else
          class="flex rounded-full bg-white text-gray-800 text-5xl h-40 w-40 mb-8 justify-center items-center"
        >
          <span
            class="border-b-4 border-gray-800 leading-tight"
            v-text="data.name.first[0]"
          />
        </div>
      </div>

      <div class="text-2xl uppercase mb-8 pb-8 border-b">
        <div class="mb-4">
          <div v-text="data.name.first" />
          <div v-text="data.name.last" />
        </div>

        <div
          class="text-xs uppercase tracking-widest"
          v-text="data.position.short"
        />
      </div>

      <div>
        <div class="uppercase mb-4" v-text="data.contact.location" />

        <div class="text-xs mb-2" v-text="data.contact.phone" />

        <div class="text-xs mb-2" v-text="data.contact.email" />

        <div v-for="(link, index) in data.contact.links" :key="index">
          {{ link.site }}: {{ link.name }}
        </div>
      </div>

      <div class="divider" />

      <div>
        <h2 class="heading">Education</h2>

        <div
          class="text-xs"
          v-for="(education, index) in data.education"
          :key="index"
        >
          <div class="mb-2">{{ education.degree }} / {{ education.major }}</div>
          <div class="mb-2">{{ education.concentration }}</div>
          <div class="mb-2">{{ education.school }}</div>
          <div class="mb-2">{{ education.timeperiod }}</div>
        </div>
      </div>

      <div class="divider" />

      <div>
        <h2 class="heading">Skills</h2>

        <ul>
          <li
            class="inline-flex mr-2 mb-2 text-xs"
            v-for="({ name }, index) in data.skills"
            :key="index"
          >
            <span class="border rounded px-2 py-1" v-text="name" />
          </li>
        </ul>
      </div>
    </div>

    <div class="w-2/3 bg-gray-100">
      <div class="bg-gray-200 px-10 py-8">
        <h2 class="heading" v-text="data.position.full" />

        <div>
          <p
            v-for="(profileParagraphs, index) in data.about"
            v-html="profileParagraphs"
            :key="index"
          />
        </div>
      </div>

      <div class="experience px-10 py-8">
        <h2 class="heading">Experience</h2>

        <div
          class="mb-8"
          v-for="({ company, position, timeperiod, description },
          index) in data.experience"
          :key="index"
        >
          <div class="text-xs italic" v-text="timeperiod"></div>

          <div class="uppercase font-bold">{{ position }}</div>

          <div class="uppercase mb-4">{{ company }}</div>

          <div class="text-xs" v-html="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/user/data.json";

export default {
  name: "clean-slate-resume",

  data() {
    return {
      data
    };
  }
};
</script>

<style scoped>
.heading {
  @apply uppercase tracking-widest text-base font-medium mb-3;
}

.divider {
  @apply border-b-4 w-1/3 mx-auto my-10;
}
</style>
