<script setup>
import SocialNavigation from './SocialNavigation.vue'
import { contactEmail } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer-nav">
    <div class="footer-nav__inner">
      <div class="footer-nav__cta">
        <p class="footer-nav__line">Have something worth building?</p>
        <a :href="`mailto:${contactEmail}`" class="footer-nav__email">
          {{ contactEmail }}
        </a>
      </div>

      <div class="footer-nav__meta">
        <SocialNavigation variant="footer" aria-label="Social links" />
        <p class="footer-nav__sign">Built by hand in Jakarta, {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-nav {
  padding: 5rem 2.5rem 3rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

.footer-nav__inner {
  max-width: 1180px;
  margin: 0 auto;
}

.footer-nav__line {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.footer-nav__email {
  display: inline-block;
  margin-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: clamp(1rem, 1.6vw, 1.35rem);
  font-weight: 700;
  color: var(--color-accent);
  border-bottom: 1px solid transparent;
  padding-bottom: 0.15rem;
  transition: border-color 0.25s ease;
}

.footer-nav__email:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.footer-nav__meta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.footer-nav__sign {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .footer-nav {
    padding: 3.5rem 1.5rem 2.5rem;
  }
}
</style>
