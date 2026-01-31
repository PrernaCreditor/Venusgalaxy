import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CosmicFooter = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const services = [
    { name: 'Business Consulting', path: '/services/consulting' },
    { name: 'Life Coaching', path: '/services/coaching' },
    { name: 'Trade Line Services', path: '/services/tradeline' },
  ];

  return (
    <footer className="relative overflow-hidden bg-black pt-12 pb-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/New Time Scale For The History Of The Moon Published — Forbes.jpg"
          alt="Moon History Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/Gemini_Generated_Image_hn05gshn05gshn05.png"
                alt="Venus Visions Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-[family-name:Playfair_Display] font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Venus Visions
              </span>
            </Link>
            <p className="text-white text-sm mb-4">
              Empowering businesses and individuals through creative, strategic solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zosyckworld" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@Zodawg81" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alonzo-hayes-0a96933a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-accent-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-white hover:text-accent-300 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              &copy; {currentYear} Venus Visions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => openModal('privacy')}
                className="text-white hover:text-gray-300 text-sm"
              >
                Privacy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="text-white hover:text-gray-300 text-sm"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-cyan-400/30">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-[family-name:Playfair_Display] font-bold text-white">
                  {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-300">
                {modalContent === 'terms' ? (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Terms of Service</h3>
                    <p className="mb-4 text-gray-300">Welcome to Venus Visions. These terms govern your use of our services and website.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">1. Services</h4>
                    <p className="mb-4 text-gray-300">We provide business consulting, life coaching, and trade line services to help you achieve your goals.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">2. User Responsibilities</h4>
                    <p className="mb-4 text-gray-300">You agree to provide accurate information and use our services in accordance with applicable laws.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">3. Limitation of Liability</h4>
                    <p className="mb-4 text-gray-300">Our liability is limited to the fullest extent permitted by law.</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Privacy Policy</h3>
                    <p className="mb-4 text-gray-300">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">1. Information We Collect</h4>
                    <p className="mb-4 text-gray-300">We collect information you provide directly to us, such as when you contact us or use our services.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">2. How We Use Information</h4>
                    <p className="mb-4 text-gray-300">We use your information to provide our services, communicate with you, and improve our offerings.</p>
                    <h4 className="text-lg font-semibold mb-2 text-white">3. Data Protection</h4>
                    <p className="mb-4 text-gray-300">We implement industry-standard security measures to protect your information.</p>
                  </div>
                )}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default CosmicFooter;