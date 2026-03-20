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
              Je m'appelle <span className="text-gray-900 dark:text-white font-medium">Joris Texier</span>, âgé de 21 ans,
              étudiant au lycée <span className="text-blue-500 dark:text-blue-400 font-medium">Paul Louis Courier à Tours</span> en
              2ème année de BTS SIO option <span className="text-blue-500 dark:text-blue-400 font-medium">SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</span>.
            </p>
            <p>
              J'ai toujours été attiré par l'informatique et les nouvelles technologies.
              C'est tout naturellement que je me suis tourné vers ce secteur d'études.
            </p>
            <p>
              J'ai eu l'opportunité d'effectuer de nombreux stages en milieu professionnel dans
              différentes entreprises disposant d'un service informatique (Audilab, DGFIP, STMicroelectronics).
              Mon objectif est d'intégrer un poste d'administrateur systèmes et réseaux.
            </p>
          </div>

          {/* Infos rapides */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: 'Formation', value: 'BTS SIO SISR' },
              { label: 'Localisation', value: 'Tours (37)' },
              { label: 'Disponibilité', value: 'Stage / Alternance' },
              { label: 'Âge', value: '21 ans' },
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
            { year: '2024 – 2026', title: 'BTS SIO – Option SISR', sub: 'Lycée Paul Louis Courier – Tours', icon: '🎓' },
            { year: '2025', title: 'Ethical Hacker – NetAcad', sub: 'Cisco Networking Academy', icon: '🛡️' },
            { year: '2024', title: 'Cisco CCNAv7 – Introduction to Networks', sub: 'NetAcad – Certification obtenue', icon: '📜' },
            { year: '2024', title: 'ANSSI – MOOC Cybersécurité', sub: 'Sécurité réseaux, cryptographie, législation', icon: '🔐' },
            { year: '2023 – 2024', title: 'Stages professionnels', sub: 'Audilab · DGFIP · STMicroelectronics', icon: '💼' },
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
