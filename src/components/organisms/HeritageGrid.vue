<template>

  <div
    v-if="items.length"
    class="heritage-grid"
  >

    <HeritageCard
      v-for="item in items"
      :key="item.id"
      :heritage="item"
    />

  </div>


  <div
    v-else
    class="no-results"
  >

    <h2>
      No heritage sites found
    </h2>

    <p>
      Try another search term.
    </p>

  </div>

</template>


<script setup>
import HeritageCard from '../molecules/HeritageCard.vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>


<style scoped>
.heritage-grid {
  display: grid;

  grid-template-columns: 1fr;

  gap: 24px;
}


.no-results {
  padding: 50px 20px;

  text-align: center;

  color: var(--color-text-light);
}


.no-results h2 {
  margin-bottom: 8px;

  color: var(--color-text);
}


@media (min-width: 700px) {
  .heritage-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (min-width: 1024px) {
  .heritage-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>