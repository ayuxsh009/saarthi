import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 md:px-20 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Saarthi</h3>
          <p className="text-gray-400 leading-relaxed">
            Saarthi offers interactive and engaging learning experiences to help
            children develop essential skills while having fun.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-indigo-500 transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-indigo-500 transition-all">
                Programs
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-indigo-500 transition-all">
                Resources
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-indigo-500 transition-all"
              >
                How it Works
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-indigo-500 transition-all">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Subscribe to our newsletter to receive updates on new programs and
            resources.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-4 py-2 rounded-r-full text-white hover:bg-indigo-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <i className="fas fa-envelope mr-2"></i> support@saarthi.com
            </li>
            <li className="text-gray-400">
              <i className="fas fa-phone-alt mr-2"></i> +1 (800) 123-4567
            </li>
            <li className="text-gray-400">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Saarthi St.,
              Fun City, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">
          &copy; 2025 Saarthi. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-indigo-500">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
