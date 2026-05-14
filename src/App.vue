<script setup>
import { ref } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import HeroSection from './components/HeroSection.vue'

const showLoading = ref(true)
const animateHero = ref(false)

function onLoadingExiting() {
  animateHero.value = true
}

function onLoadingComplete() {
  showLoading.value = false
}
</script>

<template>
  <HeroSection :animate="animateHero" />
  <LoadingScreen
    v-if="showLoading"
    @exiting="onLoadingExiting"
    @complete="onLoadingComplete"
  />
</template>

<style>
html,
body {
  overflow: hidden;
  height: 100%;
}
</style>
