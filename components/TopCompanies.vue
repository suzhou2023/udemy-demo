<template>
  <div class="mx-12 lg-m mt-6 p-4 border">
    <p class="font-bold mb-1">
      Top companies offer this course to their employees
    </p>
    <div class="text-sm">
      This course was selected for our collection of top-rated courses trusted
      by businesses worldwide.
      <span
        class="text-primary decoration-primary underline underline-offset-4 cursor-pointer"
        >Learn more</span
      >
    </div>
    <div class="flex justify-between mt-4">
      <img v-for="logo in logos" :src="logo" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = ref<any>([
  "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
]);
</script>
