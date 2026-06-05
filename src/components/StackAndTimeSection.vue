<script setup>
import LocalTimePanel from './LocalTimePanel.vue'
import TechnologyStack from './TechnologyStack.vue'
</script>

<template>
  <section class="stack-time" aria-label="Stack and local time">
    <div class="stack-time__content">
      <TechnologyStack />
      <LocalTimePanel />
    </div>
  </section>
</template>

<style scoped>
.stack-time {
  position: relative;
  padding: 8rem 2.5rem 6rem;
  border-top: 1px solid var(--color-border);
  background:
    linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.stack-time__content {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
  gap: 4rem;
  max-width: 1180px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .stack-time {
    padding: 5rem 1.5rem 4rem;
  }

  .stack-time__content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
