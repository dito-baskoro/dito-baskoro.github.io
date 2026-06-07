<script setup>
import { technologies } from '../data/technologies'
</script>

<template>
  <div class="technology-stack">
    <p class="technology-stack__eyebrow">What I work with</p>
    <h2 id="stack-heading" class="technology-stack__heading">Technology stack</h2>
    <ul class="technology-stack__list">
      <li v-for="technology in technologies" :key="technology">
        {{ technology }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.technology-stack {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.technology-stack__eyebrow {
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.technology-stack__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 5.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 0.95;
  color: var(--color-text);
}

.technology-stack__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.75rem;
  margin-top: 3rem;
  max-width: 48ch;
}

.technology-stack__list li {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  color: var(--color-text-muted);
  transition: color 0.25s ease;
}

.technology-stack__list li:hover {
  color: var(--color-accent);
}

@media (max-width: 900px) {
  .technology-stack__list {
    margin-top: 2.5rem;
  }
}
</style>
