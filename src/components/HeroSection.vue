<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'
import SocialNavigation from './SocialNavigation.vue'
import { availability, contactEmail } from '../data/profile'

const props = defineProps({
  animate: Boolean,
})

const heroRef = ref(null)

watch(
  () => props.animate,
  (val) => {
    if (val) runEntrance()
  },
)

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function runEntrance() {
  const root = heroRef.value
  if (!root || prefersReducedMotion()) return

  const tl = gsap.timeline({ delay: 0.2 })
  const fromIfPresent = (selector, vars, position) => {
    const elements = root.querySelectorAll(selector)
    if (elements.length) tl.from(elements, vars, position)
  }

  fromIfPresent('.hero__nav', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power3.out',
  })

  fromIfPresent('.hero__name', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'expo.out',
  }, '-=0.4')

  fromIfPresent('.hero__lead', {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'expo.out',
  }, '-=0.7')

  fromIfPresent('.hero__cta > *', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
  }, '-=0.5')
}
</script>

<template>
  <section ref="heroRef" class="hero">
    <SocialNavigation class="hero__nav" />

    <div class="hero__content">
      <h1 class="hero__name">Dito<br />Baskoro</h1>
      <p class="hero__lead">
        Creative developer in Jakarta. I design and build the front of
        the web by hand, the kind of small, careful details you only
        notice when they are missing.
      </p>

      <div class="hero__cta">
        <a :href="`mailto:${contactEmail}`" class="hero__contact">
          {{ contactEmail }}
        </a>
        <span class="hero__status">
          <span class="hero__status-dot" aria-hidden="true"></span>
          {{ availability }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem 2.5rem 3.5rem;
}

.hero__nav {
  padding-bottom: 2rem;
}

.hero__content {
  align-self: center;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
}

/* Oversized name carries the hierarchy: heavy weight, tight leading. */
.hero__name {
  font-family: var(--font-heading);
  font-size: clamp(3.75rem, 16vw, 13rem);
  font-weight: 700;
  line-height: 0.86;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

/* The lead is the quiet counterweight: small, light, specific. */
.hero__lead {
  margin-top: 2rem;
  max-width: 46ch;
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 300;
  line-height: 1.5;
  color: var(--color-text);
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem 2.5rem;
  margin-top: 3rem;
}

.hero__contact {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 1.6vw, 1.35rem);
  font-weight: 700;
  color: var(--color-accent);
  border-bottom: 1px solid transparent;
  padding-bottom: 0.15rem;
  transition: border-color 0.25s ease;
}

.hero__contact:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero__status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  flex-shrink: 0;
  animation: hero-pulse 2.4s ease-in-out infinite;
}

@keyframes hero-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(0.78);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 1.5rem 1.5rem 2.5rem;
  }
}
</style>
