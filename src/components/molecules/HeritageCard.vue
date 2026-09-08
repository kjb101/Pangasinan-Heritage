<template>
  <article class="heritage-card">

    <!-- IMAGE -->

    <div class="heritage-card__image">

      <AppImage
        :src="heritage.image"
        :alt="`${heritage.name}, ${heritage.location}`"
        width="800"
        height="500"
      />

      <span class="category">
        {{ heritage.category }}
      </span>

    </div>


    <!-- CONTENT -->

    <div class="heritage-card__content">

      <AppTypography
        tag="h3"
        variant="subheading"
      >
        {{ heritage.name }}
      </AppTypography>


      <!-- LOCATION -->

      <p class="location">

        <AppIcon
          name="map-pin"
          :size="16"
        />

        <span>
          {{ heritage.location }}
        </span>

      </p>


      <!-- DESCRIPTION -->

      <p class="description">
        {{ heritage.description }}
      </p>


      <!-- LEARN MORE -->

      <RouterLink
        :to="`/heritage/${heritage.slug}`"
        class="explore-link"
      >

        <span>
          Learn More
        </span>

        <AppIcon
          name="arrow-right"
          :size="17"
        />

      </RouterLink>

    </div>

  </article>
</template>

<script setup>
import AppIcon from '../atoms/AppIcon.vue'
import AppImage from '../atoms/AppImage.vue'
import AppTypography from '../atoms/AppTypography.vue'

defineProps({
  heritage: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.heritage-card {
  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}


.heritage-card:hover {
  transform: translateY(-5px);

  box-shadow: var(--shadow-md);
}


/* IMAGE */

.heritage-card__image {
  position: relative;

  height: 220px;

  overflow: hidden;
}


.heritage-card__image :deep(img) {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform 0.4s ease;
}


.heritage-card:hover
.heritage-card__image :deep(img) {
  transform: scale(1.04);
}


/* CATEGORY */

.category {
  position: absolute;

  left: 14px;
  bottom: 14px;

  display: inline-flex;
  align-items: center;

  padding: 6px 11px;

  background: var(--color-primary);

  color: var(--color-white);

  border-radius: 999px;

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 0.04em;

  text-transform: uppercase;
}


/* CONTENT */

.heritage-card__content {
  padding: 22px;
}


/* LOCATION */

.location {
  display: flex;
  align-items: center;

  gap: 6px;

  margin-top: 7px;

  color: var(--color-primary);

  font-size: 0.9rem;

  font-weight: 600;
}


/* DESCRIPTION */

.description {
  margin: 13px 0 19px;

  color: var(--color-text-secondary);

  font-size: 0.95rem;

  line-height: 1.65;
}


/* LINK */

.explore-link {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: var(--color-primary);

  font-size: 0.9rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    gap 0.2s ease,
    color 0.2s ease;
}


.explore-link:hover {
  gap: 12px;

  color: var(--color-primary-dark);
}


.explore-link:focus-visible {
  outline: 3px solid var(--color-accent);

  outline-offset: 4px;

  border-radius: var(--radius-sm);
}


@media (min-width: 768px) {

  .heritage-card__image {
    height: 240px;
  }

}
</style>