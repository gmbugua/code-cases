<template>
  <div>
    <div class="header">
      <h1 id="title">The Code Cases</h1>
      <DarkModeToggle />
    </div>
    <div class="sub-header">
      <div class="sub-header-left">
        <p class="intro-text">blog written by</p>
        <img class="headshot cropped" src="~/assets/img/headshot.jpeg" alt="" >
        <div class="name">
          <p class="first-name">George</p>
          <p class="last-name">Mbugua</p>
        </div>
      </div>
      <div class="sub-header-right">
        <SeatedMan id="seated-man" v-if="!this.$store.state.isDarkMode"/> 
        <SeatedManDark id="seated-man" v-if="this.$store.state.isDarkMode"/>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from '~/components/DarkModeToggle.vue'
import SeatedMan from '~/assets/svg/seated_man.svg?inline'
import SeatedManDark from '~/assets/svg/seated_man_dark.svg?inline'
export default {
  components: {
    SeatedMan,
    SeatedManDark,
    DarkModeToggle
  },
}
</script>


<style lang="postcss" scoped>
  .header {
    @apply 
      flex
      flex-col-reverse
      pb-2
      font-bold
      leading-tight
      font-sans
      sm:flex-row
      sm:items-center 
      sm:justify-between 
      sm:pb-7
      text-navy-default
      dark:text-white
  }

  .sub-header {
    @apply flex flex-col sm:flex-row sm:justify-between 
  }

  .sub-header-left {
    @apply 
      flex 
      flex-col
      sm:flex-row 
      items-center
      sm:items-center
  }

  .sub-header-right {
  }


  .intro-text {
    @apply
      mb-3
      sm:mr-5
      sm:self-start
      text-navy-default 
      dark:text-ocean-lightest
  }

  .headshot {
    @apply mr-0 mb-3 sm:mr-5
  }

  .name {
    @apply 
      flex
      items-center
      font-semibold
      font-sans
      sm:flex-col
      sm:items-start
  }

  .name .first-name {
    @apply
      sm:mr-0
      mr-2
      text-navy-lighter 
      dark:text-white 
      sm:text-2xl
      text-2xl
  }

  .name .last-name {
    @apply
      text-coral-darker 
      dark:text-coral-default 
      sm:text-3xl
      text-2xl
  }

  .cropped {
    @apply 
      h-24 
      rounded-full 
      object-contain;
  }

  #seated-man {
    @apply hidden sm:block
  }

  #title { 
    @apply sm:text-5xl text-3xl self-center
  }

  #dark-mode-toggle {
    @apply sm:mb-0 mb-7;
  }

</style>