<script>
import dateMixin from "~/mixins/dateMixin";
export default {
  mixins: [dateMixin],
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
};
</script>


<template>
  <div>

    <a id="back-btn" href="/">← Back</a>

    <article>
      <h1>{{ article.title }}</h1>
      <img :src="article.img" :alt="article.alt" />
      <p> {{ formatDate(article.updatedAt) }}</p>
      
      <!-- <nuxt-content :document="article" /> -->
    </article>
  </div>
</template>

<style lang="postcss" scoped>
#back-btn {
  @apply
    w-9
    px-4
    py-2
    text-sm
    border
    rounded-full
    opacity-75
    hover:opacity-100
    transition-opacity
    duration-300
    text-white
    border-white;
}
</style>