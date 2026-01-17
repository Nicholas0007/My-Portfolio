import {
  GraduationCap,
  Code,
  Database,
  Zap,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-cyan-400 mb-4">
          About Me
        </h2>

        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12">
          I'm a software development graduate with a passion for
          back-end development. Currently enhancing my skills
          with cybersecurity training to build secure, robust
          APIs and server-side applications. I love solving
          complex problems and optimizing system performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white mb-2">Education</h3>
            <p className="text-slate-400">
              Diploma In Software Developer
              <br />
              Class of 2025
            </p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white mb-2">Clean Code</h3>
            <p className="text-slate-400">
              Write maintainable, well-documented, and testable
              code
            </p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white mb-2">Database Design</h3>
            <p className="text-slate-400">
              Experience with SQL and NoSQL database
              architectures
            </p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white mb-2">Performance</h3>
            <p className="text-slate-400">
              Optimize APIs and queries for scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}