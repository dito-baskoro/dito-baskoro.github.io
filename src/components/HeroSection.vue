<script setup>
import { watch } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  animate: Boolean,
})

watch(
  () => props.animate,
  (val) => {
    if (val) runEntrance()
  },
)

function runEntrance() {
  const tl = gsap.timeline({ delay: 0.2 })

  // Nav slides down
  tl.from('.hero__nav', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Heading reveals
  tl.from('.hero__heading', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.4')

  // Side chars stagger in
  tl.from('.hero__side-char', {
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power2.out',
  }, '-=0.6')

  // Bottom area
  tl.from('.hero__scroll', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
  }, '-=0.3')

  // Badge pops in
  tl.from('.hero__badge', {
    opacity: 0,
    scale: 0.8,
    rotation: -10,
    duration: 0.6,
    ease: 'back.out(1.7)',
  }, '-=0.3')

  // Start continuous scroll-line animation
  tl.add(() => {
    gsap.to('.hero__scroll-line', {
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
  <section class="hero">
    <!-- Navigation -->
    <nav class="hero__nav">
      <ul class="hero__nav-links">
        <li>
          <a href="https://github.com/ditobaskoro" target="_blank" rel="noopener">
            <span class="hero__nav-abbr">GH</span><span class="hero__nav-name">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ditobaskoro/" target="_blank" rel="noopener">
            <span class="hero__nav-abbr">LI</span><span class="hero__nav-name">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.last.fm/user/DitoBaskoro" target="_blank" rel="noopener">
            <span class="hero__nav-abbr">fm</span><span class="hero__nav-name">Last.fm</span>
          </a>
        </li>
      </ul>
      <a href="mailto:ditoanwar@me.com" class="hero__nav-email">ditoanwar@me.com</a>
    </nav>

    <!-- Left decorative text -->
    <div class="hero__side hero__side--left">
      <span class="hero__side-char">/</span>
      <span class="hero__side-char">D</span>
      <span class="hero__side-char">E</span>
      <span class="hero__side-char">V</span>
    </div>

    <!-- Main content -->
    <div class="hero__content">
      <h1 class="hero__heading">
        <span class="hero__heading-hash">#</span>
        I'm <em>Dito</em>, a creative developer
        crafting immersive digital experiences
        that merge design &amp; technology.
        Let's build something remarkable.
      </h1>
    </div>

    <!-- Right decorative text -->
    <div class="hero__side hero__side--right">
      <span class="hero__side-char">C</span>
      <span class="hero__side-char">O</span>
      <span class="hero__side-char">D</span>
      <span class="hero__side-char">E</span>
      <span class="hero__side-char">&amp;</span>
      <span class="hero__side-char">2</span>
      <span class="hero__side-char">6</span>
    </div>

    <!-- Bottom bar -->
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

/* ─── Navigation ─── */
.hero__nav {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
}

.hero__nav-links {
  display: flex;
  gap: 2rem;
}

.hero__nav-links a {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.hero__nav-links a:hover {
  color: var(--color-text);
}

.hero__nav-abbr {
  color: var(--color-accent);
  font-weight: 700;
  margin-right: 0.1rem;
}

.hero__nav-email {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.hero__nav-email:hover {
  color: var(--color-accent);
}

/* ─── Side decorative columns ─── */
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

/* ─── Main heading ─── */
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

/* ─── Bottom bar ─── */
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

/* ─── Responsive ─── */
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
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .hero__nav-links {
    gap: 1.25rem;
  }

  .hero__nav-name {
    display: none;
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
