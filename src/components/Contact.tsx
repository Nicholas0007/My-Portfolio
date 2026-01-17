import { Mail, Linkedin, Github, Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-cyan-400 mb-4">Get In Touch</h2>
        
        <p className="text-slate-300 max-w-2xl mx-auto mb-12">
          I'm currently looking for back-end developer opportunities. Whether you have a question 
          or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href="mailto:neoratsela966@gmail.com"
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">Email</p>
            <p className="text-slate-500">neoratsela966@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/neo-nicholas-ratsela/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">LinkedIn</p>
            <p className="text-slate-500">neo-nicholas-ratsela</p>
          </a>

          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">GitHub</p>
            <p className="text-slate-500">View My Repositories</p>
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1Fp5Ab0ahiofJgRhz2zQm3-NwH1ER_0VS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group"
          >
            <Download className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">Resume</p>
            <p className="text-slate-500">Download PDF</p>
          </a>
        </div>

        <a
          href="mailto:neoratsela966@gmail.com"
          className="inline-block px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-lg transition-all"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}