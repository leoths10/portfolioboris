const skills = [
  {
    category: 'Réseaux',
    icon: '🌐',
    color: 'blue',
    items: ['Cisco IOS (CCNAv7)', 'VLAN / VTP / STP', 'Routage OSPF / RIP', 'NAT / PAT', 'Wi-Fi / 802.11'],
  },
  {
    category: 'Systèmes',
    icon: '🖥️',
    color: 'cyan',
    items: ['Windows Server 2019/2022', 'Active Directory / GPO', 'Linux Debian / Ubuntu', 'DNS / DHCP', 'VMware / VirtualBox'],
  },
  {
    category: 'Cybersécurité',
    icon: '🔒',
    color: 'violet',
    items: ['Ethical Hacking (NetAcad)', 'ANSSI MOOC Cybersécurité', 'Firewall pfSense', 'VPN IPsec / SSL', 'Durcissement AD'],
  },
  {
    category: 'Outils & Méthodes',
    icon: '⚙️',
    color: 'emerald',
    items: ['Notion (Agile / Scrum)', 'Bash / PowerShell', 'Packet Tracer / GNS3', 'Git / GitHub', 'Documentation technique'],
  },
]

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  cyan: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400',
  violet: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
  emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
}

const tagColorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
  violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-24 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Compétences</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">Mon stack technique</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Les technologies et outils que j'utilise au quotidien dans le cadre de ma formation SISR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`rounded-2xl border p-6 ${colorMap[skill.color]} transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">{skill.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColorMap[skill.color]}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
