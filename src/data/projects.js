import runedexIcon from '../assets/projects/runedex-icon.svg'
import sinefilIcon from '../assets/projects/sinefil-icon.svg'

export const featuredProjects = [
  {
    id: 'runedex',
    index: '01',
    name: 'Runedex',
    category: 'Product design & full-stack engineering',
    status: 'Live product',
    year: '2026',
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
    visual: {
      variant: 'runedex',
      reverse: false,
      chromeLabel: 'runedex.app',
      chromeStatus: 'Live',
      signal: 'Activity received',
      wordmark: 'Runedex',
      flowLabel: 'Runedex activity flow',
      flow: ['Strava sync', 'Context engine', 'Encounter reveal'],
      image: {
        src: runedexIcon,
        alt: 'Runedex pixel R app icon in amber with cyan and magenta chromatic shadows',
        width: 1024,
        height: 1024,
      },
    },
    links: [
      {
        href: 'https://runedex.vercel.app/',
        label: 'Visit live product',
        ariaLabel: 'Visit the Runedex live product (opens in a new tab)',
      },
    ],
  },
  {
    id: 'sinefil',
    index: '02',
    name: 'Sinefil',
    category: 'Product design & full-stack engineering',
    status: 'Live product',
    year: '2026',
    tagline: 'Cek dulu, baru nonton.',
    summary:
      'An Indonesian-first social film journal for finding what to watch through local reviews, cultural context, and shared lists.',
    description:
      'I designed and built a server-first community product that combines TMDB discovery with half-star ratings, spoiler-safe notes, family-watch meters, local vibe tags, profiles, reactions, comments, follows, and curated lists.',
    role: 'Product design, UX & engineering',
    highlights: [
      'A lazy TMDB catalog cache creates stable local movie records without pre-importing the external database.',
      'Atomic review writes and owner-scoped row-level security keep ratings, context meters, tags, and social data consistent.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'TMDB API',
    ],
    visual: {
      variant: 'sinefil',
      reverse: true,
      chromeLabel: 'sinefil.vercel.app',
      chromeStatus: 'Live',
      signal: 'Catatan film Indonesia',
      wordmark: 'Sinefil',
      flowLabel: 'Sinefil discovery flow',
      flow: ['Cari film', 'Tulis kesan', 'Bagikan list'],
      image: {
        src: sinefilIcon,
        alt: 'Sinefil marigold app mark with a hand-drawn S on a dark ink background',
        width: 32,
        height: 32,
      },
    },
    links: [
      {
        href: 'https://sinefil.vercel.app/',
        label: 'Visit live product',
        ariaLabel: 'Visit the Sinefil live product (opens in a new tab)',
      },
      {
        href: 'https://github.com/dito-baskoro/sinefil',
        label: 'View source',
        ariaLabel: 'View the Sinefil source code on GitHub (opens in a new tab)',
      },
    ],
  },
]
