<template>
  <!-- <div>
    <div class="relative overflow-hidden">
      <svg class="w-24 h-24 mx-auto">
        <circle
          class="text-third"
          stroke-width="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          class="text-primary"
          stroke-width="8"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - (percent / 100) * circumference"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
      </svg>
      <div
        class="absolute inset-0 text-center flex items-center justify-center pl-1.5 text-2xl font-bold text-white"
      >
        {{ percent }}%
      </div>
    </div>
    <p class="text-center text-lg pt-2">{{ codeLanguage }}</p>
  </div> -->
  <div>
    <ul>
      <li class="text-2xl text-primary font-bold">{{ title }}</li>
      <li class="list-disc list-inside" v-for="info in infos" :key="info">
        {{ info }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     circumference: 40 * 2 * Math.PI,
    //   };
    // },
    // props: ["percent", "codeLanguage"],
    props: ["title", "infos"],
  };
</script>
