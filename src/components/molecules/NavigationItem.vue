<template>
  <RouterLink
    :to="to"
    class="navigation-item"
    :aria-current="$route.path === to ? 'page' : undefined"
    @click="$emit('click')"
  >
    {{ label }}
  </RouterLink>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  label: {
    type: String,
    required: true
  },

  to: {
    type: String,
    required: true
  }
})

defineEmits(['click'])

const $route = useRoute()
</script>

<style scoped>
.navigation-item {
  display: flex;
  align-items: center;

  min-height: 44px;

  padding: 10px 14px;

  border-radius: var(--radius-sm);

  color: var(--color-text);

  font-size: 0.95rem;

  font-weight: 600;

  text-decoration: none;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}


.navigation-item:hover {
  background: var(--color-surface);

  color: var(--color-primary);
}


.navigation-item.router-link-active {
  background: var(--color-surface);

  color: var(--color-primary);
}


@media (min-width: 768px) {

  .navigation-item {
    padding: 11px 14px;
  }

}
</style>