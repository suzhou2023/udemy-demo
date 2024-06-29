<template>
  <div class="mx-12 lg-m mt-6 py-4">
    <div class="text-2xl font-bold flex items-center mb-4">
      More Courses by
      <span class="text-primary ml-1"> Pierian Training</span>
    </div>
    <div class="flex">
      <div
        v-for="course in coursesData"
        class="flex flex-col text-xs w-[calc((100%-32px)/3)] first:mr-4 last:ml-4"
      >
        <img class="h-24" :src="course.image_240x135" loading="lazy" />
        <div class="text-base font-bold double-line">
          {{ course.title }}
        </div>
        <div class="text-[#6a6f73] text-xs">
          {{ course.visible_instructors[0].display_name }}
        </div>
        <div class="flex items-center my-1">
          <span class="font-bold mr-1">{{ course.rating.toFixed(1) }}</span>
          <span class="text-orange-400 inline-flex items-center mr-2">
            <span v-for="i in 4" class="i-material-symbols-star text-sm"></span>
            <span class="i-material-symbols-star-half"></span>
          </span>
          <span class="text-[#6a6f73] text-xs">({{ course.num_reviews }})</span>
        </div>
        <div class="text-[#6a6f73] text-xs">
          {{ course.content_info }} - {{ course.num_published_lectures }} -
          {{ course.instructional_level_simple }}
        </div>
        <div class="font-bold text-base my-2">{{ course.price }}</div>
      </div>
    </div>
    <button
      class="py-2 w-full border my-4 border-primary text-sm hover:bg-light font-bold"
    >
      Report abuse
    </button>
  </div>
</template>

<script setup lang="ts">
import { courses } from "~/mock/courses";

const coursesData = ref(courses);
</script>
