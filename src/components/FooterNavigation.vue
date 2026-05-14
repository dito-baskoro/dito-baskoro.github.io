<script setup>
import SocialNavigation from './SocialNavigation.vue'
</script>

<template>
  <footer class="footer-nav">
    <SocialNavigation variant="footer" aria-label="Footer navigation" />
  </footer>
</template>

<style scoped>
.footer-nav {
  padding: 2rem 2.5rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

@media (max-width: 768px) {
  .footer-nav {
    padding: 1.5rem;
  }
}
</style>
