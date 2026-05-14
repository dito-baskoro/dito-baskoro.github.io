<script setup>
import { ref } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import HeroSection from './components/HeroSection.vue'
import StackAndTimeSection from './components/StackAndTimeSection.vue'
import FooterNavigation from './components/FooterNavigation.vue'

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
  <StackAndTimeSection />
  <FooterNavigation />
  <LoadingScreen
    v-if="showLoading"
    @exiting="onLoadingExiting"
    @complete="onLoadingComplete"
  />
</template>

<style>
html,
body {
  min-height: 100%;
}
</style>
