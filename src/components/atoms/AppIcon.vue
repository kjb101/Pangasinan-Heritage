<template>
  <span
    class="app-icon"
    :aria-hidden="decorative"
    :aria-label="decorative ? undefined : label"
    role="img"
  >
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >

      <!-- HOME -->
      <template v-if="name === 'home'">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </template>

      <!-- MENU -->
      <template v-else-if="name === 'menu'">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </template>

      <!-- CLOSE -->
      <template v-else-if="name === 'close'">
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </template>

      <!-- SEARCH -->
      <template v-else-if="name === 'search'">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </template>

      <!-- MAP PIN -->
      <template v-else-if="name === 'map-pin'">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </template>

      <!-- LEAF -->
      <template v-else-if="name === 'leaf'">
        <path
          d="M20 4C10 4 5 8 5 14c0 3.3 2.7 6 6 6 6 0 9-6 9-16Z"
        />
        <path d="M4 20c3-5 7-8 12-10" />
      </template>

      <!-- LANDMARK -->
      <template v-else-if="name === 'landmark'">
        <path d="M3 21h18" />
        <path d="M5 18h14" />
        <path d="M4 10h16" />
        <path d="M5 10l7-6 7 6" />
        <path d="M7 10v8" />
        <path d="M12 10v8" />
        <path d="M17 10v8" />
      </template>

      <!-- CHURCH -->
      <template v-else-if="name === 'church'">
        <path d="M4 21h16" />
        <path d="M6 21V10l6-4 6 4v11" />
        <path d="M9 21v-5h6v5" />
        <path d="M12 3v6" />
        <path d="M9 6h6" />
      </template>

      <!-- SCROLL / DOCUMENT -->
      <template v-else-if="name === 'scroll'">
        <path d="M8 4h10v16H8a4 4 0 1 1 0-8h10" />
        <path d="M8 4a4 4 0 1 0 0 8h10" />
        <path d="M11 8h4" />
        <path d="M11 16h4" />
      </template>

      <!-- BOOK -->
      <template v-else-if="name === 'book'">
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
        />
        <path d="M4 5.5V21" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </template>

      <!-- HISTORY -->
      <template v-else-if="name === 'history'">
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v6h6" />
        <path d="M12 7v5l3 2" />
      </template>

      <!-- COMPASS -->
      <template v-else-if="name === 'compass'">
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
      </template>

      <!-- INFO -->
      <template v-else-if="name === 'info'">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6" />
        <path d="M12 7h.01" />
      </template>

      <!-- MAIL -->
      <template v-else-if="name === 'mail'">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </template>

      <!-- ARROW RIGHT -->
      <template v-else-if="name === 'arrow-right'">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </template>

      <!-- ARROW LEFT -->
      <template v-else-if="name === 'arrow-left'">
        <path d="M19 12H5" />
        <path d="M11 18l-6-6 6-6" />
      </template>

      <!-- EXTERNAL LINK -->
      <template v-else-if="name === 'external'">
        <path d="M14 4h6v6" />
        <path d="M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </template>

      <!-- DEFAULT -->
      <template v-else>
        <circle cx="12" cy="12" r="8" />
      </template>

    </svg>
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'info'
  },

  size: {
    type: [Number, String],
    default: 20
  },

  strokeWidth: {
    type: [Number, String],
    default: 1.8
  },

  label: {
    type: String,
    default: ''
  },

  decorative: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  line-height: 0;
}

.app-icon svg {
  display: block;
}
</style>