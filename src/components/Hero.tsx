export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 relative overflow-hidden pt-16 transition-colors duration-300"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        {/* Grille de fond */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Étudiant BTS SIO – Option SISR
        </span>

        {/* Avatar placeholder */}
        <div className="w-28 h-28 rounded-full mx-auto mb-6 bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-blue-500/20">
          JT
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Bonjour, je suis{' '}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Joris Texier
          </span>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Étudiant de 21 ans au lycée Paul Louis Courier à Tours, en 2ème année de
          BTS SIO option SISR. Passionné par les réseaux, l'infrastructure et la cybersécurité.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-gray-600 hover:text-gray-400 transition-colors animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
