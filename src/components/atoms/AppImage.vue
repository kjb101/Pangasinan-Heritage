<template>
  <img
    class="app-image"
    :src="resolvedSrc"
    :alt="alt"
    :loading="loading"
    :width="width"
    :height="height"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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

// Prepend Vite's base URL (e.g. '/Pangasinan-Heritage/') so image
// paths resolve correctly whether running locally or on GitHub Pages.
const resolvedSrc = computed(() => {
  const cleanPath = props.src.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${cleanPath}`
})
</script>

<style scoped>
.app-image {
  width: 100%;
  height: 100%;

  object-fit: cover;
}
</style>