<template>
  <p class="text-4xl pb-1">Seif Nageh</p>
  <VueWriter
    :eraseSpeed="25"
    :typeSpeed="50"
    :intervals="25"
    class="text-primary text-base"
    :array="[
      'Front-End Developer',
      'Back-End Developer',
      'Full Stack Developer',
      'Flutter Developer',
      'Freelancer',
    ]"
  />
</template>

<script>
  import VueWriter from "vue-writer";
  export default {
    components: { VueWriter },
    props: ["fontSize"],
  };
</script>

<style></style>
