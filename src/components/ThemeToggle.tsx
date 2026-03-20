import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
      className="relative w-14 h-7 rounded-full border border-gray-700 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
    >
      {/* Track */}
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-all duration-300 shadow-md ${
          theme === 'dark'
            ? 'translate-x-7 bg-gray-900'
            : 'translate-x-0 bg-white'
        }`}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
