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
      GitHub
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
    text-sm
    font-bold
    border-b-4
  text-navy-lighter
  border-ocean-lighter
  dark:text-ocean-default
  dark:border-navy-lighter
    no-underline;
}

a:hover {
  @apply ease-linear
    transition-colors
    text-navy-default
    border-ocean-lightest
    dark:border-navy-lighter
    dark:text-ocean-lightest;
}

.footer {
  @apply flex;
}
</style>
