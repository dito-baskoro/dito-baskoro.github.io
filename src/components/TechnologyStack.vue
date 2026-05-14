<script setup>
import { technologies } from '../data/technologies'
</script>

<template>
  <div class="technology-stack">
    <p class="technology-stack__eyebrow">T C</p>
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
}

.technology-stack__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 5.25rem);
  font-weight: 400;
  line-height: 0.95;
  color: var(--color-text);
}

.technology-stack__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

.technology-stack__list li {
  min-height: 4.25rem;
  padding: 1rem;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: clamp(0.75rem, 1.3vw, 0.95rem);
  color: var(--color-text-muted);
  transition:
    color 0.25s ease,
    background-color 0.25s ease;
}

.technology-stack__list li:hover {
  color: var(--color-text);
  background-color: rgba(200, 255, 0, 0.05);
}

@media (max-width: 900px) {
  .technology-stack__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 2.5rem;
  }
}

@media (max-width: 520px) {
  .technology-stack__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .technology-stack__list li {
    min-height: 3.5rem;
    padding: 0.75rem 0.5rem;
    font-size: clamp(0.62rem, 2.6vw, 0.75rem);
  }
}
</style>
