import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const TIME_ZONE = 'Asia/Jakarta'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const hourFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  hour: 'numeric',
  hour12: false,
})

const getStatusForHour = (hour) => {
  if (hour >= 23 || hour < 6) return "I'm probably sleeping, but leave a note"
  if (hour < 10) return 'Morning in Jakarta, easing into the day'
  if (hour < 18) return 'Currently building from Jakarta'
  return 'Jakarta evening, still around'
}

export function useJakartaClock() {
  const now = ref(new Date())
  let timer

  const time = computed(() => timeFormatter.format(now.value))
  const status = computed(() => getStatusForHour(Number(hourFormatter.format(now.value))))

  onMounted(() => {
    timer = window.setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onBeforeUnmount(() => {
    window.clearInterval(timer)
  })

  return {
    now,
    time,
    status,
  }
}
