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
      className="group relative bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gold-600/10 hover:border-gold-600/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 left-4 px-4 py-2 bg-gold-600/90 backdrop-blur-sm rounded-lg"
        >
          <p className="text-xs font-semibold text-black tracking-wide">{item.category}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-playfair font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-2xl font-bold text-gold-500 ml-4">{item.price}</p>
        </div>
        
        <p className="text-white/70 leading-relaxed mb-4">
          {item.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 border-2 border-gold-600/30 text-gold-500 rounded-lg hover:bg-gold-600/10 transition-all duration-300 font-semibold"
        >
          Ordenar
        </motion.button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Menu = () => {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <section id="menu" className="relative section-padding bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d7b685 1px, transparent 0)`,
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
            className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
          >
            Nuestros Platillos
          </motion.p>

          <h2 className="heading-lg text-white mb-6">
            Menú Destacado
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Una selección de nuestros platillos más emblemáticos, preparados con ingredientes 
            de la más alta calidad y técnicas tradicionales alemanas.
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
            className="btn-primary text-lg px-12"
          >
            Ver Menú Completo
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gold-600/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Menu;
