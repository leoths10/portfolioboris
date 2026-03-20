const projects = [
  {
    title: 'Stage – STMicroelectronics',
    description:
      `Administration des systèmes et réseaux au sein de STMicroelectronics. Gestion des postes, Active Directory, interventions sur l'infrastructure réseau de l'entreprise.`,
    tags: ['Active Directory', 'Windows Server', 'Réseau', 'Stage'],
    icon: '�',
    color: 'blue',
    link: '#',
  },
  {
    title: 'Stage – DGFIP',
    description:
      `Intervention au sein de la Direction Générale des Finances Publiques : support technique, administration des postes utilisateurs et gestion du parc informatique.`,
    tags: ['Support N1/N2', 'Parc informatique', 'Windows', 'Stage'],
    icon: '🏛️',
    color: 'cyan',
    link: '#',
  },
  {
    title: 'Projet BAREC',
    description:
      `Projet pédagogique de mise en place d'une infrastructure réseau sécurisée pour une entreprise fictive : routage, VLAN, firewall et services réseau.`,
    tags: ['Cisco', 'VLAN', 'Firewall', 'Routage'],
    icon: '🌐',
    color: 'violet',
    link: '#',
  },
  {
    title: 'Projet Saint-Chély d\'Apcher',
    description:
      `Mise en place d'une infrastructure réseau pour une collectivité : déploiement des équipements, configuration des services et documentation technique.`,
    tags: ['Infrastructure', 'DNS', 'DHCP', 'Documentation'],
    icon: '🏘️',
    color: 'emerald',
    link: '#',
  },
  {
    title: 'Certification Ethical Hacker – NetAcad',
    description:
      `Formation de 70h sur les techniques de tests d'intrusion et la sécurisation des systèmes. Laboratoires pratiques, scénarios réels et défi Capture the Flag.`,
    tags: ['Cybersécurité', 'Pentest', 'CTF', 'NetAcad'],
    icon: '🛡️',
    color: 'orange',
    link: '#',
  },
  {
    title: 'Veille technologique – Sécurité Active Directory',
    description:
      `Veille menée sur les vulnérabilités et les bonnes pratiques de sécurisation d'Active Directory : attaques Kerberoasting, Pass-the-Hash, GPO de durcissement.`,
    tags: ['Active Directory', 'Cybersécurité', 'Veille', 'GPO'],
    icon: '🔍',
    color: 'rose',
    link: '#',
  },
]

const cardBorder: Record<string, string> = {
  blue: 'hover:border-blue-500/50',
  cyan: 'hover:border-cyan-500/50',
  violet: 'hover:border-violet-500/50',
  emerald: 'hover:border-emerald-500/50',
  orange: 'hover:border-orange-500/50',
  rose: 'hover:border-rose-500/50',
}

const tagStyle: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Projets</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Mes réalisations</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Projets réalisés en cours, en stage ou en autonomie dans le cadre de ma formation BTS SIO SISR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${cardBorder[p.color]} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="text-3xl">{p.icon}</div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${tagStyle[p.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="inline-flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mt-1"
              >
                Voir le projet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
