import { motion } from 'framer-motion';
import { Battery, Zap, Gauge, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Models = () => {
  const models = [
    {
      id: 1,
      name: 'Model One',
      category: 'Performance Sedan',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-Y/6390/1753873275226/front-left-side-47.jpg?impolicy=resize&imwidth=480',
      specs: {
        range: '500 mi',
        speed: '155 mph',
        price: '$89,990',
      },
    },
    {
      id: 2,
      name: 'Model Two',
      category: 'Luxury SUV',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1756377780877/front-left-side-47.jpg?tr=w-664',
      specs: {
        range: '350 mi',
        speed: '130 mph',
        price: '$99,990',
      },
    },
    {
      id: 3,
      name: 'Model Three',
      category: 'Sport Coupe',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-3/5251/1752499542036/front-left-side-47.jpg?tr=w-664',
      specs: {
        range: '400 mi',
        speed: '165 mph',
        price: '$109,990',
      },
    },
  ];

  return (
    <section id="models" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Models</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the perfect electric vehicle for your lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black/40 rounded-2xl overflow-hidden hover:bg-black/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-400 mb-4">{model.category}</p>

                {/* Specs */}
                <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-sm">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Range: {model.specs.range}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Gauge className="w-4 h-4 text-red-400" />
                    <span className="text-gray-300">Top Speed: {model.specs.speed}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <DollarSign className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 font-semibold">{model.specs.price}</span>
                  </div>
                </div>

                <Link to={`/models/${model.name.toLowerCase().replace(/\s+/g, '')}`} className="btn-outline w-full block text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;

