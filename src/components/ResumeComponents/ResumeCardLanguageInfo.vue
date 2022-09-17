<template>
  <div class="py-3 px-4">
    <p class="w-16 text-xl tracking-wider">{{ language }}</p>
    <div class="flex flex-wrap justify-between items-center mt-4">
      <span
        class="bg-primary w-4 h-4 rounded-full"
        v-for="n in 0 + amount"
        :key="n"
      ></span>
      <span
        class="bg-third w-4 h-4 rounded-full"
        v-for="n in 10 - amount"
        :key="n"
      ></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      amount: {
        type: Number,
        default: 5,
      },
      language: {
        type: String,
      },
    },
  };
</script>
