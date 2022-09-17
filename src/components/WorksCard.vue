<template>
  <div class="text-center">
    <div
      class="overflow-hidden rounded-lg group shadow-lg m-4 cursor-pointer"
      @click="toggleHandeler"
    >
      <div class="overflow-hidden relative">
        <div class="works-layer group-hover:opacity-100">
          <font-awesome-icon
            class="bg-primary w-6 h-6 p-3 rounded-full"
            icon="fa-solid fa-flag"
          />
        </div>
        <img
          :src="img"
          class="w-full h-60 rounded-t-lg transition-all duration-500 group-hover:scale-125 group-hover:rounded-t-lg"
          alt="img"
        />
      </div>
      <p
        class="text-white text-xl py-4 rounded-b-lg transition-all duration-500 group-hover:text-primary"
      >
        {{ title }}
      </p>
    </div>
    <!-- Website Modal View -->
    <teleport to="#works-modal" :disabled="show">
      <div v-if="isOpen" class="fixed inset-0 bg-third/50 overflow-auto z-50">
        <div class="rounded-md absolute top-0 left-0 py-16 md:px-60 lg:px-80">
          <svg
            @click="toggleHandeler"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-primary cursor-pointer fixed top-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <img class="rounded-lg" :src="modalImg" :alt="title" />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        show: true,
      };
    },
    methods: {
      toggleHandeler() {
        return (this.show = !this.show), (this.isOpen = !this.isOpen);
      },
    },
    props: ["modalImg", "title", "img"],
  };
</script>
