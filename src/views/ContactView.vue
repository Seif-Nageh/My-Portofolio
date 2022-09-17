<template>
  <div name="ContactView">
    <SectionsTitle :name="'Get in Touch'" />
    <div class="h-72 mb-4 p-4">
      <div id="map" class="w-full h-full rounded"></div>
    </div>
    <div class="py-4 flex flex-wrap">
      <info-modifer
        class="w-1/2 px-4"
        v-for="info in infos"
        :key="info.name"
        :name="info.name"
        :info="info.data"
      />
    </div>
    <div>
      <SectionsTitle :name="'Contact Form'" />
    </div>
    <form class="flex flex-wrap" @submit.prevent="sendMessageHandeler()">
      <div class="md:w-1/2 w-full p-4">
        <input
          type="name"
          placeholder="Full Name"
          class="bg-second/80 border border-third w-full h-14 p-3 rounded-lg focus-visible:outline-none peer invalid:border-red-400"
          required
          v-model="name"
        />
        <p class="invisible p-3 pb-0 text-red-400 peer-invalid:visible">
          Enter Your Name
        </p>
      </div>
      <div class="md:w-1/2 w-full p-4">
        <input
          type="email"
          placeholder="Email"
          class="bg-second/80 border border-third w-full h-14 p-3 rounded-lg focus-visible:outline-none peer invalid:border-red-400"
          required
          v-model="email"
        />
        <p class="invisible p-3 pb-0 text-red-400 peer-invalid:visible">
          Enter Valid E-mail
        </p>
      </div>
      <div class="w-full p-4">
        <textarea
          placeholder="Your Message"
          class="bg-second/80 border border-third w-full h-32 p-3 rounded-lg focus-visible:outline-none max-h-28"
          required
          @input="messageHandeler($event.target.value)"
        ></textarea>
      </div>
      <button
        class="ml-4 bg-second px-8 py-4 rounded-lg transition-colors duration-500 hover:text-primary"
      >
        SEND MESSAGE &#10174;
      </button>
    </form>
  </div>
</template>

<script>
  import SectionsTitle from "@/components/SectionsTitle.vue";
  import InfoModifer from "@/components/InfoModifer.vue";
  import mapboxgl from "mapbox-gl";
  export default {
    components: { SectionsTitle, InfoModifer },
    data() {
      return {
        email: "",
        name: "",
        message: "",
        infos: [
          {
            name: "Address",
            data: "Abbasiyah, Cairo, Egypt",
          },
          {
            name: "Email",
            data: "Seifldin.attallah@gmail.com",
          },
          {
            name: "Phone",
            data: "+201151251902",
          },
          {
            name: "Freelance",
            data: "Available",
          },
        ],
      };
    },
    methods: {
      messageHandeler(value) {
        this.message = value;
      },
      sendMessageHandeler() {
        window.location.href = `mailto:seifldin.attallah@gmail.com?Subject=Hi, I'm ${this.name}&body=${this.message}`;
      },
    },
    mounted() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2VpZi1uYWdlaCIsImEiOiJjbDc2OGxqNWEwM2Q1M3ZvMWtiOHoxbXBlIn0.ElJ2aFfcoyH7HiCuPSJP3A";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [31.279, 30.06539231124296],
        zoom: 13,
      });
      map.on("style.load", () => {
        map.setFog({});
      });
    },
  };
</script>
