export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-950 py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texte */}
        <div>
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">À propos</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">Qui suis-je ?</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Je suis <span className="text-gray-900 dark:text-white font-medium">Boris</span>, étudiant en 2ème année de BTS SIO
              option <span className="text-blue-500 dark:text-blue-400 font-medium">SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</span>.
            </p>
            <p>
              Passionné par les infrastructures informatiques, j'ai acquis des compétences solides en
              administration réseau, systèmes Windows et Linux, virtualisation et sécurité informatique.
            </p>
            <p>
              Mon objectif est d'intégrer un poste d'administrateur systèmes et réseaux ou de
              continuer mes études en licence professionnelle dans le domaine des réseaux et de la cybersécurité.
            </p>
          </div>

          {/* Infos rapides */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: 'Formation', value: 'BTS SIO SISR' },
              { label: 'Localisation', value: 'France' },
              { label: 'Disponibilité', value: 'Stage / Alternance' },
              { label: 'Statut', value: '2ème année' },
            ].map((info) => (
              <div key={info.label} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / Formations */}
        <div className="space-y-4">
          <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-6">Parcours & Certifications</h3>
          {[
            { year: '2024 – 2026', title: 'BTS SIO – Option SISR', sub: 'Lycée / CFA – France', icon: '🎓' },
            { year: '2024', title: 'Cisco CCNA – Introduction to Networks', sub: 'NetAcad – Auto-formation', icon: '📜' },
            { year: '2023', title: 'Baccalauréat NSI', sub: 'Mention Bien', icon: '🏅' },
            { year: '2023', title: 'Stage technicien réseau', sub: 'Administration réseaux & postes', icon: '💼' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">{item.year}</span>
                <p className="text-gray-900 dark:text-white font-medium text-sm mt-0.5">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
