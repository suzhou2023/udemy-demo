<template>
  <div id="footer" class="bg-dark pb-12 flex flex-col text-white">
    <div
      class="flex py-3 px-12 flex-row justify-between items-center flex-wrap border-b border-gray-600"
    >
      <div class="text-lg font-bold flex-1">
        Top companies choose
        <span class="text-light hover:underline cursor-pointer"
          >Udemy Business</span
        >
        to build in-demand career skills.
      </div>
      <div class="flex items-center *:mr-3 *:h-[44px] *:my-4 last:*:mr-0">
        <img v-for="logo in logos" :src="logo" loading="lazy" />
      </div>
    </div>
    <div class="flex py-4 px-16 flex-1 text-sm flex-row justify-between">
      <div class="flex flex-1 flex-row *:basis-72">
        <ul
          v-for="links in linkColumns"
          class="*:p-1 hover:*:underline *:cursor-pointer"
        >
          <li v-for="link in links">
            <NuxtLink :to="link.href" class="footer-link">{{
              link.text
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex items-start justify-end">
        <div
          class="py-2 px-8 border border-white cursor-pointer flex items-center"
        >
          <span class="text-xl i-material-symbols-language mr-2" /> English
        </div>
      </div>
    </div>
    <div class="flex py-12 px-16 justify-between items-center">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        class="w-24"
      />
      <p class="text-xs">©2024 Udemy, Inc.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = ref([
  "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
  "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
  "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
  "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
]);
const linkColumns = ref([
  [
    {
      feature_flag: "footer.links.business",
      href: "/",
      text: "Udemy Business",
    },
    {
      feature_flag: "footer.links.teach",
      href: "/",
      text: "Teach on Udemy",
    },
    {
      is_disabled: false,
      href: "/",
      open_in_new_tab: true,
      text: "Get the app",
    },
    {
      feature_flag: "footer.links.about",
      href: "https://about.udemy.com/?locale=en-us",
      text: "About us",
    },
    {
      feature_flag: "footer.links.contact",
      href: "https://about.udemy.com/company?locale=en-us#offices",
      text: "Contact us",
    },
  ],
  [
    {
      feature_flag: "footer.links.careers",
      href: "https://about.udemy.com/careers?locale=en-us",
      text: "Careers",
    },
    {
      feature_flag: "footer.links.blog",
      href: "https://blog.udemy.com/?ref=footer",
      text: "Blog",
    },
    {
      href: "/",
      text: "Help and Support",
    },
    {
      feature_flag: "footer.links.affiliates",
      href: "/",
      text: "Affiliate",
    },
    {
      is_disabled: false,
      href: "https://investors.udemy.com",
      text: "Investors",
    },
  ],
  [
    {
      is_disabled: false,
      href: "/",
      text: "Terms",
    },
    {
      href: "/",
      text: "Privacy policy",
    },
    {
      href: "/",
      text: "Cookie settings",
    },
    {
      href: "/",
      text: "Sitemap",
    },
    {
      href: "https://about.udemy.com/accessibility-statement?locale=en-us",
      text: "Accessibility statement",
    },
  ],
]);
</script>
