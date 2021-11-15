<template>
  <div class="item">
    <div id="item-content">
      <div id="left">
        <h1>{{ title.toLowerCase() }}</h1>
        <p>{{ formatDate(lastUpdated).toLowerCase() }} </p>
      </div>
      <div id="right">
        <p id="timeToRead">{{ coffees(timeToRead) }} {{ timeToRead }} min read</p>
      </div>
    </div>
  </div>
</template>

<script>
import dateMixin from '../mixins/dateMixin'
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
      flex-col
      p-5
      rounded-md
      shadow-md
      dark:shadow-xl
      bg-ocean-lighter;
  }

  .item:hover #timeToRead {
    @apply opacity-100;
    transition: opacity 600ms linear;
  }

  #item-content {
    @apply flex justify-between
  }

  #left p,h1 {
    @apply pr-2 inline-block;
  }

  #timeToRead {
    @apply opacity-0;
    transition: opacity 400ms ease-in
  }

</style>