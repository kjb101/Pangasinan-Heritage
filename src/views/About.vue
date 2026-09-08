<template>

  <!-- =========================================
       PAGE HEADER
  ========================================== -->

  <section class="page-header">

    <div class="container page-header-content">

      <span class="eyebrow">
        ABOUT PANGASINAN
      </span>

      <h1>
        Discover Pangasinan's Heritage
      </h1>

      <p>
        Explore the culture, history, traditions, local identity,
        and natural places that make Pangasinan worth discovering.
      </p>

    </div>

  </section>


  <!-- =========================================
       THE HERITAGE OF PANGASINAN
  ========================================== -->

  <section class="section">

    <div class="container about-grid">

      <div class="about-copy">

        <span class="eyebrow dark">
          THE HERITAGE OF PANGASINAN
        </span>

        <h2>
          A heritage shaped by people, places, and stories.
        </h2>

        <p>
          Pangasinan is known for its rich cultural heritage,
          fascinating history, beautiful landscapes, and long-standing
          traditions. Its heritage can be experienced through the places
          people visit and through the customs, stories, food, language,
          arts, and everyday practices that continue within communities.
        </p>

        <p>
          From historic churches and cultural landmarks to beaches,
          islands, rivers, and scenic landscapes, the province offers
          many ways to understand how nature and community life have
          shaped its identity.
        </p>

        <p>
          This website brings these different sides together so visitors
          can explore Pangasinan not only as a collection of destinations,
          but also as a place with meaningful stories and living traditions.
        </p>

      </div>


      <!-- =========================================
           HERITAGE HIGHLIGHTS
      ========================================== -->

      <aside class="heritage-card">

        <span class="eyebrow dark">
          WHAT YOU CAN EXPLORE
        </span>

        <h2>
          Heritage Highlights
        </h2>

        <ul>

          <li>

            <strong>
              Culture & Traditions
            </strong>

            <span>
              Local customs, festivals, traditional practices,
              arts, and community celebrations.
            </span>

          </li>


          <li>

            <strong>
              History & Landmarks
            </strong>

            <span>
              Historical places, old churches, monuments,
              and landmarks connected to the province's story.
            </span>

          </li>


          <li>

            <strong>
              Food & Local Identity
            </strong>

            <span>
              Traditional dishes, delicacies, and local products
              that are part of everyday culture and identity.
            </span>

          </li>


          <li>

            <strong>
              Natural Heritage
            </strong>

            <span>
              Islands, beaches, rivers, springs, mountains,
              and other landscapes worth appreciating responsibly.
            </span>

          </li>

        </ul>

      </aside>

    </div>

  </section>


  <!-- =========================================
       WHY IT MATTERS
  ========================================== -->

  <section class="section why-section">

    <div class="container">

      <div class="section-heading-left">

        <span class="eyebrow dark">
          WHY IT MATTERS
        </span>

        <h2>
          Heritage connects the past, present, and future.
        </h2>

        <p>
          Learning about heritage helps people understand where stories,
          traditions, and places come from. It also encourages greater
          appreciation for the communities and environments that continue
          to give Pangasinan its character today.
        </p>

      </div>


      <div class="value-grid">

        <article class="value-card">

          <span>
            01
          </span>

          <h3>
            Remember
          </h3>

          <p>
            Keep local stories, landmarks, and traditions visible and
            meaningful for future generations.
          </p>

        </article>


        <article class="value-card">

          <span>
            02
          </span>

          <h3>
            Appreciate
          </h3>

          <p>
            Encourage visitors and residents to look beyond a place's
            appearance and understand the stories connected to it.
          </p>

        </article>


        <article class="value-card">

          <span>
            03
          </span>

          <h3>
            Protect
          </h3>

          <p>
            Promote responsible appreciation of cultural traditions,
            historical places, and natural environments.
          </p>

        </article>

      </div>

    </div>

  </section>


  <!-- =========================================
       ABOUT THE PLATFORM
  ========================================== -->

  <section class="section platform-section">

    <div class="container platform-grid">

      <div>

        <span class="eyebrow">
          ABOUT THIS PLATFORM
        </span>

        <h2>
          A digital space for discovering Pangasinan.
        </h2>

        <p>
          Pangasinan Heritage is an academic prototype created to present
          selected places and heritage themes through a clear, accessible,
          and mobile-friendly website experience.
        </p>

        <p>
          The platform organizes information into two main ways of exploring:
          <strong>Heritage</strong>, which introduces major heritage themes,
          and <strong>Places</strong>, where visitors can browse selected
          locations and learn more about them.
        </p>

      </div>


      <div class="platform-points">

        <div>

          <strong>
            Heritage
          </strong>

          <span>
            Understand the themes and forms of heritage found in Pangasinan.
          </span>

        </div>


        <div>

          <strong>
            Places
          </strong>

          <span>
            Browse selected locations and explore their descriptions,
            history, and significance.
          </span>

        </div>


        <div>

          <strong>
            Responsible Discovery
          </strong>

          <span>
            Encourage appreciation of places, communities,
            and natural environments.
          </span>

        </div>

      </div>

    </div>

  </section>


  <!-- =========================================
       PRESERVING HERITAGE
  ========================================== -->

  <section class="heritage-section">

    <div class="container">

      <div class="heritage-content">

        <span class="eyebrow">
          PRESERVING WHAT MATTERS
        </span>

        <h2>
          Preserving Pangasinan's Heritage
        </h2>

        <p>
          Pangasinan's heritage is more than its historical places and
          beautiful destinations. It is also found in traditions, stories,
          food, language, arts, and the everyday practices of its people.
        </p>

        <p>
          By learning about and sharing these aspects of heritage, future
          generations can better understand the province's identity while
          visitors can appreciate Pangasinan with greater awareness and respect.
        </p>

      </div>

    </div>

  </section>

</template>


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
   ABOUT GRID
===================================================== */

.about-grid,
.platform-grid {

  display: grid;

  gap: 40px;

}


/* =====================================================
   ABOUT CONTENT
===================================================== */

.about-copy h2,
.section-heading-left h2,
.platform-grid h2 {

  margin: 12px 0 18px;

}


.about-copy p,
.section-heading-left p,
.platform-grid p {

  margin-bottom: 15px;

  color:
    var(--color-text-secondary);

  line-height: 1.8;

}


/* =====================================================
   HERITAGE CARD
===================================================== */

.heritage-card {

  padding: 30px;

  background:
    var(--color-surface);

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-lg);

}


.heritage-card h2 {

  margin: 12px 0 20px;

}


.heritage-card ul {

  list-style: none;

}


.heritage-card li {

  margin-bottom: 20px;

}


.heritage-card strong,
.platform-points strong {

  display: block;

  margin-bottom: 5px;

  color:
    var(--color-primary-dark);

}


.heritage-card span,
.platform-points span {

  display: block;

  color:
    var(--color-text-secondary);

  font-size: 0.95rem;

  line-height: 1.6;

}


/* =====================================================
   WHY SECTION
===================================================== */

.why-section {

  background:
    var(--color-surface);

}


.section-heading-left {

  max-width: 760px;

  margin-bottom: 36px;

}


/* =====================================================
   VALUE GRID
===================================================== */

.value-grid {

  display: grid;

  gap: 18px;

}


.value-card {

  padding: 26px;

  background:
    var(--color-white);

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-md);

}


.value-card > span {

  color:
    var(--color-accent);

  font-family:
    var(--font-heading);

  font-size: 1.5rem;

}


.value-card h3 {

  margin: 10px 0 8px;

  font-size: 1.4rem;

}


.value-card p {

  color:
    var(--color-text-secondary);

  font-size: 0.95rem;

  line-height: 1.7;

}


/* =====================================================
   PLATFORM SECTION
===================================================== */

.platform-section {

  background:
    var(--color-primary-dark);

  color:
    var(--color-white);

}


.platform-section .eyebrow {

  color:
    var(--color-accent);

}


.platform-grid h2 {

  color:
    var(--color-white);

}


.platform-grid p {

  color:
    rgba(255,255,255,0.78);

}


.platform-grid p strong {

  color:
    var(--color-white);

}


/* =====================================================
   PLATFORM POINTS
===================================================== */

.platform-points {

  display: grid;

  gap: 14px;

}


.platform-points > div {

  padding: 20px;

  border:
    1px solid
    rgba(255,255,255,0.14);

  border-radius:
    var(--radius-md);

  background:
    rgba(255,255,255,0.06);

}


.platform-points strong {

  color:
    var(--color-white);

}


.platform-points span {

  color:
    rgba(255,255,255,0.68);

}


/* =====================================================
   PRESERVING HERITAGE
===================================================== */

.heritage-section {

  padding: 70px 0;

  background:
    #F3EFE7;

  color:
    #172522;

}


.heritage-section .container {

  position: relative;

  z-index: 1;

}


.heritage-section .eyebrow {

  color:
    #0B5D4F;

}


.heritage-content h2 {

  margin: 10px 0 20px;

  font-size: 2.2rem;

  color:
    #172522;

}


.heritage-content p {

  margin-bottom: 15px;

  line-height: 1.8;

  color:
    #687874;

}


/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 1024px) {

  .page-header {

    padding: 65px 0;

  }

}


/* =====================================================
   TABLET
===================================================== */

@media (min-width: 768px) {

  .about-grid {

    grid-template-columns:
      1.7fr 1fr;

    align-items: start;

  }


  .value-grid {

    grid-template-columns:
      repeat(3, 1fr);

  }


  .platform-grid {

    grid-template-columns:
      1.2fr 1fr;

    align-items: start;

  }


  .heritage-content h2 {

    font-size: 3rem;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 767px) {

  .page-header {

    padding: 50px 0;

  }


  .page-header h1 {

    font-size: 2.4rem;

  }


  .page-header p {

    font-size: 0.9rem;

  }


  .heritage-card,
  .value-card,
  .platform-points > div {

    padding: 22px;

  }

}

</style>