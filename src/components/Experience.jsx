import { motion } from 'framer-motion';

const Experience = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Recetas Auténticas",
      description: "Cada platillo sigue las recetas tradicionales alemanas transmitidas por generaciones"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ingredientes Premium",
      description: "Seleccionamos solo los mejores ingredientes, muchos importados directamente de Alemania"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para que disfrutes momentos especiales con familia y amigos"
    }
  ];

  return (
    <section id="nosotros" className="relative section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=1400&fit=crop"
                  alt="Interior del restaurante Berlín's"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold-600 rounded-2xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gold-600/20 rounded-2xl -z-10"
              />

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-gold-600/30"
              >
                <p className="text-4xl font-playfair font-bold text-gold-500 mb-1">25+</p>
                <p className="text-white/70 text-sm">Años de Tradición</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
            >
              Nuestra Historia
            </motion.p>

            <h2 className="heading-md text-white mb-6">
              Una Conexión Auténtica con la
              <span className="text-gold-500"> Cultura Alemana</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-white/70 text-lg leading-relaxed">
                Desde 1999, Berlín's ha sido el hogar de la auténtica cocina alemana en México. 
                Nuestra pasión por mantener vivas las tradiciones culinarias de Alemania nos ha 
                convertido en un referente gastronómico.
              </p>

              <p className="text-white/70 text-lg leading-relaxed">
                Cada plato que servimos cuenta una historia, cada sabor es un viaje a las raíces 
                de la cocina europea. Nuestro chef, con más de 20 años de experiencia, garantiza 
                que cada bocado sea una experiencia inolvidable.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-600 to-gold-500 rounded-lg flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-white mb-1 group-hover:text-gold-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#reservas')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Reserva Tu Mesa
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />
    </section>
  );
};

export default Experience;
