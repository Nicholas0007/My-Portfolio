import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 mb-6">
            <img 
              src="https://i.imgur.com/8eJqlUu.jpg" 
              alt="Neo Nicholas Ratsela"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.classList.add('bg-gradient-to-br', 'from-cyan-400', 'to-blue-600', 'flex', 'items-center', 'justify-center');
                  parent.innerHTML = '<span class="text-white text-5xl">NR</span>';
                }
              }}
            />
          </div>
        </div>

        <h1 className="text-white mb-4">
          Hi, I'm <span className="text-cyan-400">Neo Nicholas Ratsela</span>
        </h1>

        <h2 className="text-slate-300 mb-6">
          Aspiring Back-End Software Developer
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Passionate about building scalable server-side applications, RESTful APIs, and database architectures. 
          Software development graduate currently expanding my skills in cybersecurity to build more secure and robust applications.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/Nicholas0007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/neo-nicholas-ratsela/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:neoratsela966@gmail.com"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}