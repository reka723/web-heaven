import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router'

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
