<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const technologies = [
  'HTML',
  'CSS',
  'SCSS',
  'Javascript',
  'Typescript',
  'Vue',
  'React',
  'Next.js',
  'Node.js',
  'Pinia',
  'Redux',
  'GraphQL',
  'Restful APIs',
  'Playwright',
  'Firebase',
  'AWS',
  'GCP',
  'GA events',
]

const now = ref(new Date())
let timer

const jakartaTime = computed(() =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(now.value),
)

const localStatus = computed(() => {
  const hour = Number(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      hour: 'numeric',
      hour12: false,
    }).format(now.value),
  )

  if (hour >= 23 || hour < 6) return "I'm probably sleeping, but leave a note"
  if (hour < 10) return 'Morning in Jakarta, easing into the day'
  if (hour < 18) return 'Currently building from Jakarta'
  return 'Jakarta evening, still around'
})

onMounted(() => {
  timer = window.setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <section class="stack-time" aria-labelledby="stack-heading">
    <div class="stack-time__marker" aria-hidden="true">/</div>

    <div class="stack-time__content">
      <div class="stack-time__panel stack-time__panel--stack">
        <p class="stack-time__eyebrow">T C</p>
        <h2 id="stack-heading" class="stack-time__heading">Technology stack</h2>
        <ul class="stack-time__list">
          <li v-for="technology in technologies" :key="technology">
            {{ technology }}
          </li>
        </ul>
      </div>

      <div class="stack-time__panel stack-time__panel--time" aria-live="polite">
        <p class="stack-time__eyebrow">UTC +7</p>
        <h2 class="stack-time__heading">My current local time</h2>
        <p class="stack-time__clock">{{ jakartaTime }}</p>
        <p class="stack-time__status">{{ localStatus }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-time {
  position: relative;
  min-height: 100vh;
  padding: 7rem 2.5rem 5rem;
  border-top: 1px solid var(--color-border);
  background:
    linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.stack-time__marker {
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
}

.stack-time__content {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
  gap: 4rem;
  max-width: 1180px;
  margin: 0 auto;
}

.stack-time__panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.stack-time__eyebrow {
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 0.14em;
}

.stack-time__heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 5.25rem);
  font-weight: 400;
  line-height: 0.95;
  color: var(--color-text);
}

.stack-time__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

.stack-time__list li {
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

.stack-time__list li:hover {
  color: var(--color-text);
  background-color: rgba(200, 255, 0, 0.05);
}

.stack-time__panel--time {
  justify-content: flex-end;
  padding-bottom: 0.35rem;
}

.stack-time__clock {
  margin-top: 3rem;
  font-family: var(--font-mono);
  font-size: clamp(2.4rem, 7vw, 5.75rem);
  line-height: 1;
  color: var(--color-accent);
}

.stack-time__status {
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
  .stack-time {
    padding: 5rem 1.5rem 4rem;
  }

  .stack-time__marker {
    left: 1.5rem;
  }

  .stack-time__content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .stack-time__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 2.5rem;
  }

  .stack-time__panel--time {
    justify-content: flex-start;
  }
}

@media (max-width: 520px) {
  .stack-time__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .stack-time__list li {
    min-height: 3.5rem;
    padding: 0.75rem 0.5rem;
    font-size: clamp(0.62rem, 2.6vw, 0.75rem);
  }
}
</style>
