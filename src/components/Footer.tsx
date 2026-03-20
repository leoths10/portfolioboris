export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Joris<span className="text-blue-400">.</span>SISR
        </span>
        <p className="text-gray-500 dark:text-gray-600 text-sm">
          © {new Date().getFullYear()} Joris Texier — BTS SIO SISR
        </p>
        <p className="text-gray-400 dark:text-gray-700 text-xs">Fait avec React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  )
}
