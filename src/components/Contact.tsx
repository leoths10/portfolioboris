import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-24 px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Me contacter</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Une proposition de stage, d'alternance ou simplement envie d'échanger ? Écris-moi !
          </p>
        </div>

        {sent ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-emerald-400 font-semibold text-lg">Message envoyé !</p>
            <p className="text-gray-400 text-sm mt-2">Je te répondrai dans les plus brefs délais.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jean@exemple.fr"
                  className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="subject">Sujet</label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Proposition de stage"
                className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Bonjour Boris, je souhaitais..."
                className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Envoyer le message
            </button>
          </form>
        )}

        {/* Liens sociaux */}
        <div className="flex justify-center gap-6 mt-10">
          {[
            { label: 'GitHub', icon: '💻', href: '#' },
            { label: 'LinkedIn', icon: '🔗', href: '#' },
            { label: 'Email', icon: '✉️', href: 'mailto:boris@exemple.fr' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
