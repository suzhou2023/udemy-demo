<template>
  <div class="mx-12 lg-m mt-6 py-4">
    <div class="text-2xl font-bold flex items-center mb-4">
      <span class="i-material-symbols-star text-yellow-700 text-2xl ml-1"></span
      >4.6 course rating <span class="i-mdi-dot"></span> 508K ratings
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="(rating, index) in ratingsData.slice(0, 4)"
        class="w-[calc(50%-16px)] p-2 border-t odd:mr-4 even:ml-4"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div
              class="w-10 h-10 bg-dark mr-3 text-white rounded-full flex items-center justify-center"
            >
              {{ rating.user.initials }}
            </div>
            <div class="flex items-start flex-col justify-center">
              <strong>{{ rating.user.name }}</strong>
              <div class="text-xs text-[#6a6f73] flex items-center">
                <span class="text-orange-400 inline-flex items-center mr-2">
                  <span
                    v-for="i in 4"
                    class="i-material-symbols-star text-sm"
                  ></span>
                  <span class="i-material-symbols-star-half"></span>
                </span>
                <span>{{ rating.created_formatted_with_time_since }}</span>
              </div>
            </div>
          </div>
          <button class="i-mdi-dots-vertical text-2xl"></button>
        </div>
        <div :ref="setRefAction" class="mt-2 h-30 double-line !line-clamp-5">
          {{ rating.content }}
        </div>
        <button
          v-if="ratingContentShow(index)"
          class="text-dark underline decoration-primary underline-offset-4 my-2 text-sm font-bold"
        >
          Show more
        </button>
        <div class="flex items-center my-4">
          <span class="text-xs">Helpful?</span>
          <button class="mx-4">
            <span class="i-mdi-thumbs-up-outline text-xl"></span>
          </button>
          <button>
            <span class="i-mdi-thumbs-down-outline text-xl"></span>
          </button>
        </div>
      </div>
    </div>
    <button class="border border-primary text-dark font-bold text-sm py-2 px-4">
      Show all reviews
    </button>
  </div>
</template>

<script setup lang="ts">
import { ratings } from "~/mock/ratings";

const ratingsData = ref(ratings);

const refList = ref<Array<any>>([]);
const setRefAction = (el: any) => {
  refList.value.push(el);
};

const ratingContentShow = computed(() => (index: number) => {
  if (refList.value[index]) {
    return (
      refList.value[index].scrollHeight > refList.value[index].clientHeight
    );
  } else {
    return false;
  }
});
</script>
