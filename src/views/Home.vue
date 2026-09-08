<template>

  <!-- =========================================
       HOME HERO
  ========================================== -->

  <section class="hero">

    <div class="hero-background"></div>

    <div class="hero-overlay"></div>

    <div class="hero-circle"></div>

    <div class="container hero-container">

      <div class="hero-content">

        <p class="hero-eyebrow">
          Discover Northern Luzon
        </p>

        <h1 class="hero-title">
          Explore the Heritage
          <span>of Pangasinan</span>
        </h1>

        <p class="hero-description">
          Discover centuries of history, vibrant culture,
          breathtaking landscapes, and meaningful stories
          across Pangasinan.
        </p>

        <div class="hero-actions">

          <RouterLink
            to="/heritage"
            class="hero-button hero-button-primary"
          >
            <span>Explore Heritage</span>

            <AppIcon
              name="arrow-right"
              :size="17"
            />
          </RouterLink>

          <RouterLink
            to="/destinations"
            class="hero-button hero-button-secondary"
          >
            <span>View Destination</span>
          </RouterLink>

        </div>

      </div>


      <!-- =========================================
           HERITAGE FEATURES
      ========================================== -->

      <div class="hero-features">

        <!-- NATURAL -->

        <div class="hero-feature">

          <div class="hero-feature-number">
            01
          </div>

          <div class="hero-feature-content">

            <strong class="hero-feature-title">
              Natural Beauty
            </strong>

            <span class="hero-feature-description">
              Islands & coastlines
            </span>

          </div>

        </div>


        <!-- ARCHITECTURAL -->

        <div class="hero-feature">

          <div class="hero-feature-number">
            02
          </div>

          <div class="hero-feature-content">

            <strong class="hero-feature-title">
              Architectural Heritage
            </strong>

            <span class="hero-feature-description">
              Buildings & landmarks
            </span>

          </div>

        </div>


        <!-- RELIGIOUS -->

        <div class="hero-feature">

          <div class="hero-feature-number">
            03
          </div>

          <div class="hero-feature-content">

            <strong class="hero-feature-title">
              Religious Heritage
            </strong>

            <span class="hero-feature-description">
              Churches & traditions
            </span>

          </div>

        </div>

        <div class="hero-feature">

          <div class="hero-feature-number">
            04
          </div>

          <div class="hero-feature-content">

            <strong class="hero-feature-title">
              Historical Heritage
            </strong>

            <span class="hero-feature-description">
              Places & stories
            </span>

          </div>

        </div>

      </div>

    </div>


    <!-- =========================================
         SCROLL INDICATOR
    ========================================== -->

    <div class="scroll-indicator">

      <AppIcon
        name="chevron-down"
        :size="18"
      />

    </div>

  </section>


  <!-- =========================================
       INTRODUCTION
  ========================================== -->

  <section class="intro-section">

    <div class="container">

      <div class="intro-header">

        <p class="section-eyebrow">
          Discover Pangasinan
        </p>

        <h2>
          Explore Our Heritage
        </h2>

        <p class="intro-description">
          Discover the natural beauty, architectural landmarks,
          religious heritage, and historical places that
          make Pangasinan unique.
        </p>

      </div>


      <!-- =========================================
           CATEGORY CARDS
      ========================================== -->

      <div class="heritage-cards">


        <!-- =====================================
             NATURAL HERITAGE
        ====================================== -->

        <RouterLink
          to="/heritage?category=Natural%20Heritage"
          class="heritage-card"
        >

          <div class="heritage-card-icon">

            <AppIcon
              name="leaf"
              :size="24"
            />

          </div>

          <h3>
            Natural Heritage
          </h3>

          <p>
            Discover Pangasinan's islands,
            coastlines, rivers, mountains,
            springs, and natural landscapes.
          </p>

          <span class="card-link">

            Explore

            <AppIcon
              name="arrow-right"
              :size="16"
            />

          </span>

        </RouterLink>


        <!-- =====================================
             ARCHITECTURAL HERITAGE
        ====================================== -->

        <RouterLink
          to="/heritage?category=Architectural%20Heritage"
          class="heritage-card"
        >

          <div class="heritage-card-icon">

            <AppIcon
              name="landmark"
              :size="24"
            />

          </div>

          <h3>
            Architectural Heritage
          </h3>

          <p>
            Explore historic buildings, landmarks,
            structures, and architectural sites that
            reflect Pangasinan's heritage.
          </p>

          <span class="card-link">

            Explore

            <AppIcon
              name="arrow-right"
              :size="16"
            />

          </span>

        </RouterLink>


        <!-- =====================================
             RELIGIOUS HERITAGE
        ====================================== -->

        <RouterLink
          to="/heritage?category=Religious%20Heritage"
          class="heritage-card"
        >

          <div class="heritage-card-icon">

            <AppIcon
              name="church"
              :size="24"
            />

          </div>

          <h3>
            Religious Heritage
          </h3>

          <p>
            Visit historic churches and
            religious landmarks that continue
            to shape Pangasinan communities.
          </p>

          <span class="card-link">

            Explore

            <AppIcon
              name="arrow-right"
              :size="16"
            />

          </span>

        </RouterLink>


        <!-- =====================================
             HISTORICAL HERITAGE
        ====================================== -->

        <RouterLink
          to="/heritage?category=Historical%20Heritage"
          class="heritage-card"
        >

          <div class="heritage-card-icon">

            <AppIcon
              name="history"
              :size="24"
            />

          </div>

          <h3>
            Historical Heritage
          </h3>

          <p>
            Learn about important places,
            monuments, museums, and sites
            connected to Pangasinan's past.
          </p>

          <span class="card-link">

            Explore

            <AppIcon
              name="arrow-right"
              :size="16"
            />

          </span>

        </RouterLink>

      </div>

    </div>

  </section>

</template>


<script setup>

import AppIcon
  from '../components/atoms/AppIcon.vue'

</script>


<style scoped>

/* =====================================================
   HOME PAGE TYPOGRAPHY
   =====================================================

   HEADINGS
   var(--font-heading)

   BODY / UI
   var(--font-body)

   This keeps the Home page typography
   consistent with the rest of the website.
===================================================== */


/* =========================================
   HERO
========================================= */

.hero {

  position: relative;

  min-height: calc(100vh - 72px);

  display: flex;

  align-items: center;

  overflow: hidden;

  isolation: isolate;

}


/* =========================================
   HERO BACKGROUND
========================================= */

.hero-background {

  position: absolute;

  inset: 0;

  z-index: -3;

  background-image:
    url('/images/hundred-islands.jpg');

  background-size: cover;

  background-position: center;

  background-repeat: no-repeat;

  transform: scale(1.02);

}


/* =========================================
   HERO OVERLAY
========================================= */

.hero-overlay {

  position: absolute;

  inset: 0;

  z-index: -2;

  background:
    linear-gradient(
      90deg,
      rgba(0, 59, 52, 0.94) 0%,
      rgba(0, 59, 52, 0.78) 35%,
      rgba(0, 59, 52, 0.35) 70%,
      rgba(0, 59, 52, 0.20) 100%
    );

}


/* =========================================
   DECORATIVE CIRCLE
========================================= */

.hero-circle {

  position: absolute;

  z-index: -1;

  width: 520px;

  height: 520px;

  right: -90px;

  top: 50%;

  transform: translateY(-35%);

  border: 1px solid rgba(255,255,255,0.18);

  border-radius: 50%;

  pointer-events: none;

}


/* =========================================
   HERO CONTAINER
========================================= */

.hero-container {

  position: relative;

  width: 100%;

  min-height: calc(100vh - 72px);

  display: flex;

  align-items: center;

}


/* =========================================
   HERO CONTENT
========================================= */

.hero-content {

  position: relative;

  z-index: 3;

  max-width: 720px;

  padding: 90px 0 170px;

}


/* =========================================
   HERO EYEBROW
   BODY FONT
========================================= */

.hero-eyebrow {

  margin: 0 0 22px;

  color: var(--color-accent);

  font-family: var(--font-body);

  font-size: 0.78rem;

  font-weight: 800;

  letter-spacing: 0.16em;

  line-height: 1.4;

  text-transform: uppercase;

}


/* =========================================
   HERO TITLE
   HEADING FONT
========================================= */

.hero-title {

  max-width: 720px;

  margin: 0;

  color: var(--color-white);

  font-family: var(--font-heading);

  font-size: clamp(
    3.4rem,
    6vw,
    5.7rem
  );

  font-weight: 600;

  line-height: 0.98;

  letter-spacing: -0.035em;

}


.hero-title span {

  display: block;

  color: var(--color-accent);

}


/* =========================================
   HERO DESCRIPTION
   BODY FONT
========================================= */

.hero-description {

  max-width: 620px;

  margin: 28px 0 34px;

  color: rgba(255,255,255,0.92);

  font-family: var(--font-body);

  font-size: 1rem;

  font-weight: 400;

  line-height: 1.7;

}


/* =========================================
   HERO ACTIONS
========================================= */

.hero-actions {

  display: flex;

  align-items: center;

  gap: 14px;

  flex-wrap: wrap;

}


/* =========================================
   HERO BUTTON
   BODY FONT
========================================= */

.hero-button {

  min-height: 50px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 0 21px;

  border-radius: 9px;

  font-family: var(--font-body);

  font-size: 0.9rem;

  font-weight: 700;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

}


.hero-button-primary {

  background: var(--color-accent);

  color: #10251f;

}


.hero-button-primary:hover {

  transform: translateY(-2px);

}


.hero-button-secondary {

  border: 1px solid rgba(255,255,255,0.65);

  background: rgba(255,255,255,0.04);

  color: var(--color-white);

}


.hero-button-secondary:hover {

  background: rgba(255,255,255,0.12);

  border-color: var(--color-white);

  transform: translateY(-2px);

}


/* =========================================
   HERO FEATURES
========================================= */

.hero-features {

  position: absolute;

  z-index: 5;

  right: 5%;

  bottom: 75px;

  display: flex;

  align-items: stretch;

  padding: 16px 8px;

  border: 1px solid rgba(255,255,255,0.20);

  border-radius: 14px;

  background: rgba(0,65,58,0.88);

  box-shadow:
    0 15px 40px rgba(0,0,0,0.22);

  backdrop-filter: blur(12px);

}


.hero-feature {

  min-width: 175px;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 6px 16px;

}


.hero-feature + .hero-feature {

  border-left:
    1px solid rgba(255,255,255,0.22);

}


/* =========================================
   FEATURE NUMBER
   HEADING FONT
========================================= */

.hero-feature-number {

  flex-shrink: 0;

  color: var(--color-accent);

  font-family: var(--font-heading);

  font-size: 1.15rem;

  font-weight: 700;

  line-height: 1;

}


/* =========================================
   FEATURE CONTENT
========================================= */

.hero-feature-content {

  display: flex;

  flex-direction: column;

  gap: 4px;

}


/* =========================================
   FEATURE TITLE
   BODY FONT
========================================= */

.hero-feature-title {

  color: var(--color-white);

  font-family: var(--font-body);

  font-size: 0.78rem;

  font-weight: 700;

  line-height: 1.2;

  white-space: nowrap;

}


/* =========================================
   FEATURE DESCRIPTION
   BODY FONT
========================================= */

.hero-feature-description {

  color: rgba(255,255,255,0.72);

  font-family: var(--font-body);

  font-size: 0.68rem;

  font-weight: 400;

  line-height: 1.3;

  white-space: nowrap;

}


/* =========================================
   SCROLL INDICATOR
========================================= */

.scroll-indicator {

  position: absolute;

  z-index: 6;

  bottom: -18px;

  left: 50%;

  transform: translateX(-50%);

  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: var(--color-white);

  color: var(--color-primary-dark);

  box-shadow:
    0 5px 20px rgba(0,0,0,0.18);

}


/* =========================================
   INTRO SECTION
========================================= */

.intro-section {

  padding: 105px 0 100px;

  background: var(--color-white);

}


/* =========================================
   INTRO HEADER
========================================= */

.intro-header {

  max-width: 760px;

  margin: 0 auto 55px;

  text-align: center;

}


/* =========================================
   SECTION EYEBROW
   BODY FONT
========================================= */

.section-eyebrow {

  margin: 0 0 18px;

  color: var(--color-primary);

  font-family: var(--font-body);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.18em;

  text-transform: uppercase;

}


/* =========================================
   INTRO TITLE
   HEADING FONT
========================================= */

.intro-header h2 {

  margin: 0;

  color: var(--color-text);

  font-family: var(--font-heading);

  font-size: clamp(
    2.5rem,
    4vw,
    4rem
  );

  font-weight: 600;

  line-height: 1.05;

  letter-spacing: -0.035em;

}


/* =========================================
   INTRO DESCRIPTION
   BODY FONT
========================================= */

.intro-description {

  max-width: 650px;

  margin: 20px auto 0;

  color: var(--color-text-secondary);

  font-family: var(--font-body);

  font-size: 1rem;

  font-weight: 400;

  line-height: 1.7;

}


/* =========================================
   HERITAGE CARDS
========================================= */

.heritage-cards {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 22px;

}


/* =========================================
   CARD
========================================= */

.heritage-card {

  display: flex;

  flex-direction: column;

  min-height: 330px;

  padding: 30px;

  border: 1px solid var(--color-border);

  border-radius: 14px;

  background: var(--color-white);

  color: inherit;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

}


.heritage-card:hover {

  transform: translateY(-5px);

  border-color:
    rgba(0,100,88,0.25);

  box-shadow:
    0 15px 35px
    rgba(0,45,40,0.09);

}


/* =========================================
   CARD ICON
========================================= */

.heritage-card-icon {

  width: 50px;

  height: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 22px;

  border-radius: 50%;

  background: #edf5f2;

  color: var(--color-primary);

}


/* =========================================
   CARD TITLE
   HEADING FONT
========================================= */

.heritage-card h3 {

  margin: 0 0 10px;

  color: var(--color-text);

  font-family: var(--font-heading);

  font-size: 1.3rem;

  font-weight: 600;

  line-height: 1.2;

  letter-spacing: -0.02em;

}


/* =========================================
   CARD DESCRIPTION
   BODY FONT
========================================= */

.heritage-card p {

  margin: 0 0 24px;

  color: var(--color-text-secondary);

  font-family: var(--font-body);

  font-size: 0.9rem;

  font-weight: 400;

  line-height: 1.65;

}


/* =========================================
   CARD LINK
   BODY FONT
========================================= */

.card-link {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  margin-top: auto;

  color: var(--color-primary);

  font-family: var(--font-body);

  font-size: 0.85rem;

  font-weight: 700;

  transition:
    gap 0.2s ease;

}


.heritage-card:hover .card-link {

  gap: 12px;

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1100px) {

  .hero-features {

    right: 25px;

  }


  .hero-feature {

    min-width: 145px;

    padding: 6px 12px;

  }


  .hero-feature-title {

    font-size: 0.72rem;

  }


  .hero-feature-description {

    font-size: 0.64rem;

  }


  .heritage-cards {

    grid-template-columns:
      repeat(2, 1fr);

  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 767px) {

  .hero {

    min-height: auto;

  }


  .hero-container {

    min-height: auto;

    display: block;

  }


  .hero-content {

    padding: 75px 0 45px;

  }


  .hero-eyebrow {

    margin-bottom: 18px;

    font-size: 0.7rem;

  }


  .hero-title {

    font-size:
      clamp(
        3rem,
        13vw,
        4.2rem
      );

    line-height: 0.98;

  }


  .hero-description {

    margin: 22px 0 28px;

    font-size: 0.92rem;

  }


  .hero-actions {

    align-items: stretch;

    flex-direction: column;

  }


  .hero-button {

    width: 100%;

  }


  .hero-features {

    position: relative;

    right: auto;

    bottom: auto;

    left: auto;

    margin: 0 0 30px;

    flex-direction: column;

    gap: 0;

  }


  .hero-feature {

    width: 100%;

    min-width: 0;

    padding: 14px;

  }


  .hero-feature + .hero-feature {

    border-top:
      1px solid rgba(255,255,255,0.18);

    border-left: none;

  }


  .hero-feature-title,
  .hero-feature-description {

    white-space: normal;

  }


  .hero-circle {

    width: 350px;

    height: 350px;

    right: -180px;

  }


  .scroll-indicator {

    display: none;

  }


  /* =====================================
     INTRO
  ====================================== */

  .intro-section {

    padding: 75px 0;

  }


  .intro-header {

    margin-bottom: 35px;

  }


  .intro-header h2 {

    font-size: 2.5rem;

  }


  .heritage-cards {

    grid-template-columns: 1fr;

  }


  .heritage-card {

    min-height: auto;

    padding: 25px;

  }

}

</style>