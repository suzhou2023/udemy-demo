<template>
  <div ref="content">
    <TopIntroduce />

    <div
      class="min-w-[600px] sm:max-w-[600px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto my-0 py-6 relative max-sm:p-4"
    >
      <div class="xl:max-w-[800px] lg:max-w-[600px]">
        <WhatULearn />

        <TopCompanies />

        <CodingExercises />

        <CourseContent />

        <FeaturedReview />

        <StudentsAlsoBought />

        <Rating />

        <MoreCourses />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

useHead({
  title: "Python Bootcamps: Learn Python Programming and Code Training | Udemy",
});

const isShowLead = ref<boolean>(true);
const isShowLearn = ref<boolean>(true);
const isFixedSider = ref<boolean>(false);
const isExpandAll = ref<boolean>(false);

const topContainer = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const sider = ref<HTMLElement | null>(null);
const showLeanMore = () => {
  isShowLearn.value = !isShowLearn.value;
};

const hoursLeft = 24 - new Date().getHours() - 1;
const data = ref<any>({
  title: "The Complete Python Bootcamp From Zero to Hero in Python",
  subtitle:
    " Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  rating: 4.5869527,
  num_reviews: 507306,
  num_students: 1914890,
  authors: ["Jose Portilla", "Pierian Training"],
  last_update_date: "7/2023",
  language: "English",
  captions:
    "English [Auto], Arabic [Auto], Dutch [Auto], French [Auto], German [Auto], Indonesian [Auto], Italian [Auto], Japanese [Auto], Korean [Auto], Polish [Auto], Portuguese [Auto], Simplified Chinese [Auto], Spanish [Auto], Thai [Auto], Turkish [Auto], Vietnamese [Auto]",
});

const includes = ref<any>([
  {
    icon: "i-material-symbols-live-tv-outline",
    title: "22 hours on-demand video",
  },
  {
    icon: "i-material-symbols-code",
    title: "19 coding exercises",
  },
  {
    icon: "i-mdi-file-outline",
    title: "15 articles",
  },
  {
    icon: "i-mdi-cellphone",
    title: "Access on mobile and TV",
  },
  {
    icon: "i-mdi-infinity",
    title: "Full lifetime access",
  },
  {
    icon: "i-material-symbols-rewarded-ads-outline",
    title: "Certificate of completion",
  },
]);

const captionDisplay = computed(() => {
  let { captions } = data.value;
  let captions_arr = captions.split(",");
  return captions_arr && captions_arr.length > 2
    ? captions_arr.slice(0, 2).join(",")
    : captions;
});

//student also buy
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

import { useDebounce } from "@vueuse/core";
import { students_also_bought } from "~/mock/students-also-bought";

onMounted(() => {
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  window.onscroll = useDebounce(() => {
    let bottom = topContainer.value?.getBoundingClientRect().bottom;
    let contentBottom = content.value?.getBoundingClientRect().bottom;
    if (bottom && bottom <= 0) {
      isFixedSider.value = true;
    } else {
      isFixedSider.value = false;
    }
    if (contentBottom && contentBottom <= viewHeight) {
      isFixedSider.value = false;
    }
  }, 50);
});
</script>

<style>
@keyframes sider-fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.double-line {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.rating-content {
  --more: false;
  animation: check 1s;
  overflow: hidden;
  animation-timeline: scroll(self);
}

@keyframes more {
  from,
  to {
    --more: true;
    color: red;
  }
}

.lg-m {
  @apply max-lg:mx-0;
}
</style>
