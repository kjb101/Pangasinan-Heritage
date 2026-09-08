<template>
  <component
    :is="tag"
    class="typography"
    :class="`typography--${variant}`"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'p'
  },

  variant: {
    type: String,
    default: 'body'
  }
})
</script>

<style scoped>
.typography {
  margin: 0;
}

.typography--title {
  font-size: 2.8rem;
  line-height: 1.1;
  font-weight: 800;
}

.typography--heading {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 800;
}

.typography--subheading {
  font-size: 1.25rem;
  font-weight: 700;
}

.typography--body {
  font-size: 1rem;
}

.typography--caption {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

@media (min-width: 768px) {
  .typography--title {
    font-size: 4.5rem;
  }
}
</style>