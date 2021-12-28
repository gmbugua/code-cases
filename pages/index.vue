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

    <Footer />
  </div>
</template>

<script>
// VUE
import { mapMutations } from 'vuex'

// CUSTOM COMPONENTS
import BlogItem from "~/components/BlogItem.vue";
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
  mounted() {
    this.loadTheme();
  },
  components: {
    BlogItem,
    Footer,
    Header,
  },
  methods: {
    ...mapMutations(['setTheme']),
    loadTheme() {
      const isWindowDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isWindowDark)) {
        document.documentElement.classList.add("dark");
        this.setTheme("dark")
      } else {
        document.documentElement.classList.remove("dark");
        this.setTheme("light")
      }
    },
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

.main-header {
  @apply sm:relative 
    sm:top-2
    sm:mb-0
    mb-5;
}

.blog-item {
  @apply mb-5;
}
</style>