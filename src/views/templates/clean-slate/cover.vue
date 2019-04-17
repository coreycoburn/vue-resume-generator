<template>
  <div>
    <div class="absolute max-w-5xl w-full bg-gray-800 text-gray-100 px-12 py-6">
      <h1 v-text="fullNameFrom" class="uppercase" />

      <div
        v-text="data.position.full"
        class="text-center uppercase tracking-wider mb-4"
      />
    </div>

    <div class="flex pt-48 py-12 min-h-screen">
      <div class="w-1/3 px-12 border-r-2 border-gray-800 mr-4 text-center">
        <div>
          <div class="heading">To</div>

          <div class="mb-6">
            <div class="font-semibold" v-text="fullNameTo" />
            <div v-text="cover.to.position" />
          </div>

          <div
            class="uppercase font-semibold tracking-wider"
            v-text="cover.company"
          />

          <div>
            <div v-text="cover.location.address" />
            <div>
              {{ cover.location.city }}, {{ cover.location.state }}
              {{ cover.location.zip }}
            </div>
          </div>

          <div class="divider" />
        </div>

        <div>
          <div class="heading">From</div>

          <div class="mb-6">
            <div class="font-semibold" v-text="fullNameFrom" />
            <div v-text="data.position.short" />
          </div>

          <div class="mb-6">
            <div v-text="cover.from.location.address" />
            <div>
              {{ cover.from.location.city }}, {{ cover.from.location.state }}
              {{ cover.from.location.zip }}
            </div>
          </div>

          <div v-text="data.contact.phone" />
          <div v-text="data.contact.email" />

          <div class="divider" />
        </div>

        <div>
          <div class="heading">Date</div>
          <div v-text="cover.date" />
        </div>
      </div>

      <div class="w-2/3 px-12">
        <div class="mb-8 font-semibold">
          Job ref: <span v-text="cover.position" /> at
          <span v-text="cover.company" />
        </div>

        <div class="mb-8 text-xs">
          <p>Dear {{ honorificNameTo }},</p>

          <p
            v-for="({ paragraph }, index) in cover.copy"
            v-html="paragraph"
            :key="index"
          />
        </div>

        <p>Sincerely,</p>

        <img src="@/assets/user/signature.png" alt="signature" class="h-16" />

        <p v-text="fullNameFrom" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/user/data.json";
import cover from "@/assets/user/cover.json";

export default {
  name: "clean-slate-cover",

  data() {
    return {
      data,
      cover
    };
  },

  computed: {
    fullNameTo() {
      return `${this.cover.to.name.honorific} ${this.cover.to.name.first} ${
        this.cover.to.name.last
      }`;
    },
    honorificNameTo() {
      return `${this.cover.to.name.honorific} ${this.cover.to.name.last}`;
    },
    fullNameFrom() {
      return `${this.data.name.first} ${this.data.name.last}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  @apply uppercase tracking-widest text-base font-medium mb-3;
}

.divider {
  @apply border-b-2 border-gray-800 w-3/4 mx-auto my-10;
}
</style>
