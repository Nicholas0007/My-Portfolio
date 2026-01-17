import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-slate-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-slate-400 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
