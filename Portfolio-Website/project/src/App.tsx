import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, ExternalLink, Mail, Linkedin, Menu, X } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      category: "Data Analysis",
      tags: ["Frontend", "Data Analysis"],
      description: "Interactive dashboard for analyzing sales patterns and customer behavior",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      category: "ML",
      tags: ["ML", "Backend"],
      description: "Machine learning model to predict customer churn with 94% accuracy",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend",
      tags: ["Frontend", "React"],
      description: "Modern 3D portfolio website with theme switching and animations",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      category: "Frontend",
      tags: ["Frontend", "Angular"],
      description: "Collaborative task management application with real-time updates",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "API Gateway Service",
      category: "Backend",
      tags: ["Backend"],
      description: "Scalable API gateway with rate limiting and authentication",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Social Media Sentiment Analysis",
      category: "ML",
      tags: ["ML", "Data Analysis"],
      description: "Real-time sentiment analysis of social media posts using NLP",
      github: "#",
      live: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const skills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "React.js", level: 88, category: "Web Dev" },
    { name: "Machine Learning", level: 82, category: "Data Science" },
    { name: "SQL", level: 90, category: "Database" },
    { name: "Tableau", level: 85, category: "Visualization" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Kovarthana
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="px-4 py-2 space-y-1">
              {['home', 'projects', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center text-6xl font-bold text-purple-600 dark:text-purple-300">
                    KK
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-gray-600 dark:text-gray-300">HI, I'M KOVARTHANA, I DESIGN</p>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                  THE PERFECT
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    PORTFOLIO
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">For Your Career.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform-gpu"
                >
                  <span className="relative z-10">Reach Out</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="text-sm text-gray-500 dark:text-gray-400 italic">click me ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore my latest work in data analysis, machine learning, and web development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Frontend', 'Backend', 'Angular', 'React', 'ML', 'Data Analysis'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                style={{ perspective: '1000px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-200/50 dark:border-purple-700/50">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    KK
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Kovarthana Karthikeyan
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400">
                      Data Analyst & ML Enthusiast
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Data Analyst and ML enthusiast from Bengaluru, with a passion for transforming 
                  raw data into actionable insights. I specialize in building web-based tools, 
                  intelligent models, and interactive dashboards that make information beautiful and accessible.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Python', 'SQL', 'React', 'Tableau', 'MongoDB', 'Machine Learning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Hackathons Won</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-purple-600 dark:text-purple-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to start your next project? Let's collaborate!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about data science and technology.
                </p>
                
                <div className="flex gap-4">
                  <a
                    href="mailto:kovarthana@example.com"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/kovarthana"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/kovarthana"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2 text-sm text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400 transition-all duration-200"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2 text-sm text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400 transition-all duration-200"
                    >
                      Your Email
                    </label>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      className="peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Your Message"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-2 text-sm text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 dark:peer-focus:text-purple-400 transition-all duration-200"
                    >
                      Your Message
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform-gpu active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 Designed & Built by Kovarthana Karthikeyan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;