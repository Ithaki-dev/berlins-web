import { motion } from 'framer-motion';
import { festivalsData } from '../data/festivalsData';

const Festivals = () => {
  const festivals = festivalsData;

  return (
    <section id="festivals" className="relative section-padding bg-dark-500">
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
            /// FESTIVALES ///
          </motion.p>

          <h2 className="heading-lg text-white mb-6">
            PRÓXIMOS<br /><span className="text-accent-500">EVENTOS</span>
          </h2>

          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed uppercase tracking-wide font-mono">
            [ MÚSICA EN VIVO · COMIDA ALEMANA · CERVEZA ARTESANAL · VIBE UNDERGROUND ]
          </p>
        </motion.div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-500 clip-corner overflow-hidden shadow-2xl border-2 border-accent-500/20 hover:border-accent-500 hover:shadow-neon-yellow transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-accent-500 clip-corner">
                  <p className="text-xs font-bold text-dark-500 tracking-[0.2em] uppercase font-mono">{festival.date}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-dark-500/95">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-500 transition-colors duration-300 uppercase tracking-wider mb-3">
                  {festival.name}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <p className="text-white/60 text-sm uppercase tracking-wide font-mono">{festival.location}</p>
                </div>
                
                <p className="text-white/70 leading-relaxed mb-4 uppercase text-sm tracking-wide font-mono">
                  {festival.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 border-2 border-accent-500/50 text-accent-500 clip-corner hover:bg-accent-500 hover:text-dark-500 transition-all duration-300 font-bold uppercase tracking-wider font-mono text-sm"
                >
                  [ MÁS INFO ]
                </motion.button>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark-500/80 clip-corner p-8 md:p-12 border-2 border-accent-500/30 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">
            ¿QUIERES TOCAR EN<br /><span className="text-accent-500">BERLÍN'S?</span>
          </h3>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-8 uppercase tracking-wide font-mono">
            [ ACEPTAMOS PROPUESTAS DE BANDAS · ROCK · PUNK · METAL · ELECTRÓNICA ]
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-base px-12"
          >
            Enviar Propuesta
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-60 h-60 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Festivals;
