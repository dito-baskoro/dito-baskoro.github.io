<script setup>
import HeroSection from './components/HeroSection.vue'
import SelectedWorkSection from './components/SelectedWorkSection.vue'
import StackAndTimeSection from './components/StackAndTimeSection.vue'
import FooterNavigation from './components/FooterNavigation.vue'
</script>

<template>
  <main>
    <HeroSection />
    <SelectedWorkSection />
    <StackAndTimeSection />
  </main>
  <FooterNavigation />
</template>

<style>
html,
body {
  min-height: 100%;
}
</style>
