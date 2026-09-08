<template>
  <header class="header">

    <div class="container header-inner">

      <!-- LOGO -->

      <RouterLink
        to="/"
        class="logo"
        aria-label="Pangasinan Heritage home"
        @click="closeMenu"
      >

        <span class="logo-mark">
          <AppIcon
            name="leaf"
            :size="22"
          />
        </span>

        <span class="logo-text">
          Pangasinan Heritage
        </span>

      </RouterLink>


      <!-- MOBILE MENU BUTTON -->

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >

        <AppIcon
          :name="menuOpen ? 'close' : 'menu'"
          :size="23"
        />

      </button>


      <!-- NAVIGATION -->

      <nav
        id="main-navigation"
        class="navigation"
        :class="{ 'navigation--open': menuOpen }"
        aria-label="Main navigation"
      >

        <NavigationItem
          label="Home"
          to="/"
          @click="closeMenu"
        />

        <NavigationItem
          label="Destinations"
          to="/destinations"
          @click="closeMenu"
        />

        <NavigationItem
          label="Heritage"
          to="/heritage"
          @click="closeMenu"
        />

        <NavigationItem
          label="About"
          to="/about"
          @click="closeMenu"
        />

      </nav>

    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

import AppIcon from '../atoms/AppIcon.vue'
import NavigationItem from '../molecules/NavigationItem.vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.97);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(12px);
}


.header-inner {
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* =================================
   LOGO
================================= */

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: var(--color-primary);

  text-decoration: none;
}


.logo-mark {
  width: 38px;
  height: 38px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: var(--color-primary-light);

  color: var(--color-primary);

  border-radius: 50%;
}


.logo-text {
  font-family: var(--font-body);

  font-size: 1.2rem;

  font-weight: 700;

  letter-spacing: -0.02em;
}


/* =================================
   MOBILE MENU
================================= */

.menu-button {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);

  border-radius: var(--radius-sm);

  background: var(--color-white);

  color: var(--color-primary-dark);

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}


.menu-button:hover {
  background: var(--color-primary-light);

  border-color: var(--color-primary-light);

  color: var(--color-primary);
}


/* =================================
   MOBILE NAVIGATION
================================= */

.navigation {
  display: none;

  position: absolute;

  top: 72px;
  left: 0;
  right: 0;

  padding: 12px 16px 16px;

  background: var(--color-white);

  border-bottom: 1px solid var(--color-border);

  box-shadow: var(--shadow-md);
}


.navigation--open {
  display: flex;

  flex-direction: column;

  gap: 4px;
}


.navigation :deep(a) {
  width: 100%;

  min-height: 44px;

  display: flex;
  align-items: center;

  padding: 12px 14px;

  border-radius: var(--radius-sm);

  color: var(--color-text);

  font-weight: 600;

  text-decoration: none;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}


.navigation :deep(a:hover) {
  background: var(--color-surface);

  color: var(--color-primary);
}


.navigation :deep(a.router-link-active) {
  background: var(--color-surface);

  color: var(--color-primary);
}


/* =================================
   DESKTOP
================================= */

@media (min-width: 768px) {

  .menu-button {
    display: none;
  }

  .navigation {
    position: static;

    display: flex;

    flex-direction: row;

    align-items: center;

    gap: 4px;

    padding: 0;

    background: transparent;

    border: none;

    box-shadow: none;
  }

  .navigation :deep(a) {
    width: auto;

    padding: 11px 14px;
  }

}
</style>