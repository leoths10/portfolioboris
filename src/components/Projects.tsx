const projects = [
  {
    title: 'Infrastructure réseau entreprise',
    description:
      `Conception et déploiement d'un réseau d'entreprise avec VLAN, routage inter-VLAN, DHCP, DNS et pare-feu pfSense sous Packet Tracer.`,
    tags: ['Cisco', 'VLAN', 'pfSense', 'DHCP'],
    icon: '🏢',
    color: 'blue',
    link: '#',
  },
  {
    title: 'Serveur Active Directory',
    description:
      `Mise en place d'un domaine Windows Server avec AD DS, GPO, gestion des utilisateurs, des groupes et des partages réseau.`,
    tags: ['Windows Server', 'Active Directory', 'GPO'],
    icon: '🗂️',
    color: 'cyan',
    link: '#',
  },
  {
    title: 'VPN site-à-site IPsec',
    description:
      `Interconnexion de deux sites distants via un tunnel VPN IPsec configuré sur des routeurs Cisco et pfSense.`,
    tags: ['VPN', 'IPsec', 'pfSense', 'Cisco'],
    icon: '🔐',
    color: 'violet',
    link: '#',
  },
  {
    title: 'Supervision réseau Zabbix',
    description:
      `Déploiement d'une solution de supervision avec Zabbix pour monitorer les équipements réseau, créer des alertes et des dashboards.`,
    tags: ['Zabbix', 'Linux', 'SNMP', 'Monitoring'],
    icon: '📊',
    color: 'emerald',
    link: '#',
  },
  {
    title: 'Script de sauvegarde automatique',
    description:
      `Script Bash pour automatiser la sauvegarde de fichiers critiques vers un NAS, avec rotation des sauvegardes et notification mail.`,
    tags: ['Bash', 'Linux', 'Cron', 'NAS'],
    icon: '⚙️',
    color: 'orange',
    link: '#',
  },
  {
    title: 'Déploiement serveur web Apache',
    description:
      `Installation et configuration d'un serveur Apache sur Debian avec Virtual Hosts, HTTPS (Let's Encrypt) et sécurisation.`,
    tags: ['Apache', 'Debian', 'HTTPS', 'SSL'],
    icon: '🌍',
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
