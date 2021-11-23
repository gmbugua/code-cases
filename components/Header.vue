<template>
  <div>
    <div class="header">
      <h1 id="title">The Code Cases</h1>
      <DarkModeToggle id="dark-mode-toggle" :checked="isDarkMode" @test-click='handleTestClick'/>
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
        <SeatedMan id="seated-man" v-if="!this.isDarkMode"/> 
        <SeatedManDark id="seated-man" v-if="this.isDarkMode"/>
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
  data() {
    return {
      isDarkMode: false,
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
  .header {
    @apply 
      flex
      sm:flex-row
      sm:items-center 
      sm:justify-between 
      sm:pb-7
      flex-col-reverse
      pb-2
      font-bold
      text-navy-default
      dark:text-white;
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
      font-semibold
      sm:flex-col
      items-center
  }

  .name .first-name {
    @apply
      mr-3
      text-navy-lighter 
      dark:text-white text-xl
  }

  .name .last-name {
    @apply
      text-coral-darker 
      dark:text-coral-default text-2xl
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