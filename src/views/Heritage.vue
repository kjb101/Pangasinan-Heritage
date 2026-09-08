<template>

  <!-- =========================================
       PAGE HEADER
  ========================================== -->

  <section class="page-header">

    <div class="container page-header-content">

      <span class="eyebrow">
        EXPLORE
      </span>

      <h1>
        Pangasinan Heritage
      </h1>

      <p>
        Discover the natural, architectural, religious,
        and historical heritage of Pangasinan.
      </p>

    </div>

  </section>


  <!-- =========================================
       SEARCH & FILTER
  ========================================== -->

  <section class="search-section">

    <div class="container search-container">

      <label
        for="heritage-search"
        class="search-label"
      >
        Search heritage sites
      </label>


      <div class="search-controls">

        <!-- SEARCH -->

        <div class="search-input-wrapper">

          <AppIcon
            name="search"
            :size="19"
          />

          <input
            id="heritage-search"
            v-model="searchQuery"
            type="search"
            placeholder="Search Pangasinan heritage..."
            autocomplete="off"
          />

        </div>


        <!-- CATEGORY -->

        <div class="filter-wrapper">

          <AppIcon
            name="filter"
            :size="18"
          />

          <select
            v-model="selectedCategory"
            aria-label="Filter heritage sites by category"
          >

            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>

          </select>

        </div>


        <!-- SEARCH BUTTON -->

        <button
          type="button"
          class="search-button"
          @click="performSearch"
        >

          <AppIcon
            name="search"
            :size="18"
          />

          <span>
            Search
          </span>

        </button>

      </div>


      <!-- ACTIVE FILTER -->

      <div
        v-if="selectedCategory !== 'All' || searchQuery"
        class="active-filter"
      >

        <span>

          Showing
          <strong>
            {{ filteredSites.length }}
          </strong>

          {{ filteredSites.length === 1 ? 'place' : 'places' }}

        </span>


        <button
          type="button"
          @click="clearFilters"
        >

          <AppIcon
            name="x"
            :size="15"
          />

          Clear filters

        </button>

      </div>

    </div>

  </section>


  <!-- =========================================
       HERITAGE SITES
  ========================================== -->

  <section class="heritage-section">

    <div class="container">

      <!-- RESULTS -->

      <div
        v-if="filteredSites.length"
        class="heritage-grid"
      >

        <article
          v-for="site in filteredSites"
          :key="site.id"
          class="heritage-card"
        >

          <!-- IMAGE -->

          <div class="heritage-image-wrapper">

            <img
              :src="site.image"
              :alt="site.name"
              class="heritage-image"
              @error="handleImageError"
            />


            <!-- CATEGORY -->

            <span class="category-badge">

              <AppIcon
                :name="getCategoryIcon(site.category)"
                :size="14"
              />

              {{ site.category }}

            </span>

          </div>


          <!-- CONTENT -->

          <div class="heritage-card-content">

            <!-- LOCATION -->

            <span class="location">

              <AppIcon
                name="map-pin"
                :size="14"
              />

              {{ site.location }}

            </span>


            <!-- TITLE -->

            <h2>
              {{ site.name }}
            </h2>


            <!-- DESCRIPTION -->

            <p>
              {{ site.description }}
            </p>


            <!-- EXPLORE -->

            <RouterLink
              :to="`/heritage/${site.slug}`"
              class="view-link"
            >

              <span>
                Explore
              </span>

              <AppIcon
                name="arrow-right"
                :size="16"
              />

            </RouterLink>

          </div>

        </article>

      </div>


      <!-- =========================================
           NO RESULTS
      ========================================== -->

      <div
        v-else
        class="no-results"
      >

        <div class="no-results-icon">

          <AppIcon
            name="search"
            :size="30"
          />

        </div>


        <h2>
          No heritage sites found
        </h2>


        <p>
          Try a different search term or category.
        </p>


        <button
          type="button"
          class="clear-button"
          @click="clearFilters"
        >

          Clear filters

        </button>

      </div>

    </div>

  </section>

</template>


<script setup>

import {
  ref,
  computed,
  watch
} from 'vue'

import {
  useRoute,
  useRouter
} from 'vue-router'

import AppIcon
  from '../components/atoms/AppIcon.vue'

import {
  heritageSites
} from '../data/heritage'


/* =========================================
   ROUTER
========================================= */

const route = useRoute()

const router = useRouter()


/* =========================================
   SEARCH
========================================= */

const searchQuery = ref('')


/* =========================================
   CATEGORY
========================================= */

const categories = [

  'All',

  'Natural Heritage',

  'Architectural Heritage',

  'Religious Heritage',

  'Historical Heritage'

]


/* =========================================
   READ CATEGORY FROM URL
========================================= */

const selectedCategory = ref(

  typeof route.query.category === 'string'

    ? route.query.category

    : 'All'

)


/* =========================================
   KEEP CATEGORY VALID
========================================= */

if (
  !categories.includes(
    selectedCategory.value
  )
) {

  selectedCategory.value = 'All'

}


/* =========================================
   FILTER HERITAGE SITES
========================================= */

const filteredSites = computed(() => {

  const query =
    searchQuery.value
      .toLowerCase()
      .trim()


  return heritageSites.filter(site => {

    /* -------------------------------
       SEARCH MATCH
    ------------------------------- */

    const matchesSearch =

      !query

      ||

      site.name
        .toLowerCase()
        .includes(query)

      ||

      site.location
        .toLowerCase()
        .includes(query)

      ||

      site.category
        .toLowerCase()
        .includes(query)

      ||

      site.description
        .toLowerCase()
        .includes(query)


    /* -------------------------------
       CATEGORY MATCH
    ------------------------------- */

    const matchesCategory =

      selectedCategory.value === 'All'

      ||

      site.category ===
        selectedCategory.value


    return (
      matchesSearch &&
      matchesCategory
    )

  })

})


/* =========================================
   UPDATE URL WHEN CATEGORY CHANGES
========================================= */

watch(

  selectedCategory,

  category => {

    const query = {
      ...route.query
    }


    if (
      category &&
      category !== 'All'
    ) {

      query.category = category

    } else {

      delete query.category

    }


    router.replace({
      query
    })

  }

)


/* =========================================
   SEARCH BUTTON
========================================= */

const performSearch = () => {

  /*
   * Filtering is automatic because
   * filteredSites is a computed property.
   *
   * This button simply keeps the
   * search interaction available.
   */

}


/* =========================================
   CLEAR FILTERS
========================================= */

const clearFilters = () => {

  searchQuery.value = ''

  selectedCategory.value = 'All'

}


/* =========================================
   CATEGORY ICON
========================================= */

const getCategoryIcon = category => {

  switch (category) {

    case 'Natural Heritage':
      return 'leaf'

    case 'Architectural Heritage':
      return 'landmark'

    case 'Religious Heritage':
      return 'church'

    case 'Historical Heritage':
      return 'history'

    default:
      return 'landmark'

  }

}


/* =========================================
   IMAGE ERROR
========================================= */

const handleImageError = event => {

  event.target.style.display = 'none'

}

</script>


<style scoped>

/* =========================================
   PAGE HEADER
========================================= */

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


/* =========================================
   HEADER DECORATION
========================================= */

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


/* =========================================
   HEADER CONTENT
========================================= */

.page-header-content {

  position: relative;

  z-index: 1;

}


/* =========================================
   EYEBROW
========================================= */

.page-header .eyebrow {

  display: block;

  margin-bottom: 10px;

  color: var(--color-accent);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.18em;

}


/* =========================================
   HEADER TITLE
========================================= */

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


/* =========================================
   HEADER DESCRIPTION
========================================= */

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


/* =========================================
   SEARCH SECTION
========================================= */

.search-section {

  padding: 65px 0 35px;

  background:
    var(--color-white);

}


.search-container {

  max-width: 900px;

  margin: 0 auto;

}


.search-label {

  display: block;

  margin-bottom: 10px;

  color: var(--color-text);

  font-size: 0.95rem;

  font-weight: 700;

}


/* =========================================
   SEARCH CONTROLS
========================================= */

.search-controls {

  display: grid;

  grid-template-columns:
    minmax(250px, 1fr)
    auto
    auto;

  gap: 10px;

  align-items: stretch;

}


/* =========================================
   SEARCH INPUT
========================================= */

.search-input-wrapper {

  display: flex;

  align-items: center;

  gap: 12px;

  min-height: 54px;

  padding: 0 16px;

  border:
    2px solid #dce4e1;

  border-radius: 12px;

  background:
    var(--color-white);

  color: #71807b;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

}


.search-input-wrapper:focus-within {

  border-color:
    var(--color-primary);

  box-shadow:
    0 0 0 3px
    rgba(0,100,88,0.08);

}


.search-input-wrapper input {

  width: 100%;

  min-width: 0;

  border: none;

  outline: none;

  background: transparent;

  color: var(--color-text);

  font-family: var(--font-body);

  font-size: 0.95rem;

}


.search-input-wrapper input::placeholder {

  color: #82908b;

}


/* =========================================
   FILTER
========================================= */

.filter-wrapper {

  display: flex;

  align-items: center;

  gap: 8px;

  min-height: 54px;

  padding: 0 14px;

  border:
    2px solid #dce4e1;

  border-radius: 12px;

  background:
    var(--color-white);

  color:
    var(--color-primary);

}


.filter-wrapper select {

  min-width: 175px;

  border: none;

  outline: none;

  background: transparent;

  color: var(--color-text);

  font-family: var(--font-body);

  font-size: 0.88rem;

  font-weight: 600;

  cursor: pointer;

}


/* =========================================
   SEARCH BUTTON
========================================= */

.search-button {

  min-height: 54px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  padding: 0 20px;

  border: none;

  border-radius: 10px;

  background:
    var(--color-primary);

  color:
    var(--color-white);

  font-family: var(--font-body);

  font-size: 0.9rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

}


.search-button:hover {

  background:
    var(--color-primary-dark);

  transform:
    translateY(-1px);

}


/* =========================================
   ACTIVE FILTER
========================================= */

.active-filter {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  margin-top: 15px;

  color:
    var(--color-text-secondary);

  font-size: 0.85rem;

}


.active-filter button {

  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding: 0;

  border: none;

  background: transparent;

  color:
    var(--color-primary);

  font-family: var(--font-body);

  font-size: 0.85rem;

  font-weight: 700;

  cursor: pointer;

}


/* =========================================
   HERITAGE SECTION
========================================= */

.heritage-section {

  padding: 20px 0 80px;

  background:
    var(--color-white);

}


/* =========================================
   GRID
========================================= */

.heritage-grid {

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 25px;

}


/* =========================================
   CARD
========================================= */

.heritage-card {

  overflow: hidden;

  border:
    1px solid #e2e8e5;

  border-radius: 16px;

  background:
    var(--color-white);

  box-shadow:
    0 5px 20px
    rgba(15,45,38,0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

}


.heritage-card:hover {

  transform:
    translateY(-5px);

  box-shadow:
    0 15px 35px
    rgba(15,45,38,0.12);

}


/* =========================================
   IMAGE
========================================= */

.heritage-image-wrapper {

  position: relative;

  height: 230px;

  overflow: hidden;

  background:
    var(--color-surface);

}


.heritage-image {

  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform 0.4s ease;

}


.heritage-card:hover
.heritage-image {

  transform:
    scale(1.04);

}


/* =========================================
   CATEGORY BADGE
========================================= */

.category-badge {

  position: absolute;

  left: 14px;

  top: 14px;

  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding: 7px 10px;

  border-radius: 50px;

  background:
    rgba(255,255,255,0.94);

  color:
    var(--color-primary);

  font-size: 0.7rem;

  font-weight: 800;

  box-shadow:
    0 3px 10px
    rgba(0,0,0,0.1);

}


/* =========================================
   CARD CONTENT
========================================= */

.heritage-card-content {

  padding: 22px;

}


.location {

  display: inline-flex;

  align-items: center;

  gap: 5px;

  margin-bottom: 8px;

  color:
    var(--color-primary);

  font-size: 0.75rem;

  font-weight: 700;

}


.heritage-card h2 {

  margin: 0 0 10px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.5rem;

  line-height: 1.15;

}


.heritage-card p {

  margin: 0 0 18px;

  color:
    var(--color-text-secondary);

  font-size: 0.88rem;

  line-height: 1.6;

}


/* =========================================
   VIEW LINK
========================================= */

.view-link {

  display: inline-flex;

  align-items: center;

  gap: 7px;

  color:
    var(--color-primary);

  font-size: 0.85rem;

  font-weight: 800;

  text-decoration: none;

  transition:
    gap 0.2s ease,
    color 0.2s ease;

}


.view-link:hover {

  gap: 11px;

  color:
    var(--color-accent);

}


/* =========================================
   NO RESULTS
========================================= */

.no-results {

  max-width: 550px;

  margin: 30px auto;

  padding: 60px 25px;

  text-align: center;

  border:
    1px solid #e1e8e5;

  border-radius: 16px;

  background:
    #fafcfb;

}


.no-results-icon {

  width: 60px;

  height: 60px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin: 0 auto 18px;

  border-radius: 50%;

  background:
    var(--color-primary-light);

  color:
    var(--color-primary);

}


.no-results h2 {

  margin: 0 0 8px;

  color:
    var(--color-text);

  font-family:
    var(--font-heading);

  font-size: 1.6rem;

}


.no-results p {

  margin: 0 0 20px;

  color:
    var(--color-text-secondary);

}


/* =========================================
   CLEAR BUTTON
========================================= */

.clear-button {

  padding: 10px 18px;

  border: none;

  border-radius: 8px;

  background:
    var(--color-primary);

  color:
    var(--color-white);

  font-family:
    var(--font-body);

  font-weight: 700;

  cursor: pointer;

}


.clear-button:hover {

  background:
    var(--color-primary-dark);

}


/* =========================================
   DESKTOP
========================================= */

@media (min-width: 1024px) {

  .page-header {

    padding: 65px 0;

  }

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1000px) {

  .heritage-grid {

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

  }


  .search-controls {

    grid-template-columns:
      1fr 1fr;

  }


  .search-input-wrapper {

    grid-column:
      1 / -1;

  }


  .search-button {

    width: 100%;

  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 650px) {

  .page-header {

    padding: 50px 0;

  }


  .page-header h1 {

    font-size: 2.4rem;

  }


  .page-header p {

    font-size: 0.9rem;

  }


  .search-section {

    padding: 40px 0 25px;

  }


  .search-controls {

    grid-template-columns: 1fr;

  }


  .search-input-wrapper {

    grid-column: auto;

  }


  .filter-wrapper {

    width: 100%;

  }


  .filter-wrapper select {

    min-width: 0;

    flex: 1;

  }


  .search-button {

    width: 100%;

  }


  .heritage-section {

    padding-bottom: 55px;

  }


  .heritage-grid {

    grid-template-columns: 1fr;

  }


  .heritage-image-wrapper {

    height: 220px;

  }


  .active-filter {

    align-items: flex-start;

    flex-direction: column;

    gap: 8px;

  }

}

</style>