<template>
  <div
    ref="sider"
    :class="[
      isFixedSider
        ? 'fixed z-[100] animate-[sider-fade-in_0.5s_ease-in-out_forwards]'
        : 'absolute',
      'top-6 w-[356px]  bg-white shadow-lg xl:ml-[800px] lg:ml-[600px] max-lg:hidden block z-30',
    ]"
  >
    <button v-show="!isFixedSider" class="course-thumbnail relative w-full">
      <img
        src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
        width="100%"
      />
      <div
        class="absolute inset-0 width-full border-white border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex items-center justify-center"
      >
        <div
          class="bg-white rounded-full w-16 h-16 flex items-center justify-center opacity-100"
        >
          <span class="i-mdi-play text-5xl"></span>
        </div>
        <div class="absolute bottom-4 mx-auto text-white font-bold">
          Preview this course
        </div>
      </div>
    </button>
    <div>Subscribe to Udemy's top courses</div>
  </div>
</template>

<script setup lang="ts">
const isFixedSider = ref<boolean>(false);
</script>
