<template>
  <nav
    class="flex flex-col sticky top-0 left-0 w-full text-center text-xs md:top-1/4 z-40 lg:static md:max-w-fit md:mt-10"
  >
    <div class="relative bg-second md:rounded-lg">
      <div class="pl-6 py-0.5 md:hidden align-middle text-left">
        <TitleTyping />
      </div>
      <ul
        class="divide-x md:divide-x-0 md:divide-y-2 divide-gray-400/50 flex md:flex-col align-middle justify-evenly md:justify-center border-t md:border-t-0 border-gray-400/50"
      >
        <li
          v-for="nav in navs"
          :key="nav.name"
          @click="scrollView(nav.name)"
          class="px-3 py-2 w-full"
        >
          <router-link
            class="flex flex-col gap-0.5 transition-all duration-300 hover:text-primary/70 focus:outline-none"
            :to="nav.to"
            active-class="text-primary"
          >
            <font-awesome-icon
              class="text-2xl"
              :icon="'fa-solid ' + nav.icon"
            />
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import TitleTyping from "../components/TitleTyping.vue";
  export default {
    data: () => {
      return {
        navs: [
          {
            name: "About",
            icon: "fa-user-tie",
            to: "/",
          },
          {
            name: "Resume",
            icon: "fa-bars-staggered",
            to: "/resume",
          },
          {
            name: "Work",
            icon: "fa-paintbrush",
            to: "/works",
          },
          {
            name: "Contact",
            icon: "fa-at",
            to: "/contact",
          },
        ],
      };
    },
    methods: {
      scrollView(title) {
        const card = document.getElementById("profile-card").offsetHeight;
        document.title = "Seif Nageh " + title;
        window.scroll({
          top: card,
          behavior: "smooth",
        });
      },
    },
    components: { TitleTyping },
  };
</script>
