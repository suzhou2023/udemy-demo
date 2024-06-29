<template>
  <div class="mx-12 lg-m mt-6 p-4 border">
    <div class="text-2xl mb-2 font-bold">Featured review</div>
    <div class="flex items-center">
      <img
        class="w-20 rounded-full mr-2"
        src="https://img-c.udemycdn.com/user/200_H/101610246_6b5d_3.jpg"
      />
      <div>
        <strong>Ken K.</strong>
        <div class="text-sm">9 courses</div>
        <div class="text-sm">2 reviews</div>
      </div>
    </div>
    <div class="flex items-center text-sm">
      <span class="text-orange-400 inline-flex items-center mr-2">
        <span v-for="i in 5" class="i-material-symbols-star text-xl"></span
      ></span>
      3 years ago
    </div>
    <p class="text-sm py-3">
      Everything on this course is a goldmine except for the GUI since it's
      specific for Jupyter Notebooks and it's missing the video for GUI Events.
      Still it was a nice introduction to GUI. Don't let that disappoint you
      though. THIS IS A MUST HAVE COURSE. I have already recommended it to few
      people and always will. Do yourself a favor and do this course if you want
      to learn Python 3. Thank you so much for this course, Jose-sensei!!
    </p>
    <p class="text-xs">Was this review helpful?</p>
    <div class="flex items-center my-4">
      <button
        class="border border-primary rounded-full w-10 h-10 flex items-center justify-center"
      >
        <span class="i-mdi-thumbs-up-outline text-xl"></span>
      </button>

      <button
        class="border border-primary rounded-full w-10 h-10 flex items-center justify-center mx-2"
      >
        <span class="i-mdi-thumbs-down-outline text-xl"></span>
      </button>
      <button class="underline text-sm ml-2">Report</button>
    </div>
  </div>
</template>
