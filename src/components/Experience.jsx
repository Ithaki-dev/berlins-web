import { motion } from 'framer-motion';

const Experience = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "RECETAS UNDERGROUND",
      description: "TRADICIÓN ALEMANA SIN PRETENSIONES NI POSES"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "INGREDIENTES REALES",
      description: "CALIDAD SIN COMPROMISO · DIRECTO DE ALEMANIA"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "VIBE AUTÉNTICO",
      description: "ESPACIO DISEÑADO PARA GENTE REAL · SIN FILTROS"
    }
  ];

  return (
    <section id="nosotros" className="relative section-padding bg-dark-500">
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
                className="relative overflow-hidden clip-corner shadow-2xl border-2 border-accent-500/30"
              >
                <img
                  src="Buiding.png"
                  alt="Interior del restaurante Berlín's"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent-500 clip-corner -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-accent-500/20 clip-corner -z-10"
              />

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-dark-500/90 backdrop-blur-lg p-6 clip-corner border-2 border-accent-500"
              >
                <p className="text-4xl font-display font-bold text-accent-500 mb-1">25+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider font-mono">AÑOS DE ACTITUD</p>
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
              className="text-accent-500 text-sm md:text-base tracking-[0.4em] uppercase mb-4 font-bold font-mono"
            >
              /// NUESTRA HISTORIA ///
            </motion.p>

            <h2 className="heading-md text-white mb-6 uppercase">
              AUTÉNTICA COMIDA
              <br /><span className="text-accent-500">ALEMANA</span>
              <br />SIN PRETENSIONES
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-white/70 text-base leading-relaxed uppercase tracking-wide font-mono">
                [ DESDE 1999 · BERLÍN'S ES LA CASA DE LA VERDADERA COCINA ALEMANA EN MÉXICO ]
              </p>

              <p className="text-white/70 text-base leading-relaxed uppercase tracking-wide font-mono">
                [ CADA PLATO CUENTA UNA HISTORIA · CADA SABOR ES UN VIAJE SIN FILTROS A LAS RAÍCES DE EUROPA ]
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
                  <div className="flex-shrink-0 w-14 h-14 bg-accent-500 clip-corner flex items-center justify-center text-dark-500 group-hover:scale-110 group-hover:shadow-neon-yellow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-accent-500 transition-colors uppercase tracking-wider">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm uppercase tracking-wide font-mono">
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />
    </section>
  );
};

export default Experience;
