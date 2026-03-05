import { motion } from 'framer-motion';
import { menuItems } from '../data/menuData';

const MenuCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-dark-500 clip-corner overflow-hidden shadow-2xl border-2 border-accent-500/20 hover:border-accent-500 hover:shadow-neon-yellow transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 left-4 px-4 py-2 bg-accent-500 backdrop-blur-sm clip-corner"
        >
          <p className="text-xs font-bold text-dark-500 tracking-[0.2em] uppercase font-mono">{item.category}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 bg-dark-500/95">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-500 transition-colors duration-300 uppercase tracking-wider">
            {item.name}
          </h3>
          <p className="text-2xl font-bold text-accent-500 ml-4 font-mono">{item.price}</p>
        </div>
        
        <p className="text-white/70 leading-relaxed mb-4 uppercase text-sm tracking-wide font-mono">
          {item.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 border-2 border-accent-500/50 text-accent-500 clip-corner hover:bg-accent-500 hover:text-dark-500 transition-all duration-300 font-bold uppercase tracking-wider font-mono text-sm"
        >
          [ Ordenar ]
        </motion.button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Menu = () => {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <section id="menu" className="relative section-padding bg-dark-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f2d51b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-500 text-sm md:text-base tracking-[0.4em] uppercase mb-4 font-bold font-mono"
          >
            /// MENÚ ///
          </motion.p>

          <h2 className="heading-lg text-white mb-6">
            PLATILLOS<br /><span className="text-accent-500">DESTACADOS</span>
          </h2>

          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wide font-mono">
            [ SABOR AUTÉNTICO · ACTITUD REBELDE · SIN COMPROMISOS ]
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-base px-12"
          >
            Ver Menú Completo
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Menu;
