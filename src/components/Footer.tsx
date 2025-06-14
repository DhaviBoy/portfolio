import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dhavishka Adhikari</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating exceptional digital experiences through thoughtful design, 
                robust infrastructure, and strategic marketing solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2" aria-label="Footer navigation">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>DevOps & Cloud</li>
                <li>Digital Marketing</li>
                <li>Brand Strategy</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>and</span>
                <Code className="text-blue-400" size={16} />
                <span>and lots of</span>
                <Coffee className="text-yellow-600" size={16} />
              </div>

              <div className="text-gray-400 text-sm">
                © {currentYear} Dhavishka Adhikari. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;