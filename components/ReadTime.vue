<template>
  <p> {{timeToRead}} min {{ coffees(timeToRead) }}</p>
</template>


<script>
export default {
  name: 'ReadTime',
  props: [
    'timeToRead'
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
p {
  @apply text-sm
}
</style>