<template>
  <button
    class="app-button"
    :class="[
      `app-button--${variant}`,
      `app-button--${size}`
    ]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },

  size: {
    type: String,
    default: 'medium'
  },

  type: {
    type: String,
    default: 'button'
  },

  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>

/* =========================================
   BASE BUTTON
========================================= */

.app-button {
  min-height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 11px 18px;

  border-radius: var(--radius-sm);

  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;

  white-space: nowrap;
  text-decoration: none;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}


/* =========================================
   HOVER
========================================= */

.app-button:hover:not(:disabled) {
  transform: translateY(-2px);
}


/* =========================================
   ACTIVE
========================================= */

.app-button:active:not(:disabled) {
  transform: translateY(0);
}





/* =========================================
   SIZES
========================================= */

.app-button--small {
  min-height: 38px;

  padding: 8px 14px;

  font-size: 0.85rem;
}


.app-button--medium {
  min-height: 44px;

  padding: 11px 18px;

  font-size: 0.95rem;
}


.app-button--large {
  min-height: 50px;

  padding: 0 20px;

  font-size: 0.9rem;
}


/* =========================================
   PRIMARY
   Standard green button
========================================= */

.app-button--primary {
  background: var(--color-primary);

  color: var(--color-white);

  border: 1px solid var(--color-primary);
}


.app-button--primary:hover:not(:disabled) {
  background: var(--color-primary-dark);

  border-color: var(--color-primary-dark);
}


/* =========================================
   SECONDARY
========================================= */

.app-button--secondary {
  background: var(--color-surface);

  color: var(--color-primary);

  border: 1px solid var(--color-border);
}


.app-button--secondary:hover:not(:disabled) {
  background: var(--color-primary-light);

  border-color: var(--color-primary-light);
}



/* =========================================
   GHOST
   Explore ->
========================================= */

.app-button--ghost {
  background: transparent;

  color: var(--color-primary);

  border: 1px solid transparent;
}


.app-button--ghost:hover:not(:disabled) {
  background: var(--color-surface);
}


/* =========================================
   HERO PRIMARY
   Explore Heritage
========================================= */

.app-button--hero-primary {
  min-height: 50px;

  padding: 0 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  background: var(--color-accent);

  color: #10251f;

  border: 1px solid var(--color-accent);

  border-radius: 9px;

  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;

  cursor: pointer;
}


.app-button--hero-primary:hover:not(:disabled) {
  background: var(--color-accent-light);

  border-color: var(--color-accent-light);

  box-shadow: var(--shadow-sm);
}


/* =========================================
   HERO SECONDARY
   View Destination
========================================= */

.app-button--hero-secondary {
  min-height: 50px;

  padding: 0 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  background: rgba(255, 255, 255, 0.04);

  color: var(--color-white);

  border: 1px solid rgba(255, 255, 255, 0.65);

  border-radius: 9px;

  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;

  cursor: pointer;
}


.app-button--hero-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.10);

  border-color: var(--color-white);

  color: var(--color-white);
}


/* =========================================
   BACK
========================================= */

.app-button--back {
  background: transparent;

  color: var(--color-primary);

  border: 1px solid var(--color-border);
}


.app-button--back:hover:not(:disabled) {
  background: var(--color-surface);

  border-color: var(--color-primary);
}


/* =========================================
   DISABLED
========================================= */

.app-button:disabled {
  background: #b9c8c4;

  color: var(--color-white);

  border-color: #b9c8c4;

  cursor: not-allowed;

  opacity: 0.8;

  transform: none;
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 480px) {
  .app-button--large,
  .app-button--hero-primary,
  .app-button--hero-secondary {
    min-height: 48px;

    padding: 0 18px;

    font-size: 0.9rem;
  }
}

</style>