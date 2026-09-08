<template>
  <img
    class="app-image"
    :src="src"
    :alt="alt"
    :loading="loading"
    :width="width"
    :height="height"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },

  alt: {
    type: String,
    default: ''
  },

  loading: {
    type: String,
    default: 'lazy'
  },

  width: {
    type: [String, Number],
    default: 800
  },

  height: {
    type: [String, Number],
    default: 500
  }
})
</script>

<style scoped>
.app-image {
  width: 100%;
  height: 100%;

  object-fit: cover;
}
</style>