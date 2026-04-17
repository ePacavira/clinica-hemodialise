import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { titleForPathname } from '../routes/documentTitles'

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titleForPathname(pathname)
  }, [pathname])

  return null
}
