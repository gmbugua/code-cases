<template>
  <div>
    <img
      v-on:click="showModal()"
      :src="imgSrc()"
      :alt="alt"
      class="article-image hover-shadow"
    />
    <div class="modal hidden visuallyhidden" ref="imgmodal">
      <span class="modal-content">
        <img v-on:click="showModal()" :src="imgSrc()" :alt="alt" class="article-image hover-shadow" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/img/${this.src}`);
      } catch (error) {
        return null;
      }
    },
    showModal() {
      if (this.$refs.imgmodal.classList.contains("hidden")) {
        this.$refs.imgmodal.classList.remove("hidden");
        setTimeout(() => {
          this.$refs.imgmodal.classList.remove("visuallyhidden");
        }, 20);
      } else {
        this.$refs.imgmodal.classList.add("visuallyhidden");
        this.$refs.imgmodal.addEventListener(
          "transitionend",
          (e) => {
            this.$refs.imgmodal.classList.add("hidden");
          },
          {
            capture: false,
            once: true,
            passive: false,
          }
        );
      }
    }
  },
};
</script>

<style lang="postcss" scoped>
img {
  @apply rounded-md cursor-pointer;
}

/* The Modal (background) */
.modal {
  @apply flex
    flex-row
    justify-center
    content-center
    w-full
    h-full
    fixed
    pt-24
    left-0
    top-0
    overflow-auto
    bg-navy-darker
    bg-opacity-80
    z-10
    opacity-100;

  transition: opacity 600ms linear;
}

.modal .article-image {
  @apply h-3/4;
}

.hidden {
  display: none;
}

.visuallyhidden {
  opacity: 0;
  transition: opacity 600ms linear;
}

/* Hover Shadows */
.hover-shadow {
  transition: box-shadow 20ms linear;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: box-shadow 100ms linear;
}
</style>