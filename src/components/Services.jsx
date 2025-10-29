import { motion } from 'framer-motion';
import { Battery, Smartphone, Zap, HelpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Battery,
      title: 'Battery Maintenance',
      description: 'Expert care for your EV battery with advanced diagnostics and optimization services.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Smartphone,
      title: 'Autonomous Software Updates',
      description: 'Your vehicle gets smarter with over-the-air updates and advanced AI capabilities.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Zap,
      title: 'Charging Solutions',
      description: 'Comprehensive charging infrastructure for home and on-the-go power delivery.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: HelpCircle,
      title: 'Customer Assistance',
      description: '24/7 support, expert advice, and personalized service for every Yantra owner.',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-[#0d0d0d] to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete ecosystem of support for your electric future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

