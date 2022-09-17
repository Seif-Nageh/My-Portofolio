<template>
  <router-view v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="transition-all duration-500 animate-fade-in"
      leave-active-class="transition-all duration-200 animate-fade-out"
      enter-from-class="translate-y-full lg:-translate-x-full"
      leave-to-class="translate-y-full lg:-translate-x-full"
    >
      <component
        class="w-full bg-second/50 overflow-x-hidden pb-8 text-white/80 md:rounded-b-lg lg:rounded-lg lg:max-h-[80%] md:min-h-[80%] lg:overflow-y-auto"
        :is="Component"
        :key="$route.path"
      />
    </transition>
  </router-view>
</template>
