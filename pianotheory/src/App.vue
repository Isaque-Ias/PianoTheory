<template>
 <div :class="layoutClass" id="app">
    <AppHeader />
    
    <main class="main-content">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()

const layoutClass = computed(() =>
  route.name === 'home' ? 'home-layout' : 'default-layout'
)
</script>

<style>
.home-layout {
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(23, 26, 36, 50%),
      rgba(23, 26, 36, 50%)
    ),
    linear-gradient(to right,
      rgba(23, 26, 36, 100%) 0%,
      rgba(23, 26, 36, 40%) 25%,
      rgba(23, 26, 36, 0%) 50%
    ),
    url(@/assets/images/piano-hero.jpg),
    linear-gradient(
      rgba(23, 26, 36, 100%),
      rgba(23, 26, 36, 100%)
    );
  background-repeat: repeat, repeat, no-repeat;
  background-size: fit;
  background-position: 0 -100px;
  background-size: 135%;
}

.default-layout {
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(23, 26, 36, 75%),
      rgba(23, 26, 36, 75%)
    ), url(@/assets/images/starry-sky.jpg);
  background-size: fit;
}

* {
  margin: 0;
  padding: 0;
}

html, body {
  min-height: 100vh;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

</style>
