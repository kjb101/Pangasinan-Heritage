<template>

  <!-- =========================================
       ACCESSIBILITY
  ========================================== -->

  <a
    href="#main-content"
    class="skip-link"
  >
    Skip to main content
  </a>


  <!-- =========================================
       HEADER
  ========================================== -->

  <HeaderNavigation />


  <!-- =========================================
       MAIN CONTENT
  ========================================== -->

  <main id="main-content">

    <RouterView />

  </main>


    <!-- =========================================
          FOOTER
    ========================================== -->

      <footer class="footer">

      <div class="container">

      <!-- =====================================
           FOOTER MAIN
      ====================================== -->

      <div class="footer-main">


        <!-- ===================================
             BRAND
        ==================================== -->

        <div class="footer-brand">

          <div class="footer-brand-title">

            <span class="footer-brand-icon">

              <AppIcon
                name="leaf"
                :size="21"
              />

            </span>


            <h2>
              Pangasinan Heritage
            </h2>

          </div>


          <p>
            Discover the history, culture, traditions,
            and natural heritage of Pangasinan.
          </p>

        </div>


        <!-- ===================================
             EXPLORE LINKS
        ==================================== -->

        <div class="footer-links">

          <h3>
            Explore
          </h3>


          <!-- HOME -->

          <RouterLink to="/">

            <AppIcon
              name="home"
              :size="16"
            />

            <span>
              Home
            </span>

          </RouterLink>


          <!-- HERITAGE -->

          <RouterLink to="/heritage">

            <AppIcon
              name="landmark"
              :size="16"
            />

            <span>
              Heritage
            </span>

          </RouterLink>


          <!-- DESTINATION -->

          <RouterLink to="/destinations">

            <AppIcon
              name="map-pin"
              :size="16"
            />

            <span>
              Destination
            </span>

          </RouterLink>


          <!-- ABOUT -->

          <RouterLink to="/about">

            <AppIcon
              name="info"
              :size="16"
            />

            <span>
              About
            </span>

          </RouterLink>


          <!-- DESIGN SYSTEM -->

          <RouterLink to="/design-system">

            <AppIcon
              name="compass"
              :size="16"
            />

            <span>
              Design System
            </span>

          </RouterLink>

        </div>

      </div>


      <!-- =====================================
           DIVIDER
      ====================================== -->

      <div class="footer-divider"></div>


      <!-- =====================================
           DISCLAIMER
      ====================================== -->

      <div class="footer-disclaimer">

        <p>

          <strong>
            Disclaimer:
          </strong>

          This website was developed for educational purposes only 
          and is not an official website of the Provincial Government of Pangasinan. 
          All photographs and visual materials belong to their respective owners 
          and are used for educational purposes.

        </p>

      </div>


      <!-- =====================================
           FOOTER BOTTOM
      ====================================== -->

      <div class="footer-bottom">

        <span>
          © 2026 Pangasinan Heritage
        </span>

        <span>
          Academic Prototype
        </span>

      </div>

    </div>

  </footer>

</template>


<script setup>

import HeaderNavigation
  from './components/organisms/HeaderNavigation.vue'

import AppIcon
  from './components/atoms/AppIcon.vue'

</script>


<style scoped>

/* =====================================================
   FOOTER
===================================================== */

.footer {

  padding: 42px 0 20px;

  background: var(--color-primary-dark);

  color: var(--color-white);

}


/* =====================================================
   FOOTER MAIN
===================================================== */

.footer-main {

  display: grid;

  grid-template-columns: 2fr 1fr;

  gap: 60px;

  align-items: start;

}


/* =====================================================
   BRAND
===================================================== */

.footer-brand {

  max-width: 560px;

}


.footer-brand-title {

  display: flex;

  align-items: center;

  gap: 11px;

  margin-bottom: 10px;

}


.footer-brand-icon {

  width: 38px;

  height: 38px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 50%;

  background: rgba(255,255,255,0.08);

  color: var(--color-accent);

}


.footer-brand h2 {

  margin: 0;

  color: var(--color-accent);

  font-family: var(--font-heading);

  font-size: 1.5rem;

  font-weight: 600;

  line-height: 1.2;

}


.footer-brand p {

  max-width: 500px;

  margin: 0;

  color: rgba(255,255,255,0.72);

  font-family: var(--font-body);

  font-size: 0.9rem;

  line-height: 1.65;

}


/* =====================================================
   EXPLORE
===================================================== */

.footer-links {

  display: flex;

  flex-direction: column;

  align-items: flex-start;

}


.footer-links h3 {

  margin: 0 0 12px;

  color: var(--color-white);

  font-family: var(--font-heading);

  font-size: 1.05rem;

  font-weight: 600;

  line-height: 1.3;

}


/* =====================================================
   FOOTER LINKS
===================================================== */

.footer-links a {

  display: flex;

  align-items: center;

  gap: 8px;

  min-height: 32px;

  margin: 1px 0;

  color: rgba(255,255,255,0.72);

  font-family: var(--font-body);

  font-size: 0.85rem;

  font-weight: 400;

  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

}


.footer-links a :deep(.app-icon) {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

}


/* =====================================================
   HOVER
===================================================== */

.footer-links a:hover {

  color: var(--color-accent);

  transform: translateX(3px);

}


/* =====================================================
   ACTIVE
===================================================== */

.footer-links a.router-link-active {

  color: var(--color-accent);

}


/* =====================================================
   FOCUS
===================================================== */

.footer-links a:focus-visible {

  outline: 2px solid var(--color-accent);

  outline-offset: 4px;

  border-radius: 4px;

}


/* =====================================================
   DIVIDER
===================================================== */

.footer-divider {

  height: 1px;

  margin: 28px 0 16px;

  background: rgba(255,255,255,0.14);

}


/* =====================================================
   DISCLAIMER
===================================================== */

.footer-disclaimer {

  max-width: 900px;

  margin-bottom: 15px;

}


.footer-disclaimer p {

  margin: 0;

  color: rgba(255,255,255,0.52);

  font-family: var(--font-body);

  font-size: 0.72rem;

  font-weight: 400;

  line-height: 1.55;

}


.footer-disclaimer strong {

  color: rgba(255,255,255,0.72);

  font-weight: 800;

}


/* =====================================================
   FOOTER BOTTOM
===================================================== */

.footer-bottom {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  padding-top: 13px;

  border-top: 1px solid rgba(255,255,255,0.08);

  color: rgba(255,255,255,0.45);

  font-family: var(--font-body);

  font-size: 0.72rem;

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 900px) {

  .footer-main {

    grid-template-columns: 1.5fr 1fr;

    gap: 40px;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 767px) {

  .footer {

    padding: 35px 0 18px;

  }


  .footer-main {

    grid-template-columns: 1fr;

    gap: 28px;

  }


  .footer-brand {

    max-width: 100%;

  }


  .footer-brand h2 {

    font-size: 1.35rem;

  }


  .footer-brand p {

    font-size: 0.85rem;

  }


  .footer-links {

    width: 100%;

  }


  .footer-links a {

    width: fit-content;

    min-height: 34px;

  }


  .footer-divider {

    margin: 25px 0 15px;

  }


  .footer-disclaimer {

    margin-bottom: 15px;

  }


  .footer-disclaimer p {

    font-size: 0.68rem;

  }


  .footer-bottom {

    flex-direction: column;

    align-items: flex-start;

    gap: 5px;

  }

}

</style>