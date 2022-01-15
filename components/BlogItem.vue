<template>
  <div class="item">

      <section class="item-left">
        <div class="item-title-date">
          <h1 class="item-title">{{ title }}</h1>
          <p class="item-date">{{ formatDate(lastUpdated).toLowerCase() }} </p>
        </div>
        <p class="item-description">{{ description }}</p>
      </section>

      <section class="item-right">
        <ReadTime class="item-read-time " :timeToRead="timeToRead"/>
      </section>
  </div>
</template>

<script>
import dateMixin from '~/mixins/dateMixin'
import ReadTime from './ReadTime.vue'
export default {
  name: 'BlogItem',
  props: [
    'title',
    'lastUpdated',
    'description',
    'timeToRead'
  ],
  components: {
    ReadTime
  },
  mixins: [
    dateMixin
  ],
}
</script>

<style lang="postcss" scoped>
  .item {
    @apply 
      flex
      items-center
      justify-between
      p-5
      rounded-md
      shadow-md
      dark:shadow-xl
      bg-ocean-lighter;
  }

  .item:hover .item-read-time  {
    @apply opacity-100;
    transition: opacity 600ms linear;
  }

  .item-title-date p,h1 {
    @apply pr-2 inline-block;
  }

  .item-title {
    @apply text-lg
  }

  .item-date {
    @apply text-sm
  }

  .item-description {
    @apply text-sm
  }

  .item-read-time {
    @apply opacity-0;
    transition: opacity 400ms ease-in
  }

</style>