export const sections = [
  { id: 'about', label: 'About' },
  // { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const spyIds = ['home', ...sections.map((section) => section.id)]
