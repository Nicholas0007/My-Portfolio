import { Server, Database, Cloud, GitBranch, TestTube, Lock } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Languages & Frameworks',
      skills: ['C#', 'Java', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Kotlin', '.NET', 'ASP.NET'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'SQL Server', 'SQLite', 'Firebase Realtime DB', 'SQL'],
    },
    {
      icon: Cloud,
      title: 'Development Tools',
      skills: ['Android Studio', 'Visual Studio Code', 'Firebase', 'Git', 'Windows Forms'],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'Version Control', 'Code Collaboration'],
    },
    {
      icon: TestTube,
      title: 'Development Skills',
      skills: ['Mobile Development', 'Backend Development', 'REST APIs', 'Console Applications', 'Desktop Apps'],
    },
    {
      icon: Lock,
      title: 'Security & Learning',
      skills: ['Cybersecurity (In Training)', 'Authentication', 'Secure Coding', 'Data Protection'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-cyan-400 mb-4">Technical Skills</h2>
        
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
          A comprehensive overview of the technologies and tools I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}