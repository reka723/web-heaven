import { useState } from 'react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const baseLinkStyles =
    'block px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors'

  const linkInactive =
    'text-muted-foreground hover:text-foreground hover:bg-muted'

  const linkActive = 'text-primary bg-muted'

  // Scroll sections
  const links = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <header className="w-full border-b border-border bg-background fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:min-w-2/3">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">Lumé Wellness</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="flex gap-2 items-center pr-12">
            {links.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50} // adjust for fixed header
                className={baseLinkStyles + ' ' + linkInactive}
                activeClass={linkActive}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <ThemeSwitcher />
        </nav>

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
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={baseLinkStyles + ' ' + linkInactive}
              onClick={() => setMobileOpen(false)} // close menu on click
            >
              {item.name}
            </ScrollLink>
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
