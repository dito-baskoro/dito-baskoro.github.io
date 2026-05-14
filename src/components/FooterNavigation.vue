<template>
  <footer class="footer-nav">
    <nav class="footer-nav__inner" aria-label="Footer navigation">
      <ul class="footer-nav__links">
        <li>
          <a href="https://github.com/ditobaskoro" target="_blank" rel="noopener">
            <span class="footer-nav__abbr">GH</span><span class="footer-nav__name">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ditobaskoro/" target="_blank" rel="noopener">
            <span class="footer-nav__abbr">LI</span><span class="footer-nav__name">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.last.fm/user/DitoBaskoro" target="_blank" rel="noopener">
            <span class="footer-nav__abbr">fm</span><span class="footer-nav__name">Last.fm</span>
          </a>
        </li>
      </ul>
      <a href="mailto:ditoanwar@me.com" class="footer-nav__email">ditoanwar@me.com</a>
    </nav>
  </footer>
</template>

<style scoped>
.footer-nav {
  padding: 2rem 2.5rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

.footer-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  margin: 0 auto;
}

.footer-nav__links {
  display: flex;
  gap: 2rem;
}

.footer-nav__links a {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.footer-nav__links a:hover {
  color: var(--color-text);
}

.footer-nav__abbr {
  margin-right: 0.1rem;
  color: var(--color-accent);
  font-weight: 700;
}

.footer-nav__email {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.footer-nav__email:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .footer-nav {
    padding: 1.5rem;
  }

  .footer-nav__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .footer-nav__links {
    gap: 1.25rem;
  }

  .footer-nav__name {
    display: none;
  }
}
</style>
