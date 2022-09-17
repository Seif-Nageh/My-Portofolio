<template>
  <div
    class="flex flex-wrap justify-between py-4 relative before:line-gradiant-x"
  >
    <p
      class="bg-primary text-white max-h-8 py-1 px-2 rounded after:content-['.....'] after:pl-1 after:tracking-[4px]"
    >
      {{ name }}
    </p>
    <p class="p-1 break-all">{{ info }}</p>
  </div>
</template>

<script>
  export default {
    props: ["name", "info"],
  };
</script>
