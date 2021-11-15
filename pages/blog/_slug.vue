<script> 
  import dateMixin from '~/mixins/dateMixin'
  export default {
    mixins: [dateMixin],
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    },
  }
</script>


<template>
  <article>
    <h1>{{ article.title }}</h1>
    <img :src="article.img" :alt="article.alt" />
    <p>last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />
  </article>
</template>