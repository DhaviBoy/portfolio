import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import Image from '../assets/profile.jpg'

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/036/708/930/small_2x/curve-wave-blue-abstract-background-free-png.png')] from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
      role="main"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-60 h-60 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* profile photo */}
                <img className="w-full h-full object-cover rounded-full" src={Image} alt="Profile of Dhavishka Adhikari" />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dhavishka Adhikari
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Creative{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Youtuber</span>
              {', '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">DevOps Engineer</span>
              {', & '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Digital Marketing</span>
              {' '}specialist
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through thoughtful design, 
              robust infrastructure, and strategic marketing solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                aria-label="View my projects"
              >
                View My Work
                <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </button>

              <div className="flex gap-3">
                <a
                  href="#" 
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  aria-label="Download resume"
                >
                  <Download size={18} />
                  Resume
                </a>

                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  aria-label="Contact me"
                >
                  <Mail size={18} />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;