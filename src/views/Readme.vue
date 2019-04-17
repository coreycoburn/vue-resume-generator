<template>
  <div class="p-8">
    <h1 v-text="pkgName" class="capitalize" />

    <div class="mb-16 text-center">
      <div v-text="pkg.description" class="text-lg italic text-green-500" />

      <div>Version: {{ pkg.version }}</div>
    </div>

    <p>
      The <span class="capitalize" v-text="pkgName" /> is a resume generator
      that exports PDFs and images of your resume. There is currently one
      template included in the package.
    </p>

    <div class="mb-16">
      <h2>Generate Resume</h2>

      <h3>Export PDF</h3>

      <p>To export a resume to PDF, run:</p>

      <pre
        v-highlightjs
        class="mb-6"
      ><code class="bash">$ npm run resume:pdf</code></pre>

      <p>
        The exported PDF will be in the <span class="code">pdfs</span> folder.
      </p>

      <h3>Export Screenshot</h3>

      <p>To export a screenshot of your resume, run:</p>

      <pre
        v-highlightjs
        class="mb-6"
      ><code class="bash">$ npm run resume:screenshot</code></pre>

      <p>
        The exported screenshot will be in the
        <span class="code">screenshots</span> folder.
      </p>
    </div>

    <div class="mb-16">
      <h2>Data.json</h2>

      <p>
        The
        <span class="code">data.json</span> file is the file you will update to
        update the contents of your resume. The location of the file is at:
        <span class="code">/src/assets/user/data.json</span>.
      </p>

      <div class="italic">data.json</div>

      <pre v-highlightjs class="mb-6"><code class="json">{{ data }}</code></pre>
    </div>

    <div class="mb-16">
      <h2>Headshot Image</h2>

      <p>
        If the resume template includes a headshot image in the resume, you may
        change the image in the following location:
        <span class="code">/src/user/headshot.jpg</span>. Some resume templates
        also allow you to toggle between the headshot image and a default
        replacement text. This can be changed via the
        <span class="code">data.json</span> file under the following property:
      </p>

      <div class="italic">data.json</div>
      <pre v-highlightjs class="mb-6"><code class="json">
  {
    "headshot": { 
      "display": false 
    }
  }
    </code></pre>
    </div>

    <div class="mb-16">
      <h2>Roadmap</h2>

      <ul class="list-disc">
        <li>Add more resume/cover letter templates</li>
        <li>Ability to export a single resume to PDF or all at once</li>
      </ul>
    </div>

    <div class="mb-16">
      <h2>Special Thanks 👍</h2>

      <p>
        Special thanks to the following open source projects in which this
        project uses:
      </p>

      <ul class="list-disc">
        <li>
          <a href="https://vuejs.org/"
            >Vue.js: The Progressive JavaScript Framework</a
          >
        </li>
        <li>
          <a href="https://vuejs.org/"
            >Tailwind CSS: A utility-first CSS framework for rapidly building
            custom user interfaces</a
          >
        </li>
        <li>
          <a href="https://vuejs.org/"
            >Puppeteer: A Node library which provides a high-level API to
            control Chrome or Chromium</a
          >
        </li>
      </ul>
    </div>

    <div class="mb-16">
      <h2>License</h2>

      <p>
        <span class="capitalize" v-text="pkgName" /> is open-sourced software
        licensed under the
        <a href="https://opensource.org/licenses/MIT">MIT</a> license.
      </p>
    </div>
  </div>
</template>

<script>
import pkg from "../../package.json";
import data from "@/assets/user/data.json";

export default {
  name: "home",

  data() {
    return {
      pkg,
      data
    };
  },

  computed: {
    pkgName() {
      return this.pkg.name
        .split("_")
        .map(word => {
          return word;
        })
        .join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  @apply text-base;
}
</style>
