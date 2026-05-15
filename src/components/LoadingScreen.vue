<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['exiting', 'complete'])

const counter = ref(0)
const loadingRef = ref(null)

const counterDisplay = computed(() => String(counter.value).padStart(3, '0'))

onMounted(() => {
  const tl = gsap.timeline()

  // Entrance: fade in initials
  tl.from('.loading__initial', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
  })

  // Entrance: label
  tl.from('.loading__label', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.3')

  // Entrance: decorations
  tl.from('.loading__deco', {
    opacity: 0,
    scale: 0.5,
    duration: 0.6,
    stagger: { each: 0.07, from: 'random' },
    ease: 'back.out(1.5)',
  }, '-=0.4')

  // Counter animation
  const counterObj = { val: 0 }
  tl.to(counterObj, {
    val: 100,
    duration: 2.2,
    ease: 'power2.inOut',
    onUpdate() {
      counter.value = Math.floor(counterObj.val)
    },
  }, '-=0.5')

  // Emit exiting before exit animation
  tl.add(() => emit('exiting'))

  // Progress bar fill
  tl.to('.loading__progress-fill', {
    scaleX: 0,
    duration: 0.3,
    ease: 'power2.in',
  })

  // Exit: slide the entire loading screen up
  tl.to(loadingRef.value, {
    yPercent: -100,
    duration: 1.2,
    ease: 'power4.inOut',
    onComplete() {
      emit('complete')
    },
  }, '-=0.1')
})
</script>

<template>
  <div ref="loadingRef" class="loading">
    <div class="loading__content">
      <div class="loading__initials">
        <span class="loading__initial">D</span>
        <span class="loading__initial">B</span>
      </div>
      <p class="loading__label">Fake Loading...</p>
    </div>

    <!-- Counter -->
    <div class="loading__counter">
      <span class="loading__counter-slash">/</span>
      <span class="loading__counter-value">{{ counterDisplay }}</span>
      <span class="loading__counter-percent">%</span>
    </div>

    <!-- Progress bar -->
    <div class="loading__progress">
      <div class="loading__progress-fill"></div>
    </div>

    <!-- Decorative characters -->
    <span class="loading__deco loading__deco--1">/</span>
    <span class="loading__deco loading__deco--2">&gt;</span>
    <span class="loading__deco loading__deco--3">&copy;</span>
    <span class="loading__deco loading__deco--4">]</span>
    <span class="loading__deco loading__deco--5">&lt;</span>
    <span class="loading__deco loading__deco--6">#</span>
    <span class="loading__deco loading__deco--7">{</span>
    <span class="loading__deco loading__deco--8">*</span>
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
  letter-spacing: 0.1em;
  text-transform: lowercase;
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

.loading__counter-slash {
  font-size: 1rem;
  color: var(--color-accent);
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

/* Decorative elements */
.loading__deco {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 1.25rem;
  color: var(--color-text-muted);
  opacity: 0.3;
  user-select: none;
  pointer-events: none;
}

.loading__deco--1 { top: 12%; left: 8%; }
.loading__deco--2 { top: 22%; right: 12%; }
.loading__deco--3 { bottom: 25%; left: 18%; }
.loading__deco--4 { top: 38%; left: 5%; }
.loading__deco--5 { bottom: 35%; right: 7%; }
.loading__deco--6 { top: 8%; right: 28%; }
.loading__deco--7 { bottom: 18%; left: 38%; }
.loading__deco--8 { top: 55%; right: 20%; }

/* Responsive */
@media (max-width: 768px) {
  .loading__counter {
    bottom: 2rem;
    right: 2rem;
  }

  .loading__initial {
    font-size: clamp(4rem, 20vw, 8rem);
  }

  .loading__initials {
    gap: 1rem;
  }
}
</style>
