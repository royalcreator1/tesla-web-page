import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Modal from './Modal';
import ContactForm from './ContactForm';

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Driving Innovation Forward
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Yantra Motors is redefining sustainable mobility through AI-driven innovation 
              and design precision. We believe that the future of transportation should be 
              as elegant as it is efficient.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to accelerate the world's transition to sustainable energy through 
              innovative electric vehicles that combine cutting-edge technology with exceptional 
              design. Every Yantra vehicle is crafted with precision, powered by innovation, 
              and driven by the vision of a cleaner tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#models" className="btn-primary inline-flex items-center gap-2">
                Explore Our Models
                <ArrowRight className="w-5 h-5" />
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="btn-outline">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://media.istockphoto.com/id/1733213138/photo/ev-production-line-on-advanced-automated-smart-factory-high-performance-electric-car.jpg?s=612x612&w=0&k=20&c=Xx_xbNtO_xNfxy5gUxorhFtQqF8E-YffsKoNaVZf8-8="
              alt="Modern factory"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Overlay Stats */}
            <div className="absolute bottom-8 left-6 right-6 grid grid-cols-3 gap-4">
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-400">Vehicles Delivered</div>
              </div>
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-400">Cities Served</div>
              </div>
              <div className="glass-effect rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>
    </section>
  );
};

export default About;

