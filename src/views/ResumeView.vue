<template>
  <div>
    <SectionsTitle :name="'Resume'" />
    <!-- This Comment to explain  -->
    <!-- if you Want to show education section UnComment next three comments and comment next two opening divs -->
    <!-- <div
      class="flex flex-wrap md:px-4 relative before:hidden before:md:block before:line-gradiant-y before:left-1/2"
      > -->
    <!-- <div class="w-full md:w-1/2"> -->
    <div class="flex flex-wrap md:px-4">
      <div class="w-full">
        <ResumeHeadTitle :text="'EXPERIENCE'" :icon="'fa-briefcase'" />
        <ResumeCardInfo
          v-for="experince in experinces"
          :key="experince.description"
          :name="experince.name"
          :descriptions="experince.description"
          :title="experince.title"
          :time="experince.time"
          :stillIn="experince.stillIn"
        />
      </div>
      <!-- <div class="w-full md:w-1/2">
        <ResumeHeadTitle :text="'EDUCATION'" :icon="'fa-graduation-cap'" />
      </div> -->
    </div>
    <SectionsTitle :name="'My Skills'" />
    <div class="flex flex-wrap md:px-4">
      <div class="w-full">
        <ResumeHeadTitle :text="'CODING'" :icon="'fa-code'" />
        <div
          class="flex flex-wrap py-4 relative before:hidden before:md:block before:line-gradiant-y before:from-transparent before:via-third/60 before:left-1/2"
        >
          <!-- <ResumeCardCodeInfo
            v-for="code in coding"
            :key="code.language"
            class="w-1/2 py-2"
            :codeLanguage="code.language"
            :percent="code.percent"
            /> -->
          <ResumeCardCodeInfo
            class="w-full md:w-1/2 py-2 px-4 md:pl-16 relative before:line-gradiant-x"
            v-for="code in coding"
            :key="code.language"
            :title="code.title"
            :infos="code.infos"
          />
        </div>
      </div>
      <div class="w-full flex flex-wrap relative before:line-gradiant-x">
        <ResumeHeadTitle class="w-full" :text="'LANGUAGES'" :icon="'fa-flag'" />
        <ResumeCardLandInfo
          v-for="lang in languages"
          :key="lang.language"
          :language="lang.language"
          :amount="lang.amount"
          class="w-full md:w-1/2 py-2 px-4 lg:px-16"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import SectionsTitle from "@/components/SectionsTitle.vue";
  import ResumeHeadTitle from "@/components/ResumeComponents/ResumeHeadTitle.vue";
  import ResumeCardInfo from "@/components/ResumeComponents/ResumeCardExperinceInfo.vue";
  import ResumeCardLandInfo from "@/components/ResumeComponents/ResumeCardLanguageInfo.vue";
  import ResumeCardCodeInfo from "@/components/ResumeComponents/ResumeCardCodeInfo.vue";
  export default {
    components: {
      SectionsTitle,
      ResumeHeadTitle,
      ResumeCardInfo,
      ResumeCardLandInfo,
      ResumeCardCodeInfo,
    },
    data() {
      return {
        experinces: [
          {
            name: "Freelance Projects",
            description: [
              "Collaborate with creative and development teams on the execution of ideas.",
            ],
            title: "Front-End Developer",
            time: "2020 - present",
            stillIn: true,
          },
          {
            title: "VueJS Developer",
            name: "Bond Developments",
            description: [
              "Make Shukran-yasta web application design and functionality.",
              "Make dashboard and CRM software system to manage there employees.",
            ],
            time: "06/22 - 08/22",
          },
          {
            title: "Front-End Developer",
            name: "CAV Software",
            description: [
              "Implemented websites, SPA, and landing pages from concept through deployment.",
              "Standardized all output with a new, responsive, mobile-first approach and strategy which increased mobile traffic by 20%.",
              "Assessed UX and UI designs for technical feasibility.",
              "Collaborated with product team members to implement new feature developments.",
            ],
            time: "04/21 - 05/22",
          },
        ],
        languages: [
          {
            language: "English",
            amount: 7,
          },
          {
            language: "Arabic",
            amount: 10,
          },
          {
            language: "Italian",
            amount: 3,
          },
          {
            language: "Hebrew",
            amount: 4,
          },
        ],
        // coding: [
        //   {
        //     language: "HTML5 / CSS3",
        //     percent: 95,
        //   },
        //   {
        //     language: "Javascript (ES6)",
        //     percent: 90,
        //   },
        //   {
        //     language: "React / VueJS",
        //     percent: 85,
        //   },
        //   {
        //     language: "PHP / MYSQL",
        //     percent: 70,
        //   },
        //   {
        //     language: "DART / Flutter",
        //     percent: 60,
        //   },
        //   {
        //     language: "Python",
        //     percent: 40,
        //   },
        // ],
        coding: [
          {
            title: "Languages",
            infos: [
              "HTML",
              "CSS(SASS)",
              "Javascript(ES6 - ES7 - ES8 - ES9)",
              "PHP",
              "MySQL",
              "Python",
              "Dart",
            ],
          },
          {
            title: "Additional Skills",
            infos: [
              "Git(GitHub)",
              "Responsive Design & Mobile-First Websites",
              "Object-Oriented Programming",
              "MVC Design Pattern",
              "Search Engine Optimization (SEO)",
              "Problem Solving Skills",
              "Agile Methodology & SCRUM",
            ],
          },
          {
            title: "Libraries",
            infos: [
              "Bootstrap",
              "Animate.css",
              "jQuery",
              "Chart.js",
              "ReactJS",
            ],
          },
          {
            title: "Frameworks",
            infos: ["Laravel", "TailWind.css", "PugJs", "Next.js", "VueJS", "Nuxt.js"],
          },
        ],
      };
    },
  };
</script>
