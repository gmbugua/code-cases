<template>
  <div>
    <div class="header">
      <h1>The Code Cases</h1>
    </div>
    <div class="sub-header">
      <div class="intro-text-container">
        <p>blog written by</p>
      </div>
      <div class="headshot-container">
        <img class="cropped" src="~/assets/headshot.jpeg" alt="" >
        <p class="headshot-caption">Dev | Design | Drive</p>
      </div>
      <div class="name-container">
        <p class="first-name">George</p>
        <p class="last-name">Mbugua</p>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .cropped {
    @apply h-24 rounded-full object-contain;
  }
  .header {
    @apply 
      flex 
      justify-between 
      items-center 
      w-full
      font-fira-code
      font-bold
      text-5xl
      pb-7
      text-navy-lighter
      dark:text-white;
  }
  .sub-header {
    @apply flex items-start flex-col sm:flex-row sm:items-center
  }
  .headshot-container {
    @apply flex flex-col items-center
  }

  .headshot-caption {
    @apply dark:text-white font-fira-code font-medium
  }

  .intro-text-container {
    @apply self-start text-ocean-lightest
  }
  .name-container {
    @apply flex sm:flex-col font-fira-code font-semibold
  }

  .name-container .first-name {
    @apply text-navy-lighter dark:text-white text-xl
  }

  .name-container .last-name {
    @apply text-coral-darker dark:text-coral-default text-3xl
  }
  
  .name-container .first-name {
    @apply mr-2
  }
</style>