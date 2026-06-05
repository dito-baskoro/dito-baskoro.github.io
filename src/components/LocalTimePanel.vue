<script setup>
import { useJakartaClock } from '../composables/useJakartaClock'
import AnalogClock from './AnalogClock.vue'

const { now, time, status } = useJakartaClock()
</script>

<template>
  <div class="local-time" aria-live="polite">
    <p class="local-time__eyebrow">UTC +7</p>
    <h2 id="time-heading" class="local-time__heading">Right now in Jakarta</h2>
    <div class="local-time__display">
      <AnalogClock :date="now" />
      <p class="local-time__clock">{{ time }}</p>
    </div>
    <p class="local-time__status">{{ status }}</p>
  </div>
</template>

<style scoped>
.local-time {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 0;
  padding-bottom: 0.35rem;
}

.local-time__eyebrow {
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.local-time__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 5.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 0.95;
  color: var(--color-text);
}

.local-time__display {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.local-time__clock {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 3.8vw, 2.85rem);
  line-height: 1;
  color: var(--color-accent);
}

.local-time__status {
  max-width: 24ch;
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@media (max-width: 900px) {
  .local-time {
    justify-content: flex-start;
  }

  .local-time__display {
    gap: 1.25rem;
  }
}

@media (max-width: 520px) {
  .local-time__display {
    gap: 1rem;
  }

  .local-time__clock {
    font-size: clamp(2rem, 11vw, 2.8rem);
  }
}
</style>
