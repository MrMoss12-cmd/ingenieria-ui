import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/s9VW7GmV/architect-3979490-1280.jpg"
                alt="C&C Ingeniería team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Excelencia en Ingeniería Civil
            </h2>
            
            <p className="text-lg text-gray-600">
              En C&C Ingeniería, combinamos experiencia técnica con innovación para 
              ofrecer soluciones de ingeniería civil que superan las expectativas 
              de nuestros clientes.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Equipo altamente calificado</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Soluciones innovadoras</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-gray-600">Compromiso con la calidad</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Conoce más sobre nosotros
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;