import { useState } from 'react';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: 'Puente Metropolitano',
    category: 'Infraestructura Vial',
    description: 'Diseño y supervisión de un puente de 120 metros que conecta dos importantes áreas metropolitanas, mejorando significativamente el tráfico y reduciendo tiempos de traslado.',
    image: 'https://i.ibb.co/ZzgVCx78/road-construction-3992-1280.jpg',
  },
  {
    id: 2,
    title: 'Torre Corporativa Sustentable',
    category: 'Edificación Comercial',
    description: 'Proyecto de 25 pisos con certificación LEED Gold, incorporando tecnologías de ahorro energético y sistemas de captación de agua pluvial.',
    image: 'https://i.ibb.co/LzTs9H9G/crane-325038-1280.jpg',
  },
  {
    id: 3,
    title: 'Sistema de Tratamiento de Aguas',
    category: 'Ingeniería Hidráulica',
    description: 'Diseño e implementación de una planta de tratamiento de aguas residuales con capacidad para servir a una población de 50,000 habitantes.',
    image: 'https://i.ibb.co/LbGKWRv/construction-site-3302024-1280.jpg',
  },
];

const FeaturedProject = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conoce algunos de nuestros proyectos más emblemáticos que demuestran nuestra experiencia y capacidad técnica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <motion.div 
            className="relative rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
                {projects[activeProject].category}
              </span>
              <h3 className="text-xl font-bold text-white">{projects[activeProject].title}</h3>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{projects[activeProject].title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {projects[activeProject].description}
              </p>
            </div>

            {/* Project Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Explora nuestros proyectos:</h4>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center ${
                      activeProject === index 
                        ? 'bg-primary bg-opacity-10 border-l-4 border-primary' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div>
                      <h5 className={`font-medium ${activeProject === index ? 'text-primary' : 'text-gray-900'}`}>
                        {project.title}
                      </h5>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Ver todos los proyectos
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;