<template>
  <div class="footer">
    <a target="_blank" rel="noopener noreferrer" href=""> RSS </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/george-mwicigi-mbugua/"
    >
      LinkedIn
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/gmbugua"
    >
      Github
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
a {
  @apply mr-3
    text-base
    font-bold
  text-navy-lighter
  border-ocean-default
  dark:text-ocean-default
  dark:border-navy-lighter
    no-underline;

  border-bottom: 0.25rem solid;
}

a:hover {
  @apply ease-linear
    transition-colors
    text-navy-default
    border-ocean-lightest
    dark:text-ocean-lightest;
}

.footer {
  @apply flex
      justify-evenly;
}
</style>
