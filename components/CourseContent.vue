<template>
  <div class="mx-12 lg-m mt-6 text-sm flex flex-col">
    <div class="text-2xl font-bold mb-6">Course content</div>
    <div class="flex justify-between">
      <div>23 sections • 156 lectures • 22h 13m total length</div>
      <button @click="toggleAllSection" class="text-primary">
        {{ isExpandAll ? "Collapse all sections" : "Expand all sections" }}
      </button>
    </div>
    <div class="border mt-2">
      <div v-for="section in sectionsData" class="*:last:border-none">
        <div
          @click="toggleSection(section)"
          class="flex py-4 px-6 justify-between items-center bg-light border-b cursor-pointer"
        >
          <div class="text-base font-bold flex items-center">
            <span
              :class="[
                section.is_expand ? 'rotate-180' : '',
                'text-xl mr-2 transition-transform i-mdi-keyboard-arrow-down',
              ]"
            ></span>
            {{ section.title }}
          </div>
          <div>
            {{ section.items.length }} lectures
            {{ formatDuration(section.content_length_text) }}
          </div>
        </div>
        <div v-if="section.is_expand" class="px-6 py-4 border-b">
          <div v-for="item in section.items">
            <div class="flex justify-between py-2">
              <div class="flex items-center justify-start p-1">
                <span class="i-material-symbols-live-tv-outline text-lg"></span>
                <span class="mx-2">{{ item.title }}</span>
                <div
                  @click="toggleSection(item)"
                  class="w-6 h-6 rounded-full bg-light flex items-center justify-center cursor-pointer"
                >
                  <span
                    :class="[
                      item.is_expand ? 'rotate-180' : '',
                      'transition-transform i-mdi-keyboard-arrow-down text-xl ',
                    ]"
                  ></span>
                </div>
              </div>
              <div>{{ item.content_summary }}</div>
            </div>
            <div
              v-if="item.is_expand"
              class="px-6 text-[#6a6f73]"
              v-html="item.description"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sections } from "~/mock/data";

const isExpandAll = ref<boolean>(false);

const sectionsData = ref(sections);

const toggleSection = (section: any) => {
  section.is_expand = !section.is_expand;
};

const toggleAllSection = () => {
  isExpandAll.value = !isExpandAll.value;
  for (let section of sectionsData.value) {
    section.is_expand = isExpandAll.value;
  }
};

const formatDuration = computed(() => (duration: any) => {
  let dur = duration.split(":");
  if (dur.length == 2) {
    return `${parseInt(dur[0])}min`;
  } else if (dur.length == 3) {
    return `${parseInt(dur[0])}hr ${parseInt(dur[1])}min`;
  } else {
    return "";
  }
});
</script>
