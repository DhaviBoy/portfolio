import React from 'react';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '1+', icon: Calendar },
    { label: 'Projects Completed', value: '5+', icon: Award },
    { label: 'Happy Clients', value: '2+', icon: Heart },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover my journey, skills, and passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span>Based in Sri Lanka</span> {/* TODO: Update with actual location */}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Crafting Digital Excellence Through Design & Technology
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                Hello! I'm A.M. Dhavishka Chathuranda Adhikari, a passionate and motivated student currently
                pursuing my Diploma in Information Technology at the Institute of Technology, University of 
                Moratuwa (ITUM).
                </p>

                <p>
                Alongside my academic journey, I'm actively involved in creative and digital fields. I manage
                my own YouTube channel where I share content related to entertainment and marketing. I also work 
                on brand marketing and graphic designing, helping businesses grow their online presence with 
                eye-catching visuals and effective branding strategies.
                </p>

                <p>
                I enjoy learning new skills, exploring digital trends, and using technology to solve real-world problems.
                I'm always open to opportunities that allow me to grow, collaborate, and make an impact.
                </p>
              </div>

              {/* Quick Skills */}
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'React/Next.js', 'DevOps/CI-CD', 'Digital Strategy', 'Brand Design'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Content Creater
                </h4>
                <ul className="space-y-3">
                  {[
                    'Entertainment Videos',
                    'Brand Marketing',
                    'Public Speaking'
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
