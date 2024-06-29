<template>
  <div ref="topContainer" class="bg-dark max-lg:!bg-white">
    <div
      class="min-w-[600px] sm:max-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-7 relative max-sm:p-4"
    >
      <div
        class="xl:max-w-[800px] lg:max-w-[600px] text-white max-lg:!text-normal"
      >
        <div class="mx-12 lg-m flex items-center text-sm mb-6">
          <NuxtLink to="/" class="text-light max-lg:text-primary"
            >Development</NuxtLink
          >
          <span class="i-material-symbols-chevron-right"></span>
          <NuxtLink to="/" class="text-light max-lg:text-primary"
            >Programming Languages
          </NuxtLink>
          <span class="i-material-symbols-chevron-right"></span>
          <NuxtLink to="/" class="text-light max-lg:text-primary"
            >Python</NuxtLink
          >
        </div>
        <button
          class="course-thumbnail relative w-full max-lg:block hidden my-4"
        >
          <img
            src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
            width="100%"
          />
          <div
            class="absolute inset-0 width-full border-white max-lg:border-primary border bg-gradient-to-t from-black/80 to-gray-300/0 opacity-85 flex items-center justify-center"
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
        <div class="mx-12 lg-m mb-4">
          <div class="text-3xl font-bold mb-4">
            {{ data.title }}
          </div>
          <div class="mb-6">
            {{ data.subtitle }}
          </div>
          <div class="text-sm mb-4">
            <span class="text-orange-400 inline-flex items-center"
              >4.6
              <span v-for="i in 4" class="i-material-symbols-star"></span>
              <span class="i-material-symbols-star-half"></span>
            </span>
            <button class="text-light max-lg:text-primary mx-2 underline">
              ({{ data.num_reviews }} ratings)</button
            >{{ data.num_students }} students
          </div>
          <div class="text-sm mb-4">
            Created by
            <button
              v-for="author of data.authors"
              class="text-light max-lg:text-primary mx-2 underline"
            >
              {{ author }}
            </button>
          </div>
          <div class="text-sm mb-4 flex flex-wrap gap-y-3">
            <span class="mr-4 flex items-center"
              ><span
                class="i-material-symbols-error-outline-rounded mr-1 text-xl"
              ></span>
              Last updated {{ data.last_update_date }}</span
            >
            <span class="mr-4 flex items-center"
              ><span class="i-material-symbols-language mr-1 text-xl"></span>
              {{ data.language }}</span
            >
          </div>
        </div>
        <div class="course-content max-lg:block hidden mt-8 relative">
          <div class="text-4xl font-bold mb-2 flex items-center">
            $22.99<span class="text-base font-normal"
              ><span class="line-through mx-1 text-gray-400">$109.99</span> 79%
              off</span
            >
          </div>
          <div
            v-if="hoursLeft > 0"
            class="text-[#b32d0f] flex items-center text-sm mb-4"
          >
            <span class="i-mdi-alarm-clock text-lg mr-1"></span>
            <span
              ><strong>{{ hoursLeft }} hours</strong> left at this price!</span
            >
          </div>
          <div
            class="w-full h-12 bg-primary mt-2 mb-1 flex items-center justify-center text-white hover:bg-primary/90 cursor-pointer font-bold"
          >
            Add to cart
          </div>
          <div
            class="w-full h-12 border-primary border mt-2 mb-1 flex items-center justify-center hover:bg-light cursor-pointer font-bold"
          >
            Buy now
          </div>
          <p class="text-center text-xs my-4">30-Day Money-Back Guarantee</p>
          <div class="text-dark font-bold text-sm flex justify-between">
            <button class="underline decoration-primary underline-offset-4">
              Share
            </button>
            <button class="underline decoration-primary underline-offset-4">
              Gift this course
            </button>
            <button class="underline decoration-primary underline-offset-4">
              Apply Coupon
            </button>
          </div>
          <div
            class="border border-dashed p-2 my-4 flex items-center justify-between text-neutral-400 text-xs"
          >
            <div>
              <p><strong class="text-sm">OF52424</strong> is applied</p>
              <p>Udemy coupon</p>
            </div>
            <button class="i-mdi-close text-primary text-2xl"></button>
          </div>
          <div class="flex items-center border border-primary">
            <input
              type="text"
              class="flex-1 px-4 outline-none bg-transparent"
              autocomplete="off"
              placeholder="Enter Coupon"
            />
            <button class="w-20 py-2 bg-dark text-white hover:bg-dark/90">
              Apply
            </button>
          </div>
        </div>
      </div>
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
        <div class="course-content p-6 relative">
          <div class="text-4xl font-bold mb-2 flex items-center">
            $22.99<span class="text-base font-normal"
              ><span class="line-through mx-1 text-gray-400">$109.99</span> 79%
              off</span
            >
          </div>
          <div
            v-if="hoursLeft > 0"
            class="text-[#b32d0f] flex items-center text-sm mb-4"
          >
            <span class="i-mdi-alarm-clock text-lg mr-1"></span>
            <span
              ><strong>{{ hoursLeft }} hours</strong> left at this price!</span
            >
          </div>
          <div
            class="w-full h-12 bg-primary mt-2 mb-1 flex items-center justify-center text-white hover:bg-primary/90 cursor-pointer font-bold"
          >
            Add to cart
          </div>
          <div
            class="w-full h-12 border-primary border mt-2 mb-1 flex items-center justify-center hover:bg-light cursor-pointer font-bold"
          >
            Buy now
          </div>
          <p class="text-center text-xs my-4">30-Day Money-Back Guarantee</p>
          <p class="mt-4 mb-2 font-bold">This course includes:</p>
          <div
            class="flex items-center text-sm mb-3"
            v-for="include in includes"
          >
            <span :class="include.icon + ' text-base mr-3'"></span>
            <span>{{ include.title }}</span>
          </div>
          <div class="text-dark font-bold text-sm flex justify-between">
            <button class="underline decoration-primary underline-offset-4">
              Share
            </button>
            <button class="underline decoration-primary underline-offset-4">
              Gift this course
            </button>
            <button class="underline decoration-primary underline-offset-4">
              Apply Coupon
            </button>
          </div>
          <div
            class="border border-dashed p-2 my-4 flex items-center justify-between text-neutral-400 text-xs"
          >
            <div>
              <p><strong class="text-sm">OF52424</strong> is applied</p>
              <p>Udemy coupon</p>
            </div>
            <button class="i-mdi-close text-primary text-2xl"></button>
          </div>
          <div class="flex items-center border border-primary">
            <input
              type="text"
              class="flex-1 px-4 outline-none bg-transparent"
              autocomplete="off"
              placeholder="Enter Coupon"
            />
            <button class="w-20 py-2 bg-dark text-white hover:bg-dark/90">
              Apply
            </button>
          </div>
        </div>
        <div class="border-gray-200 px-6 py-6 border-t">
          <p class="text-xl font-bold">Training 5 or more people?</p>
          <p class="my-2 text-sm">
            Get your team access to 26,000+ top Udemy courses anytime, anywhere.
          </p>
          <button class="border border-primary p-4 w-full font-bold text-dark">
            Try Udemy Business
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref<any>({
  title: "The Complete Python Bootcamp From Zero to Hero in Python",
  subtitle:
    " Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  rating: 4.5869527,
  num_reviews: 509868,
  num_students: 1925416,
  authors: ["Jose Portilla", "Pierian Training"],
  last_update_date: "7/2023",
  language: "English",
  captions:
    "English [Auto], Arabic [Auto], Dutch [Auto], French [Auto], German [Auto], Indonesian [Auto], Italian [Auto], Japanese [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto], Simplified Chinese [Auto], Spanish [Auto], Thai [Auto], Turkish [Auto], Vietnamese [Auto]",
});
</script>
