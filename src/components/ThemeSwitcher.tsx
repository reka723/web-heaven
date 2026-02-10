import { useEffect, useState, useLayoutEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

const modes = ['light', 'dark'] as const
type Mode = (typeof modes)[number]

export function ThemeSwitcher() {
  const [mode, setMode] = useState<Mode>('light')

  // Apply mode immediately on initial render
  useLayoutEffect(() => {
    const storedMode = localStorage.getItem('mode') as Mode | null
    if (storedMode) setMode(storedMode)
  }, [])

  // Update document classes when mode changes
  useEffect(() => {
    const root = document.documentElement
    if (mode === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <div className="flex items-center gap-4">
      {modes.map((m) => {
        const isActive = mode === m
        return (
          <motion.button
            key={m}
            onClick={() => setMode(m)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, rotate: 20 }}
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`
              p-2 rounded-full border border-border transition-colors duration-300
              flex items-center justify-center
              ${isActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}
              hover:bg-accent-foreground hover:text-white
            `}
            aria-label={
              m === 'light' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {m === 'light' ? (
              <FaSun className="w-5 h-5" />
            ) : (
              <FaMoon className="w-5 h-5" />
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
