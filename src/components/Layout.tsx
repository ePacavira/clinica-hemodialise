import { Outlet, useLocation } from 'react-router-dom'
import { DocumentTitle } from './DocumentTitle'
import { FloatingClinicChat } from './FloatingClinicChat'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { paths } from '../routes/paths'

export function Layout() {
  const { pathname } = useLocation()
  const showFloatingChat = pathname !== paths.home

  return (
    <div className="bg-white text-slate-700">
      <DocumentTitle />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      {showFloatingChat ? <FloatingClinicChat /> : null}
      <Footer />
    </div>
  )
}
