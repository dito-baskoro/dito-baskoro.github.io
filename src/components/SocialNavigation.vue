<script setup>
import { contactEmail, socialLinks } from '../data/profile'

defineProps({
  variant: {
    type: String,
    default: 'hero',
    validator: (value) => ['hero', 'footer'].includes(value),
  },
})
</script>

<template>
  <nav :class="['social-nav', `social-nav--${variant}`]">
    <ul class="social-nav__links">
      <li v-for="link in socialLinks" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener">
          <span class="social-nav__abbr">{{ link.abbr }}</span>
          <span class="social-nav__name">{{ link.label }}</span>
        </a>
      </li>
    </ul>
    <a :href="`mailto:${contactEmail}`" class="social-nav__email">{{ contactEmail }}</a>
  </nav>
</template>

<style scoped>
.social-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.social-nav--footer {
  max-width: 1180px;
  margin: 0 auto;
}

.social-nav__links {
  display: flex;
  gap: 2rem;
}

.social-nav__links a {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.social-nav__links a:hover {
  color: var(--color-text);
}

.social-nav__abbr {
  margin-right: 0.1rem;
  color: var(--color-accent);
  font-weight: 700;
}

.social-nav__email {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.social-nav__email:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .social-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .social-nav__links {
    gap: 1.25rem;
  }

  .social-nav__name {
    display: none;
  }
}
</style>
