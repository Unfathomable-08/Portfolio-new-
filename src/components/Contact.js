"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--primary)] flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl font-bold mb-3 text-center lg:text-left">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-lg mb-3 text-gray-300">
            I'm excited to connect! Whether you have a project idea, need assistance, or just want to chat about tech, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-cyan-400 text-xl" />
              <a 
                href="mailto:muhammad124711@gmail.com" 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                muhammad124711@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-github text-cyan-400 text-xl" />
              <a 
                href="https://github.com/unfathomable-08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                @Unfathomable-08
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            {['twitter', 'instagram', 'facebook-f', 'linkedin-in'].map((platform) => (
              <a 
                key={platform}
                href={`https://${platform}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 p-3 rounded-full border border-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <i className={`fab fa-${platform} text-xl`} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 p-4 rounded-xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Send a Message</h2>
          <div>
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-3 p-btn text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full mb-3 p-btn text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full mb-3 p-btn text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full mb-3 p-btn text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all h-32 resize-none"
                required
              />
              <button
                onClick={handleSubmit}
                className="w-full p-btn bg-[var(--secondary)] text-gray-900 font-semibold rounded-lg hover:bg-[var(--hover)] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}