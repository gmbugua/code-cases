<script>
import dateMixin from "~/mixins/dateMixin";
import ReadTime from "~/components/ReadTime.vue";
import DarkModeToggle from "~/components/DarkModeToggle.vue";
export default {
  layout: "post",
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
    <article>
      <h1>{{ article.title }}</h1>
      <div class="horiz-container sub-heading">
        <p>{{ formatDate(article.updatedAt) }}</p>
        <p>•</p>
        <ReadTime :timeToRead="article.timeToRead" />
      </div>

      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<style lang="postcss" scoped>
h1 {
  @apply 
    sm:text-5xl 
    text-3xl
    text-navy-default
    dark:text-ocean-lighter
    font-sans 
    font-bold 
    leading-tight;
}

.horiz-container {
  @apply flex justify-between items-center mb-5;
}

.sub-heading {
  @apply justify-start;
}

.sub-heading p {
  @apply mr-3 text-lg text-navy-default dark:text-ocean-lighter font-light;
}
</style>