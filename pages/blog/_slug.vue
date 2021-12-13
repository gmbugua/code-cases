<script>
import dateMixin from "~/mixins/dateMixin";
import ReadTime from "~/components/ReadTime.vue";
import DarkModeToggle from "~/components/DarkModeToggle.vue";
export default {
  mixins: [dateMixin],
  components: {
    ReadTime,
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
};
</script>


<template>
  <div>
    <div class="horiz-container">
      <a id="back-btn" class="hvr-bounce-to-top" @click="$router.go(-1)">← Back</a>
      <DarkModeToggle />
    </div>

    <article>
      <h1>{{ article.title }}</h1>
      <div class="horiz-container sub-heading">
        <p>{{ formatDate(article.updatedAt) }}</p>
        <p>•</p>
        <ReadTime :timeToRead="article.timeToRead" />
      </div>
      <!-- <img :src="article.img" :alt="article.alt" /> -->

      <!-- <nuxt-content :document="article" /> -->
    </article>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  @apply text-3xl sm:text-5xl font-sans font-bold leading-tight;
}
#back-btn {
  @apply flex
    px-4
    py-2
    text-sm
    font-semibold
    border-2
    rounded-full
    opacity-100
    text-navy-lighter
    border-navy-lighter
    dark:text-ocean-default
    dark:border-ocean-default;
}

#back-btn:hover {
  @apply text-ocean-lighter border-ocean-lighter dark:text-navy-lighter dark:border-navy-lighter;
}

.horiz-container {
  @apply flex justify-between items-center mb-5;
}

.sub-heading {
  @apply justify-start;
}

.sub-heading p {
  @apply mr-3 text-xl;
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