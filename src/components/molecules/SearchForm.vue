<template>
  <form
    class="search-form"
    @submit.prevent="submitSearch"
  >

    <label for="heritage-search">
      Search heritage sites
    </label>


    <div class="search-controls">

      <div class="input-wrapper">

        <AppIcon
          name="search"
          :size="18"
          class="search-icon"
        />

        <input
          id="heritage-search"
          v-model="searchQuery"
          type="search"
          placeholder="Search Pangasinan heritage..."
          autocomplete="off"
        />

      </div>


      <AppButton
        type="submit"
      >

        <AppIcon
          name="search"
          :size="17"
        />

        <span>
          Search
        </span>

      </AppButton>

    </div>

  </form>
</template>

<script setup>
import { ref } from 'vue'

import AppButton from '../atoms/AppButton.vue'
import AppIcon from '../atoms/AppIcon.vue'

const searchQuery = ref('')

const emit = defineEmits(['search'])

function submitSearch() {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
.search-form {
  width: 100%;

  max-width: 700px;

  margin: 0 auto 40px;
}


.search-form label {
  display: block;

  margin-bottom: 8px;

  color: var(--color-text);

  font-weight: 700;
}


.search-controls {
  display: flex;

  flex-direction: column;

  gap: 10px;
}


.input-wrapper {
  position: relative;

  flex: 1;
}


.search-icon {
  position: absolute;

  left: 15px;
  top: 50%;

  transform: translateY(-50%);

  color: var(--color-text-muted);

  pointer-events: none;
}


.search-form input {
  width: 100%;

  min-height: 48px;

  padding: 12px 16px 12px 44px;

  border: 2px solid var(--color-border);

  border-radius: var(--radius-md);

  background: var(--color-white);

  color: var(--color-text);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.search-form input::placeholder {
  color: var(--color-text-muted);
}


.search-form input:focus {
  outline: none;

  border-color: var(--color-primary);

  box-shadow: 0 0 0 4px var(--color-primary-light);
}


@media (min-width: 600px) {

  .search-controls {
    flex-direction: row;
  }

}
</style>