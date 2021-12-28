<template>
  <div>
    <div id="post-header">
      <a id="back-btn" class="hvr-bounce-to-top" @click="$router.go(-1)"
        >← Back</a
      >
      <DarkModeToggle />
    </div>
    <div class="main post-content">
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import DarkModeToggle from "~/components/DarkModeToggle.vue";
export default {
  components: {
    DarkModeToggle,
    Footer,
  },
};
</script>

<style lang="postcss" scoped>
#post-header {
  @apply flex justify-between items-center mx-10 mt-6;
}

.post-content {
  @apply max-w-4xl;
}

#back-btn {
  @apply flex
    cursor-pointer
    px-5
    py-2
    text-sm
    font-semibold
    border-2
    rounded-full
    opacity-100
    text-ocean-lighter
    border-ocean-lighter
    dark:text-navy-lighter
    dark:border-navy-lighter;
}

#back-btn:hover {
  @apply text-navy-lighter
    border-navy-lighter
    dark:text-navy-default
    dark:border-coral-default;
}

.hvr-bounce-to-top {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  overflow: hidden;
}

.hvr-bounce-to-top:before {
  @apply absolute
    top-0
    left-0
    right-0
    bottom-0
    bg-coral-default;
  content: "";
  z-index: -1;
  -webkit-transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  -webkit-transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transform: scaleY(0);
  transform-origin: 50% 100%;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}

.hvr-bounce-to-top:hover,
.hvr-bounce-to-top:focus,
.hvr-bounce-to-top:active {
  @apply text-ocean-lighter;
}

.hvr-bounce-to-top:hover:before,
.hvr-bounce-to-top:focus:before,
.hvr-bounce-to-top:active:before {
  -webkit-transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transform: scaleY(1);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
</style>