<template>

  <!-- =====================================================
       DESIGN SYSTEM HEADER
  ====================================================== -->

  <section class="ds-header">

    <div class="container">

      <span class="ds-eyebrow">
        DESIGN SYSTEM
      </span>

      <h1>
        Pangasinan Heritage
      </h1>

      <p>
        A visual and component reference for the
        Pangasinan Heritage academic prototype.
      </p>

    </div>

  </section>


  <!-- =====================================================
       DESIGN SYSTEM CONTENT
  ====================================================== -->

  <main class="ds-main">

    <div class="container">


      <!-- =================================================
           01 — DESIGN PRINCIPLES
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            01
          </span>

          <div>

            <span class="section-eyebrow">
              FOUNDATION
            </span>

            <h2>
              Design Principles
            </h2>

            <p>
              The interface is designed to present
              Pangasinan's heritage in a clear,
              accessible, and visually consistent way.
            </p>

          </div>

        </div>


        <div class="principles-grid">

          <article class="principle-card">

            <div class="principle-icon">

              <AppIcon
                name="eye"
                :size="22"
              />

            </div>

            <h3>
              Clear
            </h3>

            <p>
              Information is organized using clear
              headings, descriptions, categories,
              and visual hierarchy.
            </p>

          </article>


          <article class="principle-card">

            <div class="principle-icon">

              <AppIcon
                name="smartphone"
                :size="22"
              />

            </div>

            <h3>
              Responsive
            </h3>

            <p>
              Layouts adapt to desktop, tablet,
              and mobile screen sizes.
            </p>

          </article>


          <article class="principle-card">

            <div class="principle-icon">

              <AppIcon
                name="layers"
                :size="22"
              />

            </div>

            <h3>
              Consistent
            </h3>

            <p>
              Reusable components, spacing,
              typography, colors, and interaction
              patterns are used throughout the site.
            </p>

          </article>


          <article class="principle-card">

            <div class="principle-icon">

              <AppIcon
                name="heart"
                :size="22"
              />

            </div>

            <h3>
              Accessible
            </h3>

            <p>
              The interface uses readable typography,
              sufficient contrast, descriptive labels,
              and keyboard-friendly controls.
            </p>

          </article>

        </div>

      </section>


      <!-- =================================================
           02 — ATOMIC DESIGN METHODOLOGY
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            02
          </span>

          <div>

            <span class="section-eyebrow">
              COMPONENT ARCHITECTURE
            </span>

            <h2>
              Atomic Design
            </h2>

            <p>
              The interface follows Brad Frost's Atomic
              Design methodology by organizing reusable
              interface elements into atoms, molecules,
              organisms, templates, and pages.
            </p>

          </div>

        </div>


        <div class="atomic-grid">

          <!-- ATOMS -->

          <article class="atomic-card">

            <div class="atomic-number">
              01
            </div>

            <div class="atomic-icon">

              <AppIcon
                name="circle"
                :size="23"
              />

            </div>

            <span class="atomic-label">
              ATOMS
            </span>

            <h3>
              Basic Elements
            </h3>

            <p>
              The smallest reusable interface elements
              that cannot be broken down without losing
              their individual purpose.
            </p>

            <div class="atomic-examples">

              <span>AppButton</span>
              <span>AppIcon</span>
              <span>AppImage</span>
              <span>AppTypography</span>

            </div>

          </article>


          <!-- MOLECULES -->

          <article class="atomic-card">

            <div class="atomic-number">
              02
            </div>

            <div class="atomic-icon">

              <AppIcon
                name="layers"
                :size="23"
              />

            </div>

            <span class="atomic-label">
              MOLECULES
            </span>

            <h3>
              Component Groups
            </h3>

            <p>
              Small groups of atoms combined together
              to create functional and reusable interface
              components.
            </p>

            <div class="atomic-examples">

              <span>HeritageCard</span>
              <span>NavigationItem</span>
              <span>SearchForm</span>

            </div>

          </article>


          <!-- ORGANISMS -->

          <article class="atomic-card">

            <div class="atomic-number">
              03
            </div>

            <div class="atomic-icon">

              <AppIcon
                name="grid"
                :size="23"
              />

            </div>

            <span class="atomic-label">
              ORGANISMS
            </span>

            <h3>
              Complex Sections
            </h3>

            <p>
              More complex interface sections composed
              of multiple atoms and molecules working
              together as a functional unit.
            </p>

            <div class="atomic-examples">

              <span>HeaderNavigation</span>
              <span>HeritageGrid</span>

            </div>

          </article>


          

        </div>


        <div class="atomic-flow">

          <span>Atoms</span>

          <AppIcon
            name="arrow-right"
            :size="16"
          />

          <span>Molecules</span>

          <AppIcon
            name="arrow-right"
            :size="16"
          />

          <span>Organisms</span>
          
        </div>

      </section>


      <!-- =================================================
           03 — COLOR SYSTEM
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            03
          </span>

          <div>

            <span class="section-eyebrow">
              VISUAL FOUNDATION
            </span>

            <h2>
              Color System
            </h2>

            <p>
              The color palette reflects the natural,
              cultural, and historical character of
              Pangasinan.
            </p>

          </div>

        </div>


        <div class="color-grid">

          <div class="color-card">

            <div class="color-preview color-primary-dark"></div>

            <div class="color-info">

              <strong>
                Primary Dark
              </strong>

              <span>
                --color-primary-dark
              </span>

              <small>
                Main navigation, footer, and dark backgrounds.
              </small>

            </div>

          </div>


          <div class="color-card">

            <div class="color-preview color-primary"></div>

            <div class="color-info">

              <strong>
                Primary
              </strong>

              <span>
                --color-primary
              </span>

              <small>
                Buttons, links, icons, and active states.
              </small>

            </div>

          </div>


          <div class="color-card">

            <div class="color-preview color-accent"></div>

            <div class="color-info">

              <strong>
                Accent
              </strong>

              <span>
                --color-accent
              </span>

              <small>
                Highlights, emphasis, and decorative details.
              </small>

            </div>

          </div>


          <div class="color-card">

            <div class="color-preview color-white"></div>

            <div class="color-info">

              <strong>
                White
              </strong>

              <span>
                --color-white
              </span>

              <small>
                Cards, page backgrounds, and light surfaces.
              </small>

            </div>

          </div>

        </div>

      </section>


      <!-- =================================================
           04 — TYPOGRAPHY
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            04
          </span>

          <div>

            <span class="section-eyebrow">
              TYPOGRAPHY
            </span>

            <h2>
              Type System
            </h2>

            <p>
              Typography establishes hierarchy while
              keeping content readable and approachable.
            </p>

          </div>

        </div>


        <div class="type-showcase">

          <div class="type-row">

            <div class="type-meta">

              <strong>
                Display
              </strong>

              <span>
                Heading Font
              </span>

            </div>

            <div class="type-example display-text">
              Pangasinan Heritage
            </div>

          </div>


          <div class="type-row">

            <div class="type-meta">

              <strong>
                Heading 1
              </strong>

              <span>
                --font-heading
              </span>

            </div>

            <div class="type-example heading-one">
              Explore Our Heritage
            </div>

          </div>


          <div class="type-row">

            <div class="type-meta">

              <strong>
                Heading 2
              </strong>

              <span>
                --font-heading
              </span>

            </div>

            <div class="type-example heading-two">
              Historical Heritage
            </div>

          </div>


          <div class="type-row">

            <div class="type-meta">

              <strong>
                Body
              </strong>

              <span>
                --font-body
              </span>

            </div>

            <div class="type-example body-text">
              Discover the history, culture, traditions,
              and natural heritage of Pangasinan.
            </div>

          </div>


          <div class="type-row">

            <div class="type-meta">

              <strong>
                Eyebrow
              </strong>

              <span>
                Uppercase / Letter Spacing
              </span>

            </div>

            <div class="type-example eyebrow-text">
              DISCOVER PANGASINAN
            </div>

          </div>

        </div>

      </section>


      <!-- =================================================
           05 — HERITAGE CATEGORIES
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            05
          </span>

          <div>

            <span class="section-eyebrow">
              CONTENT
            </span>

            <h2>
              Heritage Categories
            </h2>

            <p>
              Heritage content is organized into four
              primary categories.
            </p>

          </div>

        </div>


        <div class="category-grid">

          <div class="category-item">

            <div class="category-icon natural">

              <AppIcon
                name="leaf"
                :size="24"
              />

            </div>

            <div>

              <strong>
                Natural Heritage
              </strong>

              <p>
                Islands, coastlines, rivers,
                springs, and natural landscapes.
              </p>

            </div>

          </div>


          <div class="category-item">

            <div class="category-icon architectural">

              <AppIcon
                name="landmark"
                :size="24"
              />

            </div>

            <div>

              <strong>
                Architectural Heritage
              </strong>

              <p>
                Historic buildings, structures,
                landmarks, and architectural sites.
              </p>

            </div>

          </div>


          <div class="category-item">

            <div class="category-icon religious">

              <AppIcon
                name="church"
                :size="24"
              />

            </div>

            <div>

              <strong>
                Religious Heritage
              </strong>

              <p>
                Churches, places of worship,
                traditions, and religious landmarks.
              </p>

            </div>

          </div>


          <div class="category-item">

            <div class="category-icon historical">

              <AppIcon
                name="history"
                :size="24"
              />

            </div>

            <div>

              <strong>
                Historical Heritage
              </strong>

              <p>
                Historic places, monuments, museums,
                and sites connected to Pangasinan's past.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- =================================================
     06 — BUTTONS
================================================== -->

<section class="ds-section">

  <div class="section-heading">

    <span class="section-number">
      06
    </span>

    <div>

      <span class="section-eyebrow">
        ATOMS
      </span>

      <h2>
        Buttons
      </h2>

      <p>
        Buttons provide clear actions and guide
        visitors through the heritage platform.
      </p>

    </div>

  </div>


  <div class="component-demo">

    <!-- HERO BUTTON AREA -->

    <div class="button-preview">

      <AppButton
        variant="hero-primary"
        size="small"
      >

        <span>
          Explore Heritage
        </span>

        <AppIcon
          name="arrow-right"
          :size="17"
        />

      </AppButton>


      <AppButton
        variant="hero-secondary"
        size="large"
      >

        View Destination

      </AppButton>


      <AppButton
        variant="ghost"
        size="large"
      >

        Explore

        <AppIcon
          name="arrow-right"
          :size="17"
        />

      </AppButton>

    </div>

  </div>

</section>


      <!-- =================================================
           07 — CARDS
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            07
          </span>

          <div>

            <span class="section-eyebrow">
              MOLECULES
            </span>

            <h2>
              Cards
            </h2>

            <p>
              Cards combine typography, icons, images,
              and actions into reusable content components.
            </p>

          </div>

        </div>


        <div class="card-demo">


          <!-- CATEGORY CARD -->

          <article class="demo-card category-demo-card">

            <div class="demo-card-icon">

              <AppIcon
                name="landmark"
                :size="23"
              />

            </div>

            <h3>
              Architectural Heritage
            </h3>

            <p>
              Explore historic buildings, landmarks,
              structures, and architectural sites.
            </p>

            <span class="demo-link">

              Explore

              <AppIcon
                name="arrow-right"
                :size="15"
              />

            </span>

          </article>


          <!-- HERITAGE CARD -->

          <article class="demo-card heritage-demo-card">

            <div class="demo-image">
              Heritage Site
            </div>

            <div class="demo-card-body">

              <span class="demo-location">

                <AppIcon
                  name="map-pin"
                  :size="13"
                />

                Lingayen

              </span>

              <h3>
                Casa Real
              </h3>

              <p>
                A historic landmark associated with
                Pangasinan's administrative heritage.
              </p>

              <span class="demo-link">

                Explore

                <AppIcon
                  name="arrow-right"
                  :size="15"
                />

              </span>

            </div>

          </article>

        </div>

      </section>


      <!-- =================================================
           08 — HERITAGE DETAIL STRUCTURE
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            08
          </span>

          <div>

            <span class="section-eyebrow">
              ORGANISMS
            </span>

            <h2>
              Heritage Detail
            </h2>

            <p>
              Each heritage site provides structured
              information to help visitors understand
              its cultural and historical value.
            </p>

          </div>

        </div>


        <div class="detail-structure">

          <div class="detail-item">

            <span class="detail-number">
              01
            </span>

            <div>

              <strong>
                About This Place
              </strong>

              <p>
                Provides an overview of the site,
                its location, characteristics,
                and visitor experience.
              </p>

            </div>

          </div>


          <div class="detail-item">

            <span class="detail-number">
              02
            </span>

            <div>

              <strong>
                History
              </strong>

              <p>
                Presents the historical background
                and development of the heritage site.
              </p>

            </div>

          </div>


          <div class="detail-item">

            <span class="detail-number">
              03
            </span>

            <div>

              <strong>
                Heritage Significance
              </strong>

              <p>
                Explains why the site is important
                to Pangasinan's cultural, natural,
                religious, architectural, or historical heritage.
              </p>

            </div>

          </div>


          <div class="detail-item">

            <span class="detail-number">
              04
            </span>

            <div>

              <strong>
                Highlights
              </strong>

              <p>
                Lists notable features, activities,
                landmarks, or characteristics associated
                with the site.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- =================================================
           09 — ICONOGRAPHY
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            09
          </span>

          <div>

            <span class="section-eyebrow">
              ATOMS
            </span>

            <h2>
              Icons
            </h2>

            <p>
              Icons provide visual cues while keeping
              navigation and content easy to understand.
            </p>

          </div>

        </div>


        <div class="icon-grid">

          <div class="icon-item">

            <AppIcon
              name="home"
              :size="24"
            />

            <span>
              Home
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="leaf"
              :size="24"
            />

            <span>
              Natural
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="landmark"
              :size="24"
            />

            <span>
              Architectural
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="church"
              :size="24"
            />

            <span>
              Religious
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="history"
              :size="24"
            />

            <span>
              Historical
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="map-pin"
              :size="24"
            />  

            <span>
              Location
            </span>

          </div>


          <div class="icon-item">

            <AppIcon
              name="search"
              :size="24"
            />

            <span>
              Search
            </span>

          </div>


          

        </div>

      </section>


      <!-- =================================================
           10 — SPACING SYSTEM
      ================================================== -->

      <section class="ds-section">

        <div class="section-heading">

          <span class="section-number">
            10
          </span>

          <div>

            <span class="section-eyebrow">
              LAYOUT
            </span>

            <h2>
              Spacing System
            </h2>

            <p>
              Consistent spacing creates visual rhythm
              and keeps content organized.
            </p>

          </div>

        </div>


        <div class="spacing-list">

          <div class="spacing-row">

            <span>
              8px
            </span>

            <div class="spacing-bar spacing-8"></div>

            <small>
              Small gaps
            </small>

          </div>


          <div class="spacing-row">

            <span>
              16px
            </span>

            <div class="spacing-bar spacing-16"></div>

            <small>
              Component spacing
            </small>

          </div>


          <div class="spacing-row">

            <span>
              24px
            </span>

            <div class="spacing-bar spacing-24"></div>

            <small>
              Card spacing
            </small>

          </div>


          <div class="spacing-row">

            <span>
              40px
            </span>

            <div class="spacing-bar spacing-40"></div>

            <small>
              Content spacing
            </small>

          </div>


          <div class="spacing-row">

            <span>
              64px
            </span>

            <div class="spacing-bar spacing-64"></div>

            <small>
              Section spacing
            </small>

          </div>

        </div>

      </section>


      <!-- =================================================
           11 — ACADEMIC NOTE
      ================================================== -->

      <section class="ds-section last-section">

        <div class="academic-note">

          <div class="academic-icon">

            <AppIcon
              name="info"
              :size="22"
            />

          </div>

          <div>

            <h2>
              Academic Prototype
            </h2>

            <p>
              The Pangasinan Heritage website is an
              academic prototype created for educational
              purposes. It demonstrates interface design,
              heritage presentation, information
              architecture, Atomic Design methodology,
              and reusable component development.
            </p>

          </div>

        </div>

      </section>

    </div>

  </main>

</template>


<script setup>

import AppIcon
  from '../components/atoms/AppIcon.vue'

import AppButton
  from '../components/atoms/AppButton.vue'

</script>


<style scoped>

/* =====================================================
   DESIGN SYSTEM
===================================================== */


/* =====================================================
   HEADER
===================================================== */

.ds-header {

  position: relative;

  padding: 95px 0 90px;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      var(--color-primary-dark),
      var(--color-primary)
    );

  color: var(--color-white);

}


.ds-header::after {

  content: '';

  position: absolute;

  width: 430px;

  height: 430px;

  right: -150px;

  top: -180px;

  border:
    1px solid
    rgba(255,255,255,0.14);

  border-radius: 50%;

}


.ds-header .container {

  position: relative;

  z-index: 2;

}


.ds-eyebrow {

  display: block;

  margin-bottom: 18px;

  color: var(--color-accent);

  font-size: 0.72rem;

  font-weight: 800;

  letter-spacing: 0.18em;

}


.ds-header h1 {

  max-width: 800px;

  margin: 0 0 18px;

  font-family: var(--font-heading);

  font-size: clamp(
    3rem,
    6vw,
    5rem
  );

  font-weight: 600;

  line-height: 1;

  letter-spacing: -0.035em;

}


.ds-header p {

  max-width: 680px;

  margin: 0;

  color:
    rgba(255,255,255,0.82);

  font-size: 1rem;

  line-height: 1.7;

}


/* =====================================================
   MAIN
===================================================== */

.ds-main {

  background:
    var(--color-white);

}


.ds-section {

  padding: 85px 0;

  border-bottom:
    1px solid
    var(--color-border);

}


.last-section {

  border-bottom: none;

}


/* =====================================================
   SECTION HEADING
===================================================== */

.section-heading {

  display: grid;

  grid-template-columns: 70px 1fr;

  gap: 25px;

  margin-bottom: 45px;

}


.section-number {

  color:
    var(--color-primary);

  font-family:
    var(--font-heading);

  font-size: 1.25rem;

  font-weight: 700;

}


.section-eyebrow {

  display: block;

  margin-bottom: 12px;

  color:
    var(--color-primary);

  font-size: 0.7rem;

  font-weight: 800;

  letter-spacing: 0.17em;

}


.section-heading h2 {

  margin: 0 0 12px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: clamp(
    2.2rem,
    4vw,
    3.4rem
  );

  font-weight: 600;

  line-height: 1.05;

  letter-spacing: -0.03em;

}


.section-heading p {

  max-width: 680px;

  margin: 0;

  color:
    var(--color-text-secondary);

  line-height: 1.7;

}


/* =====================================================
   DESIGN PRINCIPLES
===================================================== */

.principles-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;

}


.principle-card {

  padding: 28px;

  border:
    1px solid
    var(--color-border);

  border-radius: 14px;

  background:
    var(--color-white);

}


.principle-icon {

  width: 48px;

  height: 48px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 20px;

  border-radius: 50%;

  background: #edf5f2;

  color:
    var(--color-primary);

}


.principle-card h3 {

  margin: 0 0 10px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.25rem;

}


.principle-card p {

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.65;

}


/* =====================================================
   ATOMIC DESIGN
===================================================== */

.atomic-grid {

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 20px;

}


.atomic-card {

  position: relative;

  padding: 30px;

  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius: 16px;

  background:
    var(--color-white);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

}


.atomic-card:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 12px 30px
    rgba(15,45,38,0.07);

}


.atomic-card-wide {

  grid-column:
    1 / -1;

}


.atomic-number {

  position: absolute;

  top: 25px;

  right: 28px;

  color:
    rgba(0,100,88,0.10);

  font-family:
    var(--font-heading);

  font-size: 3rem;

  font-weight: 600;

  line-height: 1;

}


.atomic-icon {

  width: 50px;

  height: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 20px;

  border-radius: 50%;

  background:
    #edf5f2;

  color:
    var(--color-primary);

}


.atomic-label {

  display: block;

  margin-bottom: 8px;

  color:
    var(--color-primary);

  font-size: 0.68rem;

  font-weight: 800;

  letter-spacing: 0.16em;

}


.atomic-card h3 {

  margin: 0 0 10px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.35rem;

}


.atomic-card p {

  max-width: 600px;

  margin: 0 0 20px;

  color:
    var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.65;

}


.atomic-examples {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

}


.atomic-examples span {

  padding:
    7px 10px;

  border:
    1px solid
    var(--color-border);

  border-radius: 6px;

  background:
    #f7f9f8;

  color:
    var(--color-text-secondary);

  font-family: monospace;

  font-size: 0.72rem;

}


.atomic-flow {

  display: flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 35px;

  color:
    var(--color-primary);

}


.atomic-flow span {

  padding:
    9px 14px;

  border:
    1px solid
    rgba(0,100,88,0.18);

  border-radius: 7px;

  background:
    #f3f8f6;

  font-size: 0.78rem;

  font-weight: 800;

}


/* =====================================================
   COLOR SYSTEM
===================================================== */

.color-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;

}


.color-card {

  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius: 14px;

  background:
    var(--color-white);

}


.color-preview {

  height: 130px;

}


.color-primary-dark {

  background:
    var(--color-primary-dark);

}


.color-primary {

  background:
    var(--color-primary);

}


.color-accent {

  background:
    var(--color-accent);

}


.color-white {

  background:
    #ffffff;

  border-bottom:
    1px solid
    var(--color-border);

}


.color-info {

  padding: 18px;

}


.color-info strong,
.color-info span,
.color-info small {

  display: block;

}


.color-info strong {

  margin-bottom: 5px;

  color:
    var(--color-text);

}


.color-info span {

  margin-bottom: 7px;

  color:
    var(--color-primary);

  font-family: monospace;

  font-size: 0.75rem;

}


.color-info small {

  color:
    var(--color-text-secondary);

  font-size: 0.76rem;

  line-height: 1.5;

}


/* =====================================================
   TYPOGRAPHY
===================================================== */

.type-showcase {

  border-top:
    1px solid
    var(--color-border);

}


.type-row {

  display: grid;

  grid-template-columns:
    210px 1fr;

  gap: 30px;

  align-items: center;

  padding: 28px 0;

  border-bottom:
    1px solid
    var(--color-border);

}


.type-meta strong,
.type-meta span {

  display: block;

}


.type-meta strong {

  margin-bottom: 5px;

  color:
    var(--color-text);

}


.type-meta span {

  color:
    var(--color-text-secondary);

  font-size: 0.75rem;

}


.type-example {

  color:
    var(--color-text);

}


.display-text {

  font-family:
    var(--font-heading);

  font-size: 2.7rem;

  font-weight: 600;

}


.heading-one {

  font-family:
    var(--font-heading);

  font-size: 2.2rem;

  font-weight: 600;

}


.heading-two {

  font-family:
    var(--font-heading);

  font-size: 1.7rem;

  font-weight: 600;

}


.body-text {

  max-width: 650px;

  font-family:
    var(--font-body);

  font-size: 1rem;

  line-height: 1.7;

}


.eyebrow-text {

  color:
    var(--color-primary);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.18em;

}


/* =====================================================
   CATEGORIES
===================================================== */

.category-grid {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 20px;

}


.category-item {

  display: flex;

  align-items: flex-start;

  gap: 18px;

  padding: 25px;

  border:
    1px solid
    var(--color-border);

  border-radius: 14px;

}


.category-icon {

  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

}


.category-icon.natural {

  background: #edf5f2;

  color:
    var(--color-primary);

}


.category-icon.architectural {

  background: #f1f0ea;

  color: #6f6651;

}


.category-icon.religious {

  background: #f5f0eb;

  color: #795c43;

}


.category-icon.historical {

  background: #eef0f4;

  color: #4e5d72;

}


.category-item strong {

  display: block;

  margin-bottom: 7px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.15rem;

}


.category-item p {

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 0.86rem;

  line-height: 1.6;

}


/* =====================================================
   BUTTONS
===================================================== */

.component-demo {

  display: flex;

  flex-direction: column;

  gap: 24px;

  padding: 35px;

  border-radius: 16px;

  background:
    #99b299;

}


/* HERO BUTTON AREA */

.button-preview {

  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 14px;

  padding: 30px;

  border-radius: 12px;

}


/* STANDARD BUTTON AREA */

.standard-button-preview {

  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 14px;

}


/* =====================================================
   CARDS
===================================================== */

.card-demo {

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 24px;

}


.demo-card {

  overflow: hidden;

  border:
    1px solid
    var(--color-border);

  border-radius: 16px;

  background:
    var(--color-white);

  box-shadow:
    0 5px 20px
    rgba(15,45,38,0.06);

}


.category-demo-card {

  padding-top: 1px;

}


.demo-card-icon {

  width: 50px;

  height: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin: 25px;

  border-radius: 50%;

  background:
    #edf5f2;

  color:
    var(--color-primary);

}


.demo-card h3 {

  margin:
    0 25px 10px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.3rem;

}


.demo-card p {

  margin:
    0 25px 20px;

  color:
    var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.6;

}


.demo-link {

  display: inline-flex;

  align-items: center;

  gap: 7px;

  margin:
    0 25px 25px;

  color:
    var(--color-primary);

  font-size: 0.85rem;

  font-weight: 800;

}


.demo-image {

  height: 190px;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    linear-gradient(
      135deg,
      var(--color-primary-dark),
      var(--color-primary)
    );

  color:
    rgba(255,255,255,0.7);

  font-family:
    var(--font-heading);

  font-size: 1.1rem;

}


.demo-card-body {

  padding-top: 20px;

}


.demo-card-body h3 {

  margin-top: 8px;

}


.demo-card-body p {

  margin-bottom: 18px;

}


.demo-location {

  display: inline-flex;

  align-items: center;

  gap: 5px;

  margin-left: 25px;

  color:
    var(--color-primary);

  font-size: 0.75rem;

  font-weight: 700;

}


/* =====================================================
   DETAIL STRUCTURE
===================================================== */

.detail-structure {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 20px;

}


.detail-item {

  display: flex;

  gap: 18px;

  padding: 25px;

  border:
    1px solid
    var(--color-border);

  border-radius: 14px;

}


.detail-number {

  color:
    var(--color-primary);

  font-family:
    var(--font-heading);

  font-size: 1.1rem;

  font-weight: 700;

}


.detail-item strong {

  display: block;

  margin-bottom: 7px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.15rem;

}


.detail-item p {

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 0.86rem;

  line-height: 1.6;

}


/* =====================================================
   ICONS
===================================================== */

.icon-grid {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 15px;

}


.icon-item {

  min-height: 100px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 10px;

  border:
    1px solid
    var(--color-border);

  border-radius: 12px;

  color:
    var(--color-primary);

}


.icon-item span {

  color:
    var(--color-text-secondary);

  font-size: 0.78rem;

  font-weight: 700;

}


/* =====================================================
   SPACING
===================================================== */

.spacing-list {

  max-width: 850px;

}


.spacing-row {

  display: grid;

  grid-template-columns:
    60px 1fr 150px;

  gap: 20px;

  align-items: center;

  min-height: 60px;

  border-bottom:
    1px solid
    var(--color-border);

}


.spacing-row > span {

  color:
    var(--color-primary);

  font-family: monospace;

  font-weight: 700;

}


.spacing-bar {

  height: 10px;

  border-radius: 50px;

  background:
    var(--color-primary);

}


.spacing-8 {
  width: 8px;
}


.spacing-16 {
  width: 16px;
}


.spacing-24 {
  width: 24px;
}


.spacing-40 {
  width: 40px;
}


.spacing-64 {
  width: 64px;
}


.spacing-row small {

  color:
    var(--color-text-secondary);

}


/* =====================================================
   ACADEMIC NOTE
===================================================== */

.academic-note {

  display: flex;

  align-items: flex-start;

  gap: 20px;

  padding: 30px;

  border:
    1px solid
    rgba(0,100,88,0.15);

  border-radius: 16px;

  background:
    #f3f8f6;

}


.academic-icon {

  width: 48px;

  height: 48px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    var(--color-primary);

  color:
    var(--color-white);

}


.academic-note h2 {

  margin:
    0 0 8px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.3rem;

}


.academic-note p {

  max-width: 800px;

  margin: 0;

  color:
    var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.7;

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {

  .principles-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .color-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .icon-grid {

    grid-template-columns:
      repeat(4, 1fr);

  }


  .atomic-grid {

    grid-template-columns:
      1fr 1fr;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 700px) {

  .ds-header {

    padding:
      70px 0;

  }


  .ds-header h1 {

    font-size:
      3rem;

  }


  .ds-section {

    padding:
      60px 0;

  }


  .section-heading {

    grid-template-columns:
      1fr;

    gap:
      8px;

    margin-bottom:
      30px;

  }


  .principles-grid,
  .color-grid,
  .category-grid,
  .card-demo,
  .detail-structure,
  .atomic-grid {

    grid-template-columns:
      1fr;

  }


  .atomic-card-wide {

    grid-column:
      auto;

  }


  .type-row {

    grid-template-columns:
      1fr;

    gap:
      15px;

  }


  .display-text {

    font-size:
      2rem;

  }


  .heading-one {

    font-size:
      1.8rem;

  }


  .heading-two {

    font-size:
      1.5rem;

  }


  .icon-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .spacing-row {

    grid-template-columns:
      55px 1fr;

    gap:
      15px;

  }


  .spacing-row small {

    display:
      none;

  }


  .component-demo {

    align-items:
      stretch;

  }


  .button-preview {

    flex-direction:
      column;

    align-items:
      stretch;

  }


  .button-preview :deep(.app-button) {

    width:
      100%;

  }


  .standard-button-preview {

    flex-direction:
      column;

    align-items:
      stretch;

  }


  .standard-button-preview :deep(.app-button) {

    width:
      100%;

  }


  .atomic-flow {

    justify-content:
      flex-start;

  }


  .academic-note {

    flex-direction:
      column;

  }

}

</style>