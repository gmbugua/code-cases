<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(['toggleDarkMode']),
    handleTestClick(checked) {
      this.toggleDarkMode();
      document.documentElement.classList.toggle("dark")
    },
  },
};
</script>


<template>
  <label class="switch">
    <input type="checkbox" :checked="this.$store.state.isDarkMode" @change="handleTestClick" />
    <span class="slider round"></span>
  </label>
</template>


<style lang="postcss" scoped>
/* The switch - the box around the slider */
.switch {
  @apply relative
      inline-block
      w-16
      h-9;
}

/* Hide default HTML checkbox */
.switch input {
  @apply opacity-0
      w-0
      h-0;
}

/* The slider */
.slider {
  @apply absolute
      cursor-pointer
      top-0
      left-0
      right-0
      bottom-0
      bg-navy-default;

  --webkit-transtion: 0.4s;
  transition: 0.4s;
}

.slider:before {
  @apply absolute
      h-7
      w-7
      left-1
      bottom-1
      bg-ocean-lighter;

  content: "";
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  @apply bg-navy-default;
}

input:focus + .slider {
  @apply shadow-md;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 32px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>