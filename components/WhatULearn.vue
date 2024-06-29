<template>
  <div
    :class="[
      isShowLearn ? '' : 'max-h-[300px]',
      'border p-4 mx-12 lg-m  overflow-hidden relative',
    ]"
  >
    <p class="text-2xl font-bold mb-4">What you'll learn</p>
    <div class="flex flex-wrap gap-2 text-sm justify-between flex-row">
      <div v-for="learn in learns" class="flex items-start w-[calc(50%-24px)]">
        <span class="i-material-symbols-check mr-4 text-lg"></span>
        <span class="flex-1">{{ learn }}</span>
      </div>
    </div>
    <div
      :class="[
        isShowLearn
          ? 'bg-white py-4'
          : 'bg-gradient-to-b from-transparent from-10% to-white to-60% pt-16 pb-4 px-4 absolute bottom-0 left-0  w-full',
        ' ',
      ]"
    >
      <button
        class="text-primary font-bold text-sm flex items-center"
        @click="showLeanMore"
      >
        {{ isShowLearn ? "Show less" : "Show more" }}
        <span
          :class="[
            isShowLearn
              ? 'i-mdi-keyboard-arrow-up'
              : 'i-mdi-keyboard-arrow-down',
          ]"
        ></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const learns = [
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will build games and programs that use Python libraries.",
  "You will be able to use Python for your own work problems or personal projects.",
  "You will create a portfolio of Python based projects you can share.",
  "Learn to use Python professionally, learning both Python 2 and Python 3!",
  "Create games with Python, like Tic Tac Toe and Blackjack!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn to use Object Oriented Programming with classes!",
  "Understand complex topics, like decorators.",
  "Understand how to use both the Jupyter Notebook and create .py files",
  "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
  "Build a complete understanding of Python from the ground up!",
];

const isShowLearn = ref<boolean>(true);

const showLeanMore = () => {
  isShowLearn.value = !isShowLearn.value;
};
</script>
