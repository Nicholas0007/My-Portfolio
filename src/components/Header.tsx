import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-cyan-400">
            <Code2 className="w-6 h-6" />
            <span className="text-white">Neo Nicholas Ratsela</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}