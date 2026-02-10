import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ScrollToTop />
      <main className="mt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
