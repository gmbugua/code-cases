<template>
  <div class="main">
    <Header class="main-header" />

    <ul class="blog-list">
      <li v-for="article of articles" :key="article.slug" class="blog-item">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <BlogItem
            :title="article.title"
            :lastUpdated="article.updatedAt"
            :description="article.description"
            :timeToRead="article.timeToRead"
          />
        </NuxtLink>
      </li>
    </ul>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import BlogItem from "~/components/BlogItem.vue";
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    BlogItem,
    Footer,
    Header,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "timeToRead", "updatedAt", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style lang="postcss" scoped>
ul {
  @apply pl-0 list-none;
}

.main {
  @apply flex 
      flex-col
      mt-10
      ml-auto 
      mr-auto
      max-w-4xl
      px-11 
      pb-11;
}
.main-header {
  @apply 
    sm:relative 
    sm:top-2
    sm:mb-0
    mb-5;
}

.blog-item {
  @apply mb-5;
}

.footer {
  @apply flex;
}
</style>