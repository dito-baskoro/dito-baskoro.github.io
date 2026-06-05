<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['exiting', 'complete'])

const counter = ref(0)
const loadingRef = ref(null)

const counterDisplay = computed(() => String(counter.value).padStart(3, '0'))

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let exitTimeline = null
let counterTween = null
let dismissed = false

function exit() {
  if (dismissed) return
  dismissed = true
  window.removeEventListener('keydown', onKeydown)
  counterTween?.kill()
  counter.value = 100

  emit('exiting')

  if (prefersReducedMotion()) {
    emit('complete')
    return
  }

  exitTimeline = gsap.timeline({ onComplete: () => emit('complete') })
  exitTimeline.to('.loading__progress-fill', {
    scaleX: 0,
    duration: 0.3,
    ease: 'power2.in',
  })
  exitTimeline.to(loadingRef.value, {
    yPercent: -100,
    duration: 1.1,
    ease: 'power4.inOut',
  }, '-=0.1')
}

function onKeydown(event) {
  if (event.key === 'Enter' || event.key === 'Escape' || event.key === ' ') {
    exit()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  if (prefersReducedMotion()) {
    counter.value = 100
    exit()
    return
  }

  // Entrance
  const intro = gsap.timeline()
  intro.from('.loading__initial', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.18,
    ease: 'power3.out',
  })
  intro.from('.loading__label', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.3')

  // Counter tracks real progress: fonts ready, plus a hard cap so it
  // always finishes even if font loading stalls. No fake fixed timer.
  const progress = { val: 0 }
  counterTween = gsap.to(progress, {
    val: 100,
    duration: 4,
    ease: 'power1.out',
    onUpdate() {
      counter.value = Math.floor(progress.val)
    },
  })

  const finish = () => {
    if (dismissed) return
    counterTween?.kill()
    gsap.to(progress, {
      val: 100,
      duration: 0.4,
      ease: 'power2.out',
      onUpdate() {
        counter.value = Math.floor(progress.val)
      },
      onComplete: exit,
    })
  }

  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()
  let settled = false
  const settleOnce = () => {
    if (settled) return
    settled = true
    finish()
  }
  fontsReady.then(settleOnce)
  // Hard ceiling: never gate longer than 4s regardless of load state.
  window.setTimeout(settleOnce, 4000)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  exitTimeline?.kill()
  counterTween?.kill()
})
</script>

<template>
  <div
    ref="loadingRef"
    class="loading"
    role="progressbar"
    aria-label="Loading"
    :aria-valuenow="counter"
    aria-valuemin="0"
    aria-valuemax="100"
    @click="exit"
  >
    <div class="loading__content">
      <div class="loading__initials">
        <span class="loading__initial">D</span>
        <span class="loading__initial">B</span>
      </div>
      <p class="loading__label">Dito Baskoro</p>
    </div>

    <div class="loading__counter">
      <span class="loading__counter-value">{{ counterDisplay }}</span>
      <span class="loading__counter-percent">%</span>
    </div>

    <p class="loading__skip">Click or press any key to skip</p>

    <div class="loading__progress">
      <div class="loading__progress-fill"></div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  will-change: transform;
}

.loading__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loading__initials {
  display: flex;
  gap: 2rem;
}

.loading__initial {
  font-family: var(--font-heading);
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 700;
  line-height: 1;
  color: var(--color-text);
}

.loading__label {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* Counter */
.loading__counter {
  position: absolute;
  bottom: 3rem;
  right: 4rem;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  font-family: var(--font-mono);
}

.loading__counter-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  font-variant-numeric: tabular-nums;
  min-width: 4ch;
  text-align: right;
}

.loading__counter-percent {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.loading__skip {
  position: absolute;
  bottom: 3rem;
  left: 4rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* Progress bar */
.loading__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-border);
  overflow: hidden;
}

.loading__progress-fill {
  height: 100%;
  width: 100%;
  background: var(--color-accent);
  transform-origin: left center;
}

/* Responsive */
@media (max-width: 768px) {
  .loading__counter {
    bottom: 2rem;
    right: 2rem;
  }

  .loading__skip {
    bottom: 2rem;
    left: 2rem;
    font-size: 0.62rem;
  }

  .loading__initial {
    font-size: clamp(4rem, 20vw, 8rem);
  }

  .loading__initials {
    gap: 1rem;
  }
}
</style>
