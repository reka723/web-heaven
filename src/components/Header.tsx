import { useState } from 'react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation() // to highlight active route

  const baseLinkStyles =
    'block px-4 py-2 rounded-md text-m font-medium cursor-pointer transition-colors'

  const linkInactive = 'text-muted-foreground hover:text-foreground'

  const linkActive = 'text-primary bg-muted'

  // Routes for navigation
  const links = [
    { name: 'Szolgáltatások', to: '/szolgaltatasok' },
    { name: 'Rólunk', to: '/rolunk' },
    { name: 'GYIK', to: '/gyik' },
    { name: 'Kapcsolat', to: '/kapcsolat' },
  ]

  return (
    <header className="w-full border-b border-border bg-background fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-12 px-4 py-3 lg:min-w-2/3">
        {/* Logo */}
        <div className="text-xl font-bold text-primary overflow-hidden h-14">
          <Link to={'/'}>
            <img
              src="/icon.png"
              alt="Logo"
              className="h-16 w-auto" // height fixed, width auto
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="flex gap-2 items-center pr-12">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${baseLinkStyles} ${
                  location.pathname === item.to ? linkActive : linkInactive
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop Theme Switcher */}
        <div className="hidden md:flex">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 pb-4 bg-background">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${baseLinkStyles} ${
                location.pathname === item.to ? linkActive : linkInactive
              }`}
              onClick={() => setMobileOpen(false)} // close menu on click
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Theme Switcher */}
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
