import { useEffect, useState, useLayoutEffect } from 'react'

const themes = ['default', 'blue', 'rose', 'green'] as const
const modes = ['light', 'dark'] as const

type Theme = (typeof themes)[number]
type Mode = (typeof modes)[number]

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('default')
  const [mode, setMode] = useState<Mode>('light')

  // Apply theme immediately on initial render
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const storedMode = localStorage.getItem('mode') as Mode | null

    if (storedTheme) setTheme(storedTheme)
    if (storedMode) setMode(storedMode)
  }, [])

  // Update document classes when theme or mode changes
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(...root.classList)

    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`)
    } else {
      root.classList.add(`${theme}`)
    }

    if (mode === 'dark') root.classList.add('dark')

    localStorage.setItem('theme', theme)
    localStorage.setItem('mode', mode)
  }, [theme, mode])

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
      <div className="flex gap-2 items-center">
        <span>Mode:</span>
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-2 py-1 border rounded ${
              mode === m ? 'bg-primary text-white' : 'bg-muted'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  )
}
