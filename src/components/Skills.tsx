import React from 'react';
import { Palette, Server, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Adobe Creative Suite', level: 60 },
        { name: 'Sketch', level: 85 },
        { name: 'Prototyping', level: 30 },
        { name: 'User Research', level: 63 },
        { name: 'Design Systems', level: 75 },
      ]
    },
    {
      title: 'DevOps & Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Docker & Kubernetes', level: 25 },
        { name: 'CI/CD Pipelines', level: 20 },
        { name: 'AWS/Azure/GCP', level: 45 },
        { name: 'React.js', level: 50 },
        { name: 'Node.js', level: 50 },
        { name: 'MongoDB/PostgreSQL', level: 60 },
      ]
    },
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'SEO & SEM', level: 75 },
        { name: 'Social Media Marketing', level: 88 },
        { name: 'Content Strategy', level: 85 },
        { name: 'Content Creating', level: 87 },
        { name: 'Analytics & Reporting', level: 70 },
        { name: 'Brand Development', level: 83 },
      ]
    }
  ];

  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'React', category: 'Development' },
    { name: 'Google Analytics', category: 'Marketing' },
    { name: 'Adobe premiere pro', category: 'Video Editing' },
    { name: 'Adobe XD', category: 'Design' },
    { name: 'Terraform', category: 'DevOps' },
    { name: 'HubSpot', category: 'Marketing' },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="skills-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skill.name} skill level: ${skill.level}%`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  title={`${tool.name} - ${tool.category}`}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;