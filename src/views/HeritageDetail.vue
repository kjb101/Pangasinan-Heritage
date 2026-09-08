<template>

  <!-- =====================================================
       HERITAGE DETAIL
  ====================================================== -->

  <main v-if="heritage" class="detail-page">


    <!-- =====================================================
         HERO
    ====================================================== -->

    <section class="detail-hero">

      <div class="container">

        <span class="detail-category">
          {{ heritage.category }}
        </span>

        <h1>
          {{ heritage.name }}
        </h1>

        <p class="detail-location">

          <AppIcon
            name="map-pin"
            :size="16"
          />

          <span>
            {{ heritage.location }}, Pangasinan
          </span>

        </p>

      </div>

    </section>



    <!-- =====================================================
         MAIN INFORMATION
    ====================================================== -->

    <section class="detail-section">

      <div class="container detail-grid">


        <!-- IMAGE -->

        <div class="detail-image">

          <img
            :src="heritage.image"
            :alt="`${heritage.name} in ${heritage.location}, Pangasinan`"
          />

        </div>



        <!-- INFORMATION -->

        <article class="detail-info">

          <span class="eyebrow dark">
            ABOUT THIS PLACE
          </span>

          <h2>
            Discover {{ heritage.name }}
          </h2>

          <p class="main-description">
            {{ heritage.description }}
          </p>



          <!-- LOCATION -->

          <div class="location-box">

            <span class="location-icon">

              <AppIcon
                name="map-pin"
                :size="20"
              />

            </span>

            <div>

              <strong>
                Location
              </strong>

              <span>
                {{ heritage.location }}, Pangasinan
              </span>

            </div>

          </div>

        </article>

      </div>

    </section>



    <!-- =====================================================
         HISTORY
    ====================================================== -->

    <section
      v-if="heritage.history"
      class="information-section"
    >

      <div class="container information-container">

        <span class="eyebrow dark">
          HISTORY
        </span>

        <h2>
          A Place with a Story
        </h2>

        <p>
          {{ heritage.history }}
        </p>

      </div>

    </section>



    <!-- =====================================================
         SIGNIFICANCE
    ====================================================== -->

    <section
      v-if="heritage.significance"
      class="information-section alternate"
    >

      <div class="container information-container">

        <span class="eyebrow dark">
          HERITAGE SIGNIFICANCE
        </span>

        <h2>
          Why It Matters
        </h2>

        <p>
          {{ heritage.significance }}
        </p>

      </div>

    </section>



    <!-- =====================================================
         HIGHLIGHTS
    ====================================================== -->

    <section
      v-if="heritage.highlights?.length"
      class="highlights-section"
    >

      <div class="container">


        <!-- SECTION HEADING -->

        <div class="section-heading">

          <span class="eyebrow dark">
            EXPERIENCE
          </span>

          <h2>
            Highlights
          </h2>

          <p>
            Discover what makes this destination special.
          </p>

        </div>



        <!-- HIGHLIGHTS -->

        <div class="highlights-grid">

          <div
            v-for="(highlight, index) in heritage.highlights"
            :key="index"
            class="highlight-card"
          >

            <span class="highlight-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <h3>
              {{ highlight }}
            </h3>

          </div>

        </div>

      </div>

    </section>



    <!-- =====================================================
         BACK TO HERITAGE
    ====================================================== -->

    <section class="back-section">

      <div class="container">

        <router-link
          to="/heritage"
          class="back-button"
        >

          ← Back to Heritage

        </router-link>

      </div>

    </section>

  </main>



  <!-- =====================================================
       NOT FOUND
  ====================================================== -->

  <main
    v-else
    class="not-found"
  >

    <div class="container">

      <span class="eyebrow dark">
        404
      </span>

      <h1>
        Heritage Site Not Found
      </h1>

      <p>
        The heritage site you're looking for does not
        exist or may have been moved.
      </p>

      <router-link
        to="/heritage"
        class="back-button"
      >

        ← Back to Heritage

      </router-link>

    </div>

  </main>

</template>



<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { heritageSites } from '../data/heritage'

import AppIcon
  from '../components/atoms/AppIcon.vue'


/* =====================================================
   ROUTE
===================================================== */

const route = useRoute()



/* =====================================================
   CURRENT HERITAGE
===================================================== */

const heritage = computed(() => {

  return heritageSites.find(
    site => site.slug === route.params.slug
  )

})

</script>



<style scoped>

/* =====================================================
   DETAIL HERO
===================================================== */

.detail-hero {

  position: relative;

  overflow: hidden;

  padding: 65px 0;

  background:
    linear-gradient(
      120deg,
      var(--color-primary-dark),
      var(--color-primary)
    );

  color: var(--color-white);

}


/* =====================================================
   DECORATIVE CIRCLE
===================================================== */

.detail-hero::after {

  content: '';

  position: absolute;

  width: 300px;

  height: 300px;

  right: -150px;

  bottom: -180px;

  border:
    1px solid
    rgba(255,255,255,0.14);

  border-radius: 50%;

}


/* =====================================================
   CATEGORY
===================================================== */

.detail-category {

  position: relative;

  z-index: 1;

  display: inline-flex;

  align-items: center;

  margin-bottom: 14px;

  padding: 7px 14px;

  border:
    1px solid
    rgba(255,255,255,0.25);

  border-radius: 999px;

  background:
    rgba(255,255,255,0.10);

  color:
    var(--color-white);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

}


/* =====================================================
   HERO TITLE
===================================================== */

.detail-hero h1 {

  position: relative;

  z-index: 1;

  max-width: 900px;

  color:
    var(--color-white);

  font-size:
    clamp(
      2.5rem,
      5vw,
      4rem
    );

  line-height: 1.05;

}


/* =====================================================
   HERO LOCATION
===================================================== */

.detail-location {

  position: relative;

  z-index: 1;

  display: inline-flex;

  align-items: center;

  gap: 7px;

  margin-top: 14px;

  color:
    rgba(255,255,255,0.86);

  font-size: 1rem;

}


.detail-location :deep(svg) {

  flex-shrink: 0;

}


/* =====================================================
   MAIN INFORMATION
===================================================== */

.detail-section {

  padding: 75px 0;

}


.detail-grid {

  display: grid;

  grid-template-columns: 1fr;

  gap: 45px;

  align-items: center;

}


/* =====================================================
   IMAGE
===================================================== */

.detail-image {

  width: 100%;

  overflow: hidden;

  border-radius:
    var(--radius-lg);

  background:
    var(--color-surface);

  box-shadow:
    var(--shadow-md);

}


.detail-image img {

  display: block;

  width: 100%;

  height: 340px;

  object-fit: cover;

}


/* =====================================================
   INFORMATION
===================================================== */

.detail-info {

  max-width: 620px;

}


.detail-info h2 {

  margin-top: 12px;

  color:
    var(--color-text);

  font-size:
    clamp(
      2rem,
      4vw,
      3rem
    );

  line-height: 1.1;

}


.main-description {

  margin-top: 18px;

  color:
    var(--color-text-secondary);

  font-size: 1rem;

  line-height: 1.8;

}


/* =====================================================
   LOCATION BOX
===================================================== */

.location-box {

  display: flex;

  align-items: center;

  gap: 14px;

  margin-top: 26px;

  padding: 16px 18px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);

  background:
    var(--color-surface);

}


.location-icon {

  display: flex;

  align-items: center;

  justify-content: center;

  width: 42px;

  height: 42px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    var(--color-primary-light);

  color:
    var(--color-primary);

}


.location-icon :deep(svg) {

  display: block;

}


/* =====================================================
   LOCATION TEXT
===================================================== */

.location-box div {

  display: flex;

  flex-direction: column;

  gap: 2px;

}


.location-box strong {

  color:
    var(--color-text);

  font-size: 0.82rem;

}


.location-box span:last-child {

  color:
    var(--color-text-secondary);

  font-size: 0.9rem;

}


/* =====================================================
   INFORMATION SECTIONS
===================================================== */

.information-section {

  padding: 60px 0;

  background:
    var(--color-background);

}


.information-section.alternate {

  background:
    var(--color-surface);

}


.information-container {

  max-width: 850px;

}


.information-container h2 {

  margin-top: 8px;

  color:
    var(--color-text);

  font-size:
    clamp(
      2rem,
      4vw,
      3rem
    );

  line-height: 1.15;

}


.information-container p {

  margin-top: 16px;

  color:
    var(--color-text-secondary);

  font-size: 1rem;

  line-height: 1.8;

}


/* =====================================================
   HIGHLIGHTS
===================================================== */

.highlights-section {

  padding: 75px 0;

  background:
    var(--color-background);

}


.section-heading {

  max-width: 650px;

  margin:
    0 auto 42px;

  text-align: center;

}


.section-heading h2 {

  margin-top: 10px;

  color:
    var(--color-text);

}


.section-heading p {

  margin-top: 12px;

  color:
    var(--color-text-secondary);

}


.highlights-grid {

  display: grid;

  grid-template-columns: 1fr;

  gap: 16px;

}


.highlight-card {

  position: relative;

  padding: 24px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);

  background:
    var(--color-white);

  box-shadow:
    var(--shadow-sm);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

}


.highlight-card:hover {

  transform:
    translateY(-3px);

  box-shadow:
    var(--shadow-md);

}


.highlight-number {

  display: block;

  margin-bottom: 16px;

  color:
    var(--color-accent);

  font-size: 0.8rem;

  font-weight: 700;

  letter-spacing: 0.12em;

}


.highlight-card h3 {

  color:
    var(--color-text);

  font-family:
    var(--font-body);

  font-size: 1rem;

  font-weight: 700;

  line-height: 1.5;

}


/* =====================================================
   BACK SECTION
===================================================== */

.back-section {

  padding:
    0 0 70px;

}


.back-button {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding:
    12px 20px;

  border:
    1px solid
    var(--color-primary);

  border-radius:
    var(--radius-sm);

  background:
    var(--color-primary);

  color:
    var(--color-white);

  font-size: 0.9rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

}


.back-button:hover {

  background:
    var(--color-primary-dark);

  transform:
    translateY(-2px);

}


.back-button:focus-visible {

  outline:
    3px solid
    var(--color-accent);

  outline-offset: 4px;

}


/* =====================================================
   NOT FOUND
===================================================== */

.not-found {

  padding:
    120px 0;

  text-align: center;

}


.not-found h1 {

  margin-top: 12px;

  color:
    var(--color-text);

  font-size:
    clamp(
      2.2rem,
      6vw,
      4rem
    );

}


.not-found p {

  max-width: 550px;

  margin:
    18px auto 30px;

  color:
    var(--color-text-secondary);

}


/* =====================================================
   TABLET
===================================================== */

@media (min-width: 700px) {


  /* HERO */

  .detail-hero {

    padding:
      75px 0;

  }


  /* MAIN */

  .detail-section {

    padding:
      80px 0;

  }


  /* IMAGE */

  .detail-image img {

    height:
      420px;

  }


  /* INFORMATION */

  .information-section {

    padding:
      65px 0;

  }


  /* HIGHLIGHTS */

  .highlights-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }

}


/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 1024px) {


  /* HERO */

  .detail-hero {

    padding:
      75px 0;

  }


  /* MAIN TWO-COLUMN LAYOUT */

  .detail-grid {

    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(0, 0.9fr);

    gap:
      65px;

  }


  /* IMAGE */

  .detail-image img {

    height:
      460px;

  }


  /* INFORMATION */

  .information-section {

    padding:
      70px 0;

  }


  /* HIGHLIGHTS */

  .highlights-section {

    padding:
      80px 0;

  }


  .highlights-grid {

    grid-template-columns:
      repeat(4, 1fr);

  }


  /* BACK */

  .back-section {

    padding-bottom:
      80px;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {


  .detail-hero {

    padding:
      50px 0;

  }


  .detail-hero h1 {

    font-size:
      2.35rem;

  }


  .detail-location {

    font-size:
      0.9rem;

  }


  .detail-section {

    padding:
      55px 0;

  }


  .detail-grid {

    gap:
      32px;

  }


  .detail-image img {

    height:
      280px;

  }


  .information-section {

    padding:
      50px 0;

  }


  .information-container h2 {

    font-size:
      2rem;

  }


  .highlights-section {

    padding:
      60px 0;

  }


  .back-section {

    padding-bottom:
      60px;

  }


  .detail-category {

    font-size:
      0.65rem;

  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .highlight-card,
  .back-button {

    transition:
      none;

  }

}

</style>