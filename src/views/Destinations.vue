<template>

  <!-- ================= PAGE HEADER ================= -->

  <section class="page-header">

    <div class="container page-header-content">

      <span class="eyebrow">
        HERITAGE CATEGORIES
      </span>

      <h1>
        Explore Destinations
      </h1>

      <p>
        Discover the different forms of heritage that shape
        Pangasinan's identity, stories, traditions, and landscapes.
      </p>

    </div>

  </section>


  <!-- ================= DESTINATION CATEGORIES ================= -->

  <section class="section destinations-section">

    <div class="container">

      <div class="section-intro">

        <span class="eyebrow dark">
          UNDERSTAND THE HERITAGE
        </span>

        <h2>
          Explore Pangasinan's Heritage
        </h2>

        <p>
          Explore the natural, architectural, religious,
          and historical heritage found across Pangasinan.
        </p>

      </div>


      <!-- ================= CARDS ================= -->

      <div class="destination-grid">

        <article
          v-for="destination in destinations"
          :key="destination.title"
          class="destination-card"
        >

          <!-- ICON -->

          <div
            class="destination-icon"
            aria-hidden="true"
          >

            <AppIcon
              :name="destination.icon"
              :size="24"
            />

          </div>


          <!-- LABEL -->

          <span class="destination-label">
            {{ destination.label }}
          </span>


          <!-- TITLE -->

          <h2>
            {{ destination.title }}
          </h2>


          <!-- DESCRIPTION -->

          <p class="destination-description">
            {{ destination.description }}
          </p>


          <!-- EXPLORE -->

          <RouterLink
            :to="destination.link"
            class="explore-link"
          >

            <span>
              Explore
            </span>

            <AppIcon
              name="arrow-right"
              :size="15"
            />

          </RouterLink>

        </article>

      </div>

    </div>

  </section>

</template>


<script setup>

import AppIcon
  from '../components/atoms/AppIcon.vue'


/* =====================================================
   DESTINATIONS
===================================================== */

const destinations = [

  {
    title: 'Natural Heritage',

    label: 'NATURE',

    icon: 'leaf',

    description:
      'Explore islands, rivers, beaches, springs, caves, and other natural landscapes that make Pangasinan unique.',

    link: '/heritage?category=Natural%20Heritage'
  },


  {
    title: 'Architectural Heritage',

    label: 'ARCHITECTURE',

    icon: 'landmark',

    description:
      'Discover historic structures, landmarks, lighthouses, and buildings that reflect Pangasinan’s past.',

    link: '/heritage?category=Architectural%20Heritage'
  },


  {
    title: 'Religious Heritage',

    label: 'FAITH & TRADITION',

    icon: 'church',

    description:
      'Visit churches, basilicas, and religious landmarks that continue to shape the traditions of Pangasinan communities.',

    link: '/heritage?category=Religious%20Heritage'
  },


  {
    title: 'Historical Heritage',

    label: 'HISTORY',

    icon: 'history',

    description:
      'Learn about important historical places, monuments, museums, and sites connected to Pangasinan’s past.',

    link: '/heritage?category=Historical%20Heritage'
  }

]

</script>


<style scoped>

/* =====================================================
   PAGE HEADER
===================================================== */

.page-header {

  position: relative;

  overflow: hidden;

  padding: 60px 0;

  background:
    linear-gradient(
      120deg,
      var(--color-primary-dark),
      var(--color-primary)
    );

  color: var(--color-white);

}


/* =====================================================
   HEADER DECORATION
===================================================== */

.page-header::after {

  content: '';

  position: absolute;

  width: 280px;

  height: 280px;

  right: -120px;

  bottom: -160px;

  border:
    1px solid
    rgba(255,255,255,0.12);

  border-radius: 50%;

}


/* =====================================================
   HEADER CONTENT
===================================================== */

.page-header-content {

  position: relative;

  z-index: 1;

}


/* =====================================================
   EYEBROW
===================================================== */

.page-header .eyebrow {

  display: block;

  margin-bottom: 10px;

  color: var(--color-accent);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.18em;

}


/* =====================================================
   HEADER TITLE
===================================================== */

.page-header h1 {

  position: relative;

  z-index: 1;

  margin: 0;

  color: var(--color-white);

  font-family: var(--font-heading);

  font-size: clamp(
    2.4rem,
    5vw,
    3.5rem
  );

  line-height: 1.05;

}


/* =====================================================
   HEADER DESCRIPTION
===================================================== */

.page-header p {

  position: relative;

  z-index: 1;

  max-width: 650px;

  margin-top: 14px;

  color:
    rgba(255,255,255,0.82);

  font-size: 1rem;

  line-height: 1.6;

}


/* =====================================================
   DESTINATIONS SECTION
===================================================== */

.destinations-section {

  padding-top: 65px;

  padding-bottom: 80px;

}


/* =====================================================
   SECTION INTRO
===================================================== */

.section-intro {

  max-width: 700px;

  margin: 0 auto 38px;

  text-align: center;

}


.section-intro .eyebrow {

  color: var(--color-primary);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.18em;

}


.section-intro h2 {

  margin-top: 10px;

  color: var(--color-text);

  font-size: clamp(
    1.9rem,
    4vw,
    2.7rem
  );

  line-height: 1.15;

}


.section-intro p {

  max-width: 600px;

  margin: 12px auto 0;

  color: var(--color-text-secondary);

  font-size: 0.95rem;

  line-height: 1.6;

}


/* =====================================================
   GRID
===================================================== */

.destination-grid {

  display: grid;

  grid-template-columns: 1fr;

  gap: 18px;

  max-width: 1000px;

  margin: 0 auto;

}


/* =====================================================
   CARD
===================================================== */

.destination-card {

  position: relative;

  display: flex;

  flex-direction: column;

  min-height: 285px;

  padding: 24px;

  background: var(--color-surface);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

}


.destination-card:hover {

  transform: translateY(-4px);

  border-color: var(--color-primary);

  box-shadow: var(--shadow-md);

}


/* =====================================================
   ICON
===================================================== */

.destination-icon {

  display: flex;

  align-items: center;

  justify-content: center;

  width: 52px;

  height: 52px;

  margin-bottom: 18px;

  background: var(--color-primary-light);

  border-radius: var(--radius-md);

  color: var(--color-primary);

}


/* =====================================================
   LABEL
===================================================== */

.destination-label {

  display: inline-block;

  width: fit-content;

  margin-bottom: 7px;

  color: var(--color-primary);

  font-size: 0.65rem;

  font-weight: 700;

  letter-spacing: 0.12em;

}


/* =====================================================
   TITLE
===================================================== */

.destination-card h2 {

  margin: 0 0 10px;

  color: var(--color-text);

  font-size: clamp(
    1.55rem,
    3vw,
    2rem
  );

  line-height: 1.1;

}


/* =====================================================
   DESCRIPTION
===================================================== */

.destination-description {

  margin: 0;

  color: var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.6;

}


/* =====================================================
   EXPLORE LINK
===================================================== */

.explore-link {

  display: inline-flex;

  align-items: center;

  gap: 7px;

  width: fit-content;

  margin-top: auto;

  padding-top: 18px;

  color: var(--color-primary);

  font-size: 0.85rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    gap 0.2s ease,
    color 0.2s ease;

}


.explore-link:hover {

  gap: 11px;

  color: var(--color-primary-dark);

}


/* =====================================================
   TABLET
===================================================== */

@media (min-width: 700px) {

  .destination-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .destination-card {

    min-height: 270px;

  }

}


/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 1024px) {

  .page-header {

    padding: 65px 0;

  }


  .destinations-section {

    padding-top: 75px;

    padding-bottom: 90px;

  }


  .section-intro {

    margin-bottom: 42px;

  }


  .destination-grid {

    grid-template-columns:
      repeat(2, 1fr);

    gap: 20px;

    max-width: 1000px;

  }


  .destination-card {

    min-height: 285px;

    padding: 26px;

  }


  .destination-icon {

    width: 54px;

    height: 54px;

    margin-bottom: 18px;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .page-header {

    padding: 50px 0;

  }


  .page-header h1 {

    font-size: 2.4rem;

  }


  .destinations-section {

    padding-top: 55px;

    padding-bottom: 65px;

  }


  .section-intro {

    margin-bottom: 30px;

  }


  .section-intro h2 {

    font-size: 2rem;

  }


  .destination-grid {

    grid-template-columns: 1fr;

    gap: 16px;

  }


  .destination-card {

    min-height: 250px;

    padding: 22px;

  }


  .destination-icon {

    width: 48px;

    height: 48px;

    margin-bottom: 16px;

  }


  .destination-card h2 {

    font-size: 1.55rem;

  }


  .destination-description {

    font-size: 0.86rem;

  }


  .explore-link {

    padding-top: 16px;

  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .destination-card,
  .explore-link {

    transition: none;

  }

}

</style>