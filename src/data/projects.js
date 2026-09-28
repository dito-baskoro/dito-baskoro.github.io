import runedexIcon from '../assets/projects/runedex-icon.svg'

export const featuredProject = {
  index: '01',
  name: 'Runedex',
  category: 'Product design & full-stack engineering',
  status: 'Live product',
  year: '2026',
  url: 'https://runedex.vercel.app/',
  tagline: 'Every kilometer is an encounter.',
  summary:
    'A Strava-powered creature collector that turns eligible runs, rides, walks, and hikes into contextual encounters.',
  description:
    'I designed and built an event-driven product where activity data becomes an explainable game loop: time, weather, terrain, and effort shape each encounter while distance powers companion evolution, weekly missions, and a 151-species collection.',
  role: 'Product design, UX & engineering',
  highlights: [
    'An idempotent webhook pipeline keeps activity processing, rewards, and collection progress reliable.',
    'A contextual encounter engine turns real-world conditions into a reveal users can understand.',
  ],
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Supabase',
    'Strava API',
    'Open-Meteo',
  ],
  image: runedexIcon,
  imageAlt:
    'Runedex pixel R app icon in amber with cyan and magenta chromatic shadows',
}
