<template>
  <div class="p-6 relative before:line-gradiant-x">
    <div
      class="text-2xl font-bold text-white relative before:bg-gradient-to-r before:from-primary/60 before:w-10 before:h-10 before:rounded-full before:absolute before:left-0 before:top-0 tracking-wider"
      v-html="nameHandeler"
    ></div>
  </div>
</template>
<script>
  export default {
    props: ["name"],
    computed: {
      nameHandeler() {
        const words = this.name.split(" ");
        if (this.name.includes(" ") && words.length > 2) {
          return `<p class="pl-4"><span class="text-primary">${words[0]}</span> ${words[1]} ${words[2]}</p>`;
        } else if (this.name.includes(" ") && words.length == 2) {
          return `<p class="pl-4"><span class="text-primary">${words[0]}</span> ${words[1]}</p>`;
        } else {
          return `<p class="pl-4 first-letter:text-primary">${this.name}</p>`;
        }
      },
    },
  };
</script>
