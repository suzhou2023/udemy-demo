<template>
  <div class="mx-12 lg-m mt-6 py-4 text-sm">
    <div class="text-2xl font-bold">Students also bought</div>
    <div class="flex flex-col">
      <div
        v-for="student in studentsDisplay"
        class="py-4 border-b flex items-start justify-between"
      >
        <div class="flex-1 flex">
          <img class="w-16 h-16" :src="student.image_100x100" loading="lazy" />
          <div class="flex-[4] min-w-44 ml-2 relative">
            <div class="text-base font-bold">
              <div class="double-line">
                {{ student.title }}
              </div>
            </div>
            <div class="whitespace-nowrap absolute">
              <span
                v-if="student.bestseller_badge_content"
                class="inline-block px-[4px] py-[2px] bg-amber-200 text-xs mr-2"
                >{{ student.bestseller_badge_content.badge_text }}</span
              >
              <span
                class="text-[#1e6055] font-bold after:content-['●'] after:text-[6px] after:m-1"
                >{{ student.content_info }}
              </span>
              <span>Updated {{ student.last_update_date }}</span>
            </div>
          </div>
          <div class="flex flex-[4] items-start justify-between ml-4">
            <div class="flex items-center">
              <strong>{{ student.rating.toFixed(1) }}</strong>
              <span
                class="i-material-symbols-star text-yellow-700 text-lg ml-1"
              ></span>
            </div>
            <div class="flex items-center">
              <span class="i-mdi-people text-lg mr-1"></span>
              {{ student.num_subscribers.toLocaleString() }}
            </div>
            <span class="font-bold">$99.99</span>
          </div>
        </div>
        <div class="ml-2">
          <button
            class="w-10 h-10 border rounded-full border-primary flex items-center justify-center hover:bg-light"
          >
            <span class="i-mdi-heart-outline text-xl"></span>
          </button>
        </div>
      </div>
      <button
        @click="toggleSutdentShow"
        v-if="studentsAlsoBuy.length > 6"
        class="border border-primary w-full p-2 text-dark font-bold hover:bg-light"
      >
        {{ isStudentsMore ? "Show less" : "Show more" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { students_also_bought } from "~/mock/students-also-bought";

const isStudentsMore = ref<boolean>(false);
const studentsAlsoBuy = ref(students_also_bought);

const studentsDisplay = computed(() => {
  if (studentsAlsoBuy.value.length > 6) {
    return isStudentsMore.value
      ? studentsAlsoBuy.value
      : studentsAlsoBuy.value.slice(0, 7);
  } else {
    return studentsAlsoBuy.value;
  }
});

const toggleSutdentShow = () => {
  isStudentsMore.value = !isStudentsMore.value;
};
</script>
