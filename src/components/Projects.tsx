import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'BudgetSmart App',
      description: 'A comprehensive budgeting and savings application that helps users manage their finances by allocating funds, tracking expenses, and achieving savings goals.',
      technologies: ['Kotlin', 'Android Studio', 'SQLite', 'Material Design'],
      features: [
        'Budget allocation and tracking',
        'Savings goals management',
        'Expense categorization',
        'Financial insights and reports',
      ],
      github: 'https://github.com/dashboard',
    },
    {
      id: 2,
      title: 'ThreadNest - Clothing App',
      description: 'An e-commerce mobile application for browsing and purchasing clothing items with a modern, user-friendly interface.',
      technologies: ['Kotlin', 'Android Studio', 'Firebase', 'Material Design'],
      features: [
        'Product catalog and search',
        'Shopping cart functionality',
        'User authentication',
        'Order management system',
      ],
      github: 'https://github.com/dashboard',
    },
    {
      id: 3,
      title: 'Gift of the Givers',
      description: 'A philanthropic platform connecting donors and volunteers with people in need, inspired by the Gift of the Givers organization.',
      technologies: ['C#', '.NET', 'SQL Server', 'ASP.NET'],
      features: [
        'Donation management system',
        'Volunteer registration and scheduling',
        'Cause tracking and updates',
        'Secure payment processing',
      ],
      github: 'https://github.com/dashboard',
    },
    {
      id: 4,
      title: 'Lecturer Claims System',
      description: 'An administrative system enabling lecturers to log their teaching hours, submit claims, and process salary payments efficiently.',
      technologies: ['C#', '.NET', 'SQL Server', 'Windows Forms'],
      features: [
        'Class entry and hour tracking',
        'Automated salary calculations',
        'Claim submission and approval workflow',
        'Reporting and audit trails',
      ],
      github: 'https://github.com/dashboard',
    },
    {
      id: 5,
      title: 'Real Estate App',
      description: 'A property listing mobile application for browsing real estate listings, viewing property details, and connecting with agents.',
      technologies: ['Kotlin', 'Android Studio', 'Firebase', 'Google Maps API'],
      features: [
        'Property search and filtering',
        'Interactive map integration',
        'Property details and image galleries',
        'Agent contact functionality',
      ],
      github: 'https://github.com/dashboard',
    },
    {
      id: 6,
      title: 'Recipe Management App',
      description: 'A console-based recipe manager with a menu of 7 options for creating, scaling, and managing recipes and ingredients.',
      technologies: ['C#', '.NET', 'Console Application'],
      features: [
        'Add new recipes and ingredients',
        'Scale ingredient quantities',
        'Reset scaling to default values',
        'Delete and replace ingredients',
      ],
      github: 'https://github.com/dashboard',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-cyan-400 mb-4">Featured Projects</h2>
        
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
          Here are some of my projects showcasing mobile development, back-end systems, and application development skills.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}