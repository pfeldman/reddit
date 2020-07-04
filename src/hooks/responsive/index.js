import { useMediaQuery } from 'react-responsive'

export const useIsMobile = () => {
  return useMediaQuery({ query: '(max-width: 1000px)' })
}
