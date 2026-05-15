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
    <a :href="`mailto:${contactEmail}?Subject=Hello`" target="_blank" class="social-nav__email-btn">
      <span class="social-nav__led"></span>
      <span class="social-nav__email-text">{{ contactEmail }}</span>
    </a>
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

.social-nav__email-btn {
  display: flex;
  align-items: center;
  padding: 10px 14px 8px 12px;
  border-radius: 36px;
  background: var(--color-bg-alt);
  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.3),
    0 4px 7px 0 rgba(0, 0, 0, 0.4),
    0 0.5px 2px 0 rgba(0, 0, 0, 0.3),
    inset 0 -1px 0.2px 0 rgba(0, 0, 0, 0.4),
    inset 0 1px 0.2px 0 rgba(255, 255, 255, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.social-nav__email-btn:hover {
  color: inherit;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -0.5px 0.2px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0.2px 0 rgba(255, 255, 255, 0.03);
  transform: translateY(1px);
}

.social-nav__email-btn:hover .social-nav__led::after {
  opacity: 0;
}

.social-nav__led {
  position: relative;
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: var(--color-border);
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
}

.social-nav__led::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--color-accent);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.social-nav__email-text {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  white-space: nowrap;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.social-nav__email-btn:hover .social-nav__email-text {
  color: var(--color-text);
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
