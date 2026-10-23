import { createContext, useContext } from 'react'

export const CaseStudyContext = createContext({
  openCaseStudy: () => {},
})

export function useCaseStudy() {
  return useContext(CaseStudyContext)
}
