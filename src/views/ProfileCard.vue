<template>
  <div
    name="profile-card"
    class="relative z-20 shadow-xl shadow-black/50 rounded-lg md:max-w-screen-sm md:w-full before:absolute md:before:w-full before:h-full before:-z-10 before:-left-4 before:-top-4 before:rounded-lg md:before:bg-gradient-to-b md:before:from-second/40"
  >
    <div
      class="bg-hero md:rounded-t-lg bg-top bg-cover bg-no-repeat w-full h-80 md:h-96 overflow-hidden relative after:absolute after:bg-second after:w-3/4 after:h-20 after:-bottom-12 after:-left-1/4 after:rotate-12 before:absolute before:bg-second before:w-3/4 before:h-20 before:-bottom-12 before:left-1/2 before:-rotate-12"
    ></div>
    <div class="bg-second lg:rounded-b-lg text-center pt-8">
      <TitleTyping />
      <div class="py-6 relative before:line-gradiant-x">
        <a
          class="px-2 hover:text-primary focus:text-primary focus:outline-none transition-all duration-300"
          :href="profile.link"
          target="_blank"
          v-for="profile in profiles"
          :key="profile.icon"
        >
          <font-awesome-icon :icon="profile.icon" />
        </a>
      </div>
      <div class="flex justify-around">
        <a
          href="./Seif_Nageh_Web_Developer.pdf"
          download="Seif_Nageh_Front_End_Developer.pdf"
          target="_blank"
          class="hover:text-primary focus:text-primary focus:outline-none transition-all duration-300 w-full py-5"
        >
          Download CV
        </a>
        <router-link
          to="/contact"
          class="py-5 hover:text-primary focus:text-primary focus:outline-none transition-all duration-300 w-full relative before:line-gradiant-y"
          >Contact Me</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
  import TitleTyping from "../components/TitleTyping.vue";
  export default {
    components: { TitleTyping },
    data: () => {
      return {
        profiles: [
          {
            link: "https://github.com/Seif-Nageh",
            icon: "fa-brands fa-github",
          },
          {
            link: "https://www.linkedin.com/in/seif-nageh-6751111b5/",
            icon: "fa-brands fa-linkedin-in",
          },
          {
            link: "mailto:seifldin.attallah@gmail.com?Subject=subject message",
            icon: "fa-solid fa-envelope",
          },
          {
            link: "https://www.facebook.com/seif.nageh",
            icon: "fa-brands fa-facebook-f",
          },
          {
            link: "https://api.whatsapp.com/send?phone=201151251902",
            icon: "fa-brands fa-whatsapp",
          },
        ],
      };
    },
  };
</script>
