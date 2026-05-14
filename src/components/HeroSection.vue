<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'
import SocialNavigation from './SocialNavigation.vue'

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

function runEntrance() {
  const root = heroRef.value
  if (!root) return

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

  fromIfPresent('.hero__heading', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.4')

  fromIfPresent('.hero__side-char', {
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power2.out',
  }, '-=0.6')

  fromIfPresent('.hero__scroll', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.3')

  fromIfPresent('.hero__badge', {
    opacity: 0,
    scale: 0.8,
    rotation: -10,
    duration: 0.6,
    ease: 'back.out(1.7)',
  }, '-=0.3')

  tl.add(() => {
    const scrollLine = root.querySelector('.hero__scroll-line')
    if (!scrollLine) return

    gsap.to(scrollLine, {
      width: '4rem',
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })
  })
}
</script>

<template>
  <section ref="heroRef" class="hero">
    <SocialNavigation class="hero__nav" />

    <div class="hero__side hero__side--left">
      <span class="hero__side-char">/</span>
      <span class="hero__side-char">D</span>
      <span class="hero__side-char">E</span>
      <span class="hero__side-char">V</span>
    </div>

    <div class="hero__content">
      <h1 class="hero__heading">
        <span class="hero__heading-hash">#</span>
        I'm <em>Dito</em>, a creative developer
        crafting immersive digital experiences
        that merge design &amp; technology.
        Let's build something remarkable.
      </h1>
    </div>

    <div class="hero__side hero__side--right">
      <span class="hero__side-char">C</span>
      <span class="hero__side-char">O</span>
      <span class="hero__side-char">D</span>
      <span class="hero__side-char">E</span>
      <span class="hero__side-char">&amp;</span>
      <span class="hero__side-char">2</span>
      <span class="hero__side-char">6</span>
    </div>

    <!-- <div class="hero__bottom">
      <div class="hero__scroll">
        <div class="hero__scroll-line"></div>
        <span class="hero__scroll-text">Scroll to explore</span>
      </div>

      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        Available for freelance
      </div>
    </div> -->
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem 1fr 3.5rem;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem 2.5rem;
}

.hero__nav {
  grid-column: 1 / -1;
  grid-row: 1;
  padding-bottom: 2rem;
}

.hero__side {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.hero__side--left {
  grid-column: 1;
}

.hero__side--right {
  grid-column: 3;
}

.hero__side-char {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
  opacity: 0.5;
  user-select: none;
  transition: opacity 0.3s ease, color 0.3s ease;
}

.hero__side-char:hover {
  opacity: 1;
  color: var(--color-accent);
}

.hero__content {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
}

.hero__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3.2vw, 3.2rem);
  font-weight: 400;
  line-height: 1.35;
  color: var(--color-text);
  max-width: 52ch;
}

.hero__heading em {
  font-style: normal;
  color: var(--color-accent);
  font-weight: 600;
}

.hero__heading-hash {
  color: var(--color-accent);
  font-weight: 300;
  margin-right: 0.3rem;
  opacity: 0.7;
}

.hero__bottom {
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
}

.hero__scroll {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hero__scroll-line {
  width: 3rem;
  height: 1px;
  background: var(--color-text-muted);
  opacity: 0.6;
}

.hero__scroll-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.hero__badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--color-border);
  border-radius: 2rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.hero__badge:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
  }
}

@media (max-width: 1024px) {
  .hero__content {
    padding: 2rem 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem;
  }

  .hero__side {
    display: none;
  }

  .hero__content {
    grid-column: 1;
    padding: 2rem 0;
  }

  .hero__nav {
    grid-column: 1;
  }

  .hero__bottom {
    grid-column: 1;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .hero__heading {
    font-size: clamp(1.25rem, 5vw, 2rem);
  }
}
</style>
