const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const DownloadIcon = () => (
  <svg {...base}>
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
  </svg>
)

export const MailIcon = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const PhoneIcon = () => (
  <svg {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
)

export const CopyIcon = () => (
  <svg {...base}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 012-2h9" />
  </svg>
)

export const CheckIcon = () => (
  <svg {...base}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
)

export const ArrowRightIcon = () => (
  <svg {...base}>
    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

export const ArrowLeftIcon = () => (
  <svg {...base}>
    <path d="M19 12H5m0 0l6-6m-6 6l6 6" />
  </svg>
)

export const ArrowUpIcon = () => (
  <svg {...base}>
    <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
  </svg>
)

export const CloseIcon = () => (
  <svg {...base}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const MenuIcon = () => (
  <svg {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const LinkedInIcon = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5m0 2.5a2.5 2.5 0 015 0V16" />
  </svg>
)

export const MapPinIcon = () => (
  <svg {...base}>
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
