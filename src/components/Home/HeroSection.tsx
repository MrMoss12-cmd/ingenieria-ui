import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="" 
          alt="C&C Ingeniería" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#255484]/90 to-black/70"></div>
      </div>
      
      {/* Geometric Shapes for Modern Look */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -top-20 w-96 h-96 bg-[#4B9CD3]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -left-32 bottom-0 w-80 h-80 bg-[#76B0DE]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#76B0DE]/20 border border-[#76B0DE]/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-[#76B0DE]">Ingeniería Civil de Excelencia</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Construyendo el <span className="text-[#76B0DE]">futuro</span> con precisión
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soluciones innovadoras en ingeniería civil para proyectos que transforman el entorno urbano y mejoran la calidad de vida.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/servicios">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-base font-medium bg-[#4B9CD3] hover:bg-[#76B0DE] text-white rounded-lg flex items-center gap-2 transition-all duration-300"
                >
                  Nuestros Servicios
                  <FaArrowRight className="ml-1" />
                </motion.button>
              </Link>
              
              <Link to="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-base font-medium border border-white/30 text-white rounded-lg backdrop-blur-sm hover:border-white/60 transition-all duration-300"
                >
                  Contáctanos
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Stats for credibility */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <p className="text-3xl font-bold text-[#76B0DE]">15+</p>
                <p className="text-sm text-gray-300">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#76B0DE]">200+</p>
                <p className="text-sm text-gray-300">Proyectos completados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#76B0DE]">50+</p>
                <p className="text-sm text-gray-300">Clientes satisfechos</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side image or 3D element - can be added later */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Placeholder for a 3D model or image */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://i.ibb.co/ks0GmMpn/taps-956497-1280.jpg" 
                alt="Proyecto de Ingeniería" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-light">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg 
              className="w-6 h-6 text-[#76B0DE]" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;