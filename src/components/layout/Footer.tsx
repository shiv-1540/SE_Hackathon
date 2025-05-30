import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-serif font-bold text-white">Harmonia</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Elevate your musical journey with expert-led courses, interactive lessons, and a 
              supportive global community of musicians.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-200">All Courses</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors duration-200">Community</Link></li>
              <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors duration-200">Certifications</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Become an Instructor</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Piano</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Guitar</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Music Theory</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Composition</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Voice</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">Get the latest updates on new courses and features</p>
            </div>
            <div className="w-full md:w-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full md:w-64 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900"
              />
              <button className="bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-white px-4 py-2 rounded-r-md flex items-center">
                <Mail className="h-5 w-5 mr-2" /> Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>© {new Date().getFullYear()} Harmonia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;