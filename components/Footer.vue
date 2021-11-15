<template>
  <div class="footer">
    <div class="footer-inner" >

      <div class="footer-face footer-front">
        <p> contact me </p>
      </div>

      <div class="footer-face footer-back">
        <div>
          <a target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/george-mwicigi-mbugua/">
            <LinkedIn />
          </a>
        </div>
        <div>
          <a target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/gmbugua">
            <GithubLogo />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import GithubLogo from '~/assets/github_logo.svg?inline'
import LinkedIn from '~/assets/linkedin_logo.svg?inline'
export default {
  components: {
    LinkedIn,
    GithubLogo
  },
  data() {
    return {
      isFlipped: false
    }
  },
  methods: {
  }
}


</script>

<style lang="postcss" scoped>

  .footer {
    @apply h-28 w-52;
  }

  .footer p {
    
  }

  .footer-inner {
    @apply
      h-full
      w-full
      relative
      cursor-pointer
      shadow-md;
    transition: transform 1s;
    transition-delay: .5s;
    transform-style: preserve-3d;
  }

  .footer-inner:hover {
    transform: rotateY(180deg);
  }

  .footer-face {
    @apply w-full h-full rounded-lg absolute bg-ocean-lighter;
    --webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
  }

  .footer-front {
    @apply flex items-center justify-center;
  }

  .footer-back {
    @apply flex items-center justify-evenly;
    transform: rotateY(180deg);
  }

</style>
