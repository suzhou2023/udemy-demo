<template>
  <div>
    <div
      class="bg-white px-6 items-center flex shadow-md z-50 relative text-sm max-md:hidden"
    >
      <img src="/images/logo-udemy.svg" class="w-24" loading="lazy" />
      <button class="h-12 my-3 mx-4 hover:text-primary">Categories</button>
      <button
        class="flex flex-1 items-center rounded-full bg-light h-12 px-4 border border-primary mr-4 cursor-default"
      >
        <span
          class="i-material-symbols-search text-2xl text-neutral-400 mr-4 cursor-pointer"
        ></span>
        <input
          type="text"
          name="search"
          autocomplete="off"
          class="w-full outline-0 bg-transparent"
          placeholder="Search for anything"
        />
      </button>
      <button class="h-12 my-3 mx-3 hover:text-primary lg:block hidden">
        Udemy Business
      </button>
      <button class="h-12 my-3 mx-3 hover:text-primary lg:block hidden">
        Teach on Udemy
      </button>
      <button class="h-12 my-3 mx-3 hover:text-primary">
        <span class="i-material-symbols-shopping-cart-outline text-2xl"></span>
      </button>
      <button
        class="h-10 my-3 ml-3 px-4 border border-primary text-gray-700 font-bold hover:bg-light"
      >
        Log in
      </button>
      <button
        class="h-10 my-3 mx-3 px-4 border border-primary text-white font-bold bg-dark hover:bg-dark/90"
      >
        Sign up
      </button>
      <button
        class="h-10 my-3 px-2 border border-primary text-gray-700 font-bold hover:bg-light"
      >
        <span class="text-2xl i-material-symbols-language"></span>
      </button>
    </div>
    <div class="block md:hidden lg:hidden xl:hidden 2xl:hidden">
      <div
        class="bg-white px-6 items-center flex justify-between shadow-md z-50 relative text-sm"
      >
        <button class="h-12 my-3 mx-4 hover:text-primary">
          <span class="i-mdi-menu text-2xl"></span>
        </button>
        <img src="/images/logo-udemy.svg" class="w-24" loading="lazy" />
        <div>
          <button class="h-12 my-3 mx-4 hover:text-primary">
            <span class="i-material-symbols-search text-2xl"></span>
          </button>
          <button class="h-12 my-3 mx-4 hover:text-primary">
            <span
              class="i-material-symbols-shopping-cart-outline text-2xl"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";
const tip = ref(true);
const closeTip = () => {
  tip.value = false;
};

const countDown = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const { pause } = useIntervalFn(() => {
  let date_now = new Date();
  var hours = 24 - date_now.getHours() - 1;
  var minutes = 60 - date_now.getMinutes() - 1;
  var seconds = 60 - date_now.getSeconds();
  countDown.value = { hours, minutes, seconds };
}, 1000);
</script>

import { useIntervalFn } from "@vueuse/core" import { ref } from "vue" import {
useIntervalFn } from "@vueuse/core" import { ref } from "vue" import {
useIntervalFn } from "@vueuse/core" import { ref } from "vue"
