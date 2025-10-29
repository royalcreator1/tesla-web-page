import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Battery, Gauge, DollarSign, Zap, Clock, Car, Settings } from 'lucide-react';

const ModelDetail = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();

  const modelData = {
    modelone: {
      name: 'Model One',
      category: 'Performance Sedan',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-Y/6390/1753873275226/front-left-side-47.jpg?tr=w-664',
      fullImage: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-Y/6390/1753873039124/exterior-image-164.jpg',
      price: '$89,990',
      specs: {
        range: '500 mi',
        topSpeed: '155 mph',
        acceleration: '2.8s',
        battery: '100 kWh',
        charging: '250 kW',
        seats: '5',
      },
      features: [
        'Autonomous Driving Hardware',
        '21" Performance Wheels',
        'Premium Interior',
        'Panoramic Glass Roof',
        'Premium Sound System',
        'Autopilot Advanced',
      ],
      description: 'Model One combines exceptional performance with cutting-edge technology. Experience the perfect blend of luxury and efficiency.',
    },
    modeltwo: {
      name: 'Model Two',
      category: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
      fullImage: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&q=80',
      price: '$99,990',
      specs: {
        range: '350 mi',
        topSpeed: '130 mph',
        acceleration: '4.2s',
        battery: '85 kWh',
        charging: '200 kW',
        seats: '7',
      },
      features: [
        'All-Wheel Drive',
        'Air Suspension',
        'Premium Seating',
        'Tow Package',
        'Cargo Configuration',
        'Off-Road Mode',
      ],
      description: 'Model Two redefines what a luxury SUV can be. Spacious, capable, and uncompromisingly electric.',
    },
    modelthree: {
      name: 'Model Three',
      category: 'Sport Coupe',
      image: 'https://images.unsplash.com/photo-1617486804004-6bc34c8c342d?w=1200&q=80',
      fullImage: 'https://images.unsplash.com/photo-1606664515528-c63b4800a6b3?w=1200&q=80',
      price: '$109,990',
      specs: {
        range: '400 mi',
        topSpeed: '165 mph',
        acceleration: '2.5s',
        battery: '95 kWh',
        charging: '300 kW',
        seats: '4',
      },
      features: [
        'Track Mode',
        'Performance Package',
        'Carbon Fiber Trim',
        'Sport Interior',
        'Racing Wheels',
        'Advanced Aerodynamics',
      ],
      description: 'Model Three delivers exhilarating performance. Built for the track, refined for the road.',
    },
  };

  const model = modelData[modelId?.toLowerCase()] || modelData.modelone;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-effect py-4 px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="text-2xl font-bold">YANTRA</div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{model.name}</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">{model.category}</p>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{model.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Full Image Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.img
            src={model.fullImage}
            alt={`${model.name} detailed view`}
            className="w-full h-[600px] object-cover rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Specifications</h2>
            <p className="text-gray-400 text-lg">Precision in every detail</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Battery, label: 'Range', value: model.specs.range, color: 'text-green-400' },
              { icon: Gauge, label: 'Top Speed', value: model.specs.topSpeed, color: 'text-red-400' },
              { icon: Zap, label: '0-60 Acceleration', value: model.specs.acceleration, color: 'text-yellow-400' },
              { icon: Battery, label: 'Battery', value: model.specs.battery, color: 'text-blue-400' },
              { icon: Zap, label: 'Fast Charging', value: model.specs.charging, color: 'text-orange-400' },
              { icon: Settings, label: 'Seating', value: model.specs.seats, color: 'text-purple-400' },
            ].map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className={`w-12 h-12 mb-4 ${spec.color}`} />
                  <div className="text-3xl font-bold mb-2">{spec.value}</div>
                  <div className="text-gray-400">{spec.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 text-lg">Designed for excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {model.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience {model.name}?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Starting at {model.price}. Configure and order now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Configure & Order
              </button>
              <button className="btn-outline">
                Schedule Test Drive
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModelDetail;

