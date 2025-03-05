import { motion } from 'framer-motion';
import { FaBuilding, FaRoad, FaWater, FaHardHat, FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Service data
const services = [
  {
    id: 1,
    title: 'Diseño Estructural',
    description: 'Diseño de estructuras seguras y eficientes para edificios residenciales, comerciales e industriales.',
    icon: <FaBuilding className="h-10 w-10" />,
    link: '/servicios/diseno-estructural'
  },
  {
    id: 2,
    title: 'Infraestructura Vial',
    description: 'Planificación y diseño de carreteras, puentes y sistemas de transporte urbano.',
    icon: <FaRoad className="h-10 w-10" />,
    link: '/servicios/infraestructura-vial'
  },
  {
    id: 3,
    title: 'Ingeniería Hidráulica',
    description: 'Soluciones para sistemas de agua potable, drenaje, tratamiento de aguas residuales y control de inundaciones.',
    icon: <FaWater className="h-10 w-10" />,
    link: '/servicios/ingenieria-hidraulica'
  },
  {
    id: 4,
    title: 'Supervisión de Obras',
    description: 'Control de calidad y supervisión técnica durante todas las etapas de construcción de su proyecto.',
    icon: <FaHardHat className="h-10 w-10" />,
    link: '/servicios/supervision-obras'
  },
  {
    id: 5,
    title: 'Gestión de Proyectos',
    description: 'Coordinación integral de proyectos, desde la planificación hasta la entrega final.',
    icon: <FaClipboardCheck className="h-10 w-10" />,
    link: '/servicios/gestion-proyectos'
  },
  {
    id: 6,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento especializado para optimizar sus proyectos de ingeniería civil.',
    icon: <FaChartLine className="h-10 w-10" />,
    link: '/servicios/consultoria-tecnica'
  }
];

const ServicesOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ofrecemos soluciones integrales en ingeniería civil para todo tipo de proyectos
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Saber más
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/servicios">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Ver todos nuestros servicios
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;