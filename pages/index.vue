<template>
  <div class="main">
    <div class="header-container">
      <Header class="header-left"/>
      <div class="header-right">
        <DarkModeToggle id="dark-mode-toggle" :checked="this.isDarkMode" @test-click='handleTestClick'/>
        <SeatedMan />
      </div>
    </div>

    <ul class="blog-list">
      <li v-for="article of articles" :key="article.slug" class="blog-item">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <BlogItem :title="article.title"
                      :lastUpdated="article.updatedAt"
                      :description="article.description"
                      :timeToRead="article.timeToRead" />
        </NuxtLink>
      </li>
    </ul>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
  import BlogItem from '~/components/BlogItem.vue'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'
  import DarkModeToggle from '~/components/DarkModeToggle.vue'
  import SeatedMan from '~/assets/seated_man.svg?inline'

  export default {
    components: {
        BlogItem,
        SeatedMan,
        Footer,
        Header,
        DarkModeToggle
    },
    head() {
      return {
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
      }
    },
    data() {
      return {
        isDarkMode: false,
      }
    },
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'timeToRead', 'updatedAt', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles
      }

    },
    methods: {
      handleTestClick(checked) {
        this.isDarkMode = checked;
        if (this.isDarkMode === true) {
          document.documentElement.classList.add('dark')
        } else [
          document.documentElement.classList.remove('dark')
        ]
      }
    },
  }
</script>

<style lang="postcss" scoped>

  ul {
    @apply pl-0 list-none;
  }

  .main {
    @apply 
      flex 
      flex-col
      mt-10
      ml-auto 
      mr-auto 
      max-w-4xl
      px-11 
      pb-11;

    height: 100%;
  }

  .header-container {
    @apply 
      flex 
      items-center 
      justify-between 
      self-center 
      w-full
  }

  .header-left {
    @apply flex-grow;
  }


  .header-right {
    @apply flex flex-col items-end top-2 relative
  }

  .header-right #dark-mode-toggle {
    @apply mb-10
  }

  .blog-item {
    @apply mb-5
  }

  .footer {
    @apply flex justify-center self-center;
  }

</style>