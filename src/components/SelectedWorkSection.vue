<script setup>
import { featuredProject as project } from '../data/projects'
</script>

<template>
  <section
    id="selected-work"
    class="selected-work"
    aria-labelledby="selected-work-heading"
  >
    <div class="selected-work__content">
      <header class="selected-work__header">
        <p class="selected-work__eyebrow">
          Selected work <span aria-hidden="true">/</span> {{ project.index }}
        </p>
        <div class="selected-work__introduction">
          <h2 id="selected-work-heading" class="selected-work__heading">
            Designed, built, shipped.
          </h2>
          <p class="selected-work__lead">
            A closer look at a product shaped from first idea to working
            software.
          </p>
        </div>
      </header>

      <article class="project" aria-labelledby="runedex-title">
        <div class="project__visual">
          <div class="project__window-bar" aria-hidden="true">
            <span>runedex.app</span>
            <span class="project__window-status">Live</span>
          </div>

          <div class="project__screen">
            <p class="project__signal">Activity received</p>
            <img
              class="project__icon"
              :src="project.image"
              :alt="project.imageAlt"
              width="1024"
              height="1024"
              decoding="async"
              loading="lazy"
            />
            <p class="project__wordmark" aria-hidden="true">Runedex</p>
            <p class="project__screen-tagline">{{ project.tagline }}</p>

            <ol class="project__flow" aria-label="Runedex activity flow">
              <li>Strava sync</li>
              <li>Context engine</li>
              <li>Encounter reveal</li>
            </ol>
          </div>
        </div>

        <div class="project__details">
          <p class="project__kicker">
            {{ project.category }}
            <span aria-hidden="true">·</span>
            {{ project.status }}
          </p>
          <h3 id="runedex-title" class="project__title">{{ project.name }}</h3>
          <p class="project__summary">{{ project.summary }}</p>
          <p class="project__description">{{ project.description }}</p>

          <dl class="project__metadata">
            <div>
              <dt>Role</dt>
              <dd>{{ project.role }}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{{ project.year }}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{{ project.status }}</dd>
            </div>
          </dl>

          <div class="project__highlights">
            <h4>What makes it work</h4>
            <ul>
              <li
                v-for="(highlight, index) in project.highlights"
                :key="highlight"
              >
                <span aria-hidden="true">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <p>{{ highlight }}</p>
              </li>
            </ul>
          </div>

          <ul class="project__technologies" aria-label="Technologies used">
            <li v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>

          <a
            class="project__link"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the Runedex live product (opens in a new tab)"
          >
            Visit live product
            <span class="project__link-arrow" aria-hidden="true"></span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.selected-work {
  padding: 8rem 2.5rem;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

.selected-work__content {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

.selected-work__header {
  display: grid;
  grid-template-columns: minmax(10rem, 0.45fr) minmax(0, 1.55fr);
  gap: 3rem;
  align-items: end;
  margin-bottom: 5rem;
}

.selected-work__eyebrow,
.project__kicker {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.selected-work__heading {
  max-width: 10ch;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 7.5rem);
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--color-text);
}

.selected-work__lead {
  max-width: 42ch;
  margin-top: 1.75rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 300;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.project {
  --runedex-black: #07060f;
  --runedex-surface: #12101f;
  --runedex-orange: #fc4c02;
  --runedex-amber: #ffb547;
  --runedex-cyan: #4ad9ff;
  --runedex-magenta: #ff3df2;

  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.project__visual {
  position: relative;
  min-height: clamp(34rem, 52vw, 45rem);
  overflow: hidden;
  isolation: isolate;
  border: 1px solid color-mix(in oklch, var(--runedex-amber) 30%, transparent);
  border-radius: 1.25rem;
  background-color: var(--runedex-black);
  box-shadow: 0 2rem 5rem rgb(0 0 0 / 25%);
}

.project__visual::before {
  position: absolute;
  z-index: -2;
  inset: 0;
  content: '';
  background-image:
    linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px);
  background-size: 22px 22px;
}

.project__visual::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  content: '';
  pointer-events: none;
  background:
    radial-gradient(circle at 30% 32%, rgb(255 181 71 / 18%), transparent 35%),
    radial-gradient(circle at 75% 72%, rgb(74 217 255 / 12%), transparent 32%),
    repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 3px,
      rgb(255 255 255 / 2%) 3px,
      rgb(255 255 255 / 2%) 4px
    );
}

.project__window-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 45%);
}

.project__window-status {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--runedex-amber);
}

.project__window-status::before {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--runedex-orange);
  content: '';
  box-shadow: 0 0 0.75rem var(--runedex-orange);
}

.project__screen {
  display: flex;
  min-height: calc(clamp(34rem, 52vw, 45rem) - 3rem);
  padding: clamp(2rem, 5vw, 4rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.project__signal {
  align-self: flex-start;
  padding: 0.45rem 0.65rem;
  border: 1px solid rgb(255 181 71 / 35%);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  line-height: 1;
  color: var(--runedex-amber);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project__signal::before {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background: var(--runedex-orange);
  content: '';
  box-shadow: 0 0 0.6rem var(--runedex-orange);
}

.project__icon {
  width: clamp(6rem, 13vw, 9rem);
  height: auto;
  margin-top: auto;
  filter: drop-shadow(0 1.25rem 2rem rgb(0 0 0 / 45%));
}

.project__wordmark {
  margin-top: 1.25rem;
  font-family: var(--font-mono);
  font-size: clamp(2.25rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 0.9;
  color: var(--runedex-amber);
  letter-spacing: -0.08em;
  text-transform: uppercase;
  text-shadow:
    -3px -1px 0 var(--runedex-cyan),
    3px 2px 0 var(--runedex-magenta);
}

.project__screen-tagline {
  margin-top: 1rem;
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: rgb(255 255 255 / 72%);
}

.project__flow {
  display: grid;
  width: 100%;
  margin-top: auto;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid rgb(255 255 255 / 10%);
}

.project__flow li {
  position: relative;
  padding: 0.8rem 0.5rem;
  font-family: var(--font-mono);
  font-size: clamp(0.55rem, 1vw, 0.68rem);
  line-height: 1.4;
  color: rgb(255 255 255 / 58%);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.project__flow li + li {
  border-left: 1px solid rgb(255 255 255 / 10%);
}

.project__details {
  min-width: 0;
  padding-top: 0.5rem;
}

.project__title {
  margin-top: 1.25rem;
  font-family: var(--font-heading);
  font-size: clamp(3.75rem, 8vw, 7rem);
  font-weight: 650;
  line-height: 0.85;
  letter-spacing: -0.05em;
  color: var(--color-text);
}

.project__summary {
  margin-top: 2rem;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 400;
  line-height: 1.35;
  color: var(--color-text);
}

.project__description {
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.project__metadata {
  display: grid;
  margin-top: 2.5rem;
  padding: 1.25rem 0;
  grid-template-columns: 1.5fr 0.55fr 0.8fr;
  gap: 1.25rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.project__metadata dt,
.project__highlights h4 {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  line-height: 1.4;
  color: var(--color-text-dim);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project__metadata dd {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--color-text);
}

.project__highlights {
  margin-top: 2.5rem;
}

.project__highlights ul {
  margin-top: 1rem;
}

.project__highlights li {
  display: grid;
  padding: 1rem 0;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: 0.75rem;
  border-top: 1px solid var(--color-border);
}

.project__highlights li > span {
  padding-top: 0.12rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-accent);
}

.project__highlights p {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.project__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 2rem;
}

.project__technologies li {
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 0.67rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.project__link {
  display: inline-flex;
  min-height: 2.75rem;
  margin-top: 2.5rem;
  padding-bottom: 0.2rem;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--color-accent);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.04em;
}

.project__link-arrow {
  position: relative;
  width: 0.7rem;
  height: 0.7rem;
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transition: transform 0.25s ease;
}

.project__link-arrow::after {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 0.9rem;
  height: 1px;
  background: currentColor;
  content: '';
  transform: rotate(-45deg);
  transform-origin: right center;
}

.project__link:hover .project__link-arrow {
  transform: translate(0.2rem, -0.2rem);
}

@media (max-width: 900px) {
  .selected-work {
    padding: 5rem 1.5rem;
  }

  .selected-work__header,
  .project {
    grid-template-columns: 1fr;
  }

  .selected-work__header {
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  .project {
    gap: 3.5rem;
  }

  .project__visual {
    min-height: min(43rem, 90vw);
  }

  .project__screen {
    min-height: calc(min(43rem, 90vw) - 3rem);
  }
}

@media (max-width: 560px) {
  .project__visual {
    min-height: 32rem;
    border-radius: 0.85rem;
  }

  .project__screen {
    min-height: 29rem;
    padding: 1.5rem;
  }

  .project__metadata {
    grid-template-columns: 1fr 0.55fr;
  }

  .project__metadata div:first-child {
    grid-column: 1 / -1;
  }

  .project__flow {
    grid-template-columns: 1fr;
  }

  .project__flow li {
    padding: 0.55rem;
  }

  .project__flow li + li {
    border-top: 1px solid rgb(255 255 255 / 10%);
    border-left: 0;
  }
}
</style>
