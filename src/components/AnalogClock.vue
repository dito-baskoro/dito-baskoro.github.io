<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
  size: {
    type: Number,
    default: 180,
  },
})

const clockCanvas = ref(null)

const jakartaPartsFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
})

const getJakartaTimeParts = (date) =>
  Object.fromEntries(
    jakartaPartsFormatter
      .formatToParts(date)
      .filter(({ type }) => type !== 'literal')
      .map(({ type, value }) => [type, Number(value)]),
  )

const drawHand = (context, length, width, angle, color) => {
  context.save()
  context.rotate(angle)
  context.beginPath()
  context.moveTo(0, 10)
  context.lineTo(0, -length)
  context.lineWidth = width
  context.lineCap = 'round'
  context.strokeStyle = color
  context.stroke()
  context.restore()
}

const drawClock = () => {
  const canvas = clockCanvas.value
  if (!canvas) return

  const dpr = window.devicePixelRatio || 1
  const context = canvas.getContext('2d')
  const styles = getComputedStyle(document.documentElement)
  const accent = styles.getPropertyValue('--color-accent').trim() || '#c8ff00'
  const text = styles.getPropertyValue('--color-text').trim() || '#ffffff'
  const muted = styles.getPropertyValue('--color-text-muted').trim() || '#777777'
  const border = styles.getPropertyValue('--color-border').trim() || '#2a2a2a'
  const center = props.size / 2
  const radius = props.size * 0.433

  canvas.width = props.size * dpr
  canvas.height = props.size * dpr
  context.setTransform(dpr, 0, 0, dpr, 0, 0)
  context.clearRect(0, 0, props.size, props.size)
  context.translate(center, center)

  context.beginPath()
  context.arc(0, 0, radius, 0, Math.PI * 2)
  context.strokeStyle = border
  context.lineWidth = 1
  context.stroke()

  for (let index = 0; index < 60; index += 1) {
    const angle = (index / 60) * Math.PI * 2
    const isHour = index % 5 === 0
    context.save()
    context.rotate(angle)
    context.beginPath()
    context.moveTo(0, isHour ? -radius + 6 : -radius + 2)
    context.lineTo(0, -radius)
    context.lineWidth = isHour ? 1.8 : 0.75
    context.strokeStyle = isHour ? text : muted
    context.stroke()
    context.restore()
  }

  const { hour, minute, second } = getJakartaTimeParts(props.date)
  const secondAngle = (second / 60) * Math.PI * 2
  const minuteAngle = ((minute + second / 60) / 60) * Math.PI * 2
  const hourAngle = (((hour % 12) + minute / 60) / 12) * Math.PI * 2

  drawHand(context, props.size * 0.233, 4, hourAngle, text)
  drawHand(context, props.size * 0.333, 2.5, minuteAngle, text)
  drawHand(context, props.size * 0.367, 1.25, secondAngle, accent)

  context.beginPath()
  context.arc(0, 0, 4, 0, Math.PI * 2)
  context.fillStyle = accent
  context.fill()
}

onMounted(drawClock)
watch(() => props.date, drawClock)
</script>

<template>
  <canvas
    ref="clockCanvas"
    class="analog-clock"
    :width="size"
    :height="size"
    aria-label="Analog clock showing Jakarta time"
  ></canvas>
</template>

<style scoped>
.analog-clock {
  width: clamp(5rem, 8vw, 7rem);
  height: clamp(5rem, 8vw, 7rem);
  flex: 0 0 auto;
}

@media (max-width: 520px) {
  .analog-clock {
    width: 5.25rem;
    height: 5.25rem;
  }
}
</style>
