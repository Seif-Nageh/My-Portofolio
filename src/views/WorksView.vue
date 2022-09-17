<template>
  <div>
    <SectionsTitle :name="'Recent Works'" />
    <div
      class="relative before:hidden md:before:block before:line-gradiant-y before:left-1/2"
    >
      <WorksCard
        class="w-full md:w-1/2 inline-block"
        v-for="work in works"
        :key="work.title"
        :title="work.title"
        :img="work.img"
        :modalImg="work.modalImg"
      />
    </div>
  </div>
</template>

<script>
  import SectionsTitle from "@/components/SectionsTitle.vue";
  import WorksCard from "@/components/WorksCard.vue";
  export default {
    components: { SectionsTitle, WorksCard },
    data() {
      return {
        works: [
          {
            title: "Shukran Yasta",
            img: "img/works/shukran-yasta.png",
            modalImg: "img/works/shukran-yasta-main.png",
          },
          {
            title: "Splendid food",
            img: "img/works/splendid-food.png",
            modalImg: "img/works/splendid-food.png",
          },
          {
            title: "Tenzies",
            img: "img/works/tenzies.png",
            modalImg: "img/works/tenzies.png",
          },
          {
            title: "HSGC",
            img: "img/works/hsgc.png",
            modalImg: "img/works/hsgc-main.png",
          },
          {
            title: "Viganella",
            img: "img/works/viganella.png",
            modalImg: "img/works/viganella.png",
          },
          {
            title: "CAV (v:1.0)",
            img: "img/works/cav.png",
            modalImg: "img/works/cav-main.png",
          },
          {
            title: "Capital Properties",
            img: "img/works/capital-properties.png",
            modalImg: "img/works/capital-properties-main.png",
          },
          {
            title: "Feane",
            img: "img/works/feane.png",
            modalImg: "img/works/feane-main.png",
          },
        ],
      };
    },
  };
</script>
