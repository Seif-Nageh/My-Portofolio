<template>
  <div class="p-4 relative before:line-gradiant-x">
    <span
      class="border text-sm rounded p-0.5 pt-0"
      :class="{ 'border-primary text-primary': stillIn }"
    >
      {{ time }}
    </span>
    <p class="text-white text-2xl font-bold tracking-wider pt-4">
      {{ title }}
    </p>
    <p class="text-white/50 pb-4">{{ name }}</p>
    <ul class="list-disc list-inside">
      <li class="mb-2" v-for="description in descriptions" :key="description">
        {{ description }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["time", "title", "name", "descriptions", "stillIn"],
  };
</script>
