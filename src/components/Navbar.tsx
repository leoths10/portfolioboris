import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Joris<span className="text-blue-400">.</span>SISR
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + ThemeToggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}
