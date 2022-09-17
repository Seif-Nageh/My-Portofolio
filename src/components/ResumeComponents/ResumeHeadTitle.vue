<template>
  <div class="relative before:line-gradiant-x p-4 text-xl">
    <font-awesome-icon class="mr-4 text-primary" :icon="'fa-solid ' + icon" />
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: ["text", "icon"],
  };
</script>
