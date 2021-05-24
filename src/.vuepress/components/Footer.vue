<template>
  <footer
    class="
    [ fixed bottom-0 left-0 py-8 w-full bg-background ]
    [ tablet:pb-20 ]
  "
  >
    <nav class="tablet:mx-auto tablet:max-w-lg container">
      <ul
        class="
        [ flex mobile:justify-around ]
        []
      "
      >
        <li 
          v-for="(item, index) in $localeConfig.navItems"
          :key="index"
        >
          <a 
            :href="item.link"
            class="text-center uppercase text-14 px-2 pb-2 hover:text-black"
            :class="{
              'text-black border-b-2': $data.currentUrl === item.link, 
              'text-gray': $data.currentUrl !== item.link,
            }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script>
    export default {
        data() {
            return {
                currentUrl: (typeof window !== 'undefined') && window.location.pathname,
            };
        },
    }
</script>