<template>
  <div class="item">

      <section class="item-left">
        <div class="item-title-date">
          <h1 class="item-title">{{ title.toLowerCase() }}</h1>
          <p class="item-date">{{ formatDate(lastUpdated).toLowerCase() }} </p>
        </div>
        <p class="item-description">{{ description }}</p>
      </section>

      <section class="item-right">
        <p class="item-read-time">{{ coffees(timeToRead) }} {{timeToRead}} min</p>
      </section>
  </div>
</template>

<script>
import dateMixin from '~/mixins/dateMixin'
export default {
  name: 'BlogItem',
  props: [
    'title',
    'lastUpdated',
    'description',
    'timeToRead'
  ],
  mixins: [
    dateMixin
  ],
  methods: {
    coffees(time) {
      const emoji = "☕"
      if (time <=5) {
        return emoji.repeat(1)
      } else if (time > 5 && time < 30) {
        return emoji.repeat(2)
      } else { 
        return emoji.repeat(3)
      }
    }
  }
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