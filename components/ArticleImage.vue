<template>
  <img :src="imgSrc()" :alt="alt" class="article-image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/img/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
img {
  @apply rounded-md;
}
</style>