import { useState } from 'react';
import { motion } from 'framer-motion';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío al backend
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="reservas" className="relative section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
            >
              Reservaciones
            </motion.p>

            <h2 className="heading-md text-white mb-6">
              Reserva Tu
              <span className="text-gold-500"> Experiencia</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Garantiza tu lugar en Berlín's. Completa el formulario y nos pondremos 
              en contacto contigo para confirmar tu reservación.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Dirección</h3>
                  <p className="text-white/60">Av. Principal 123, Colonia Centro<br/>Ciudad de México, CDMX</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                  <p className="text-white/60">+52 55 1234 5678<br/>Lun - Dom: 1:00 PM - 11:00 PM</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-white/60">contacto@berlins.mx<br/>reservas@berlins.mx</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 md:p-10 shadow-2xl border border-gold-600/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3">¡Reserva Recibida!</h3>
                  <p className="text-white/70">Nos pondremos en contacto contigo pronto para confirmar.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-600/50 transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-600/50 transition-colors"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-600/50 transition-colors"
                        placeholder="55 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-white/80 text-sm font-medium mb-2">
                        Fecha *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white focus:outline-none focus:border-gold-600/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-white/80 text-sm font-medium mb-2">
                        Hora *
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white focus:outline-none focus:border-gold-600/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-white/80 text-sm font-medium mb-2">
                      Número de Personas *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white focus:outline-none focus:border-gold-600/50 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                      <option value="8+">8+ personas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                      Comentarios o Peticiones Especiales
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-black/50 border border-gold-600/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-600/50 transition-colors resize-none"
                      placeholder="Alguna alergia, celebración especial, etc."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Confirmar Reservación
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />
    </section>
  );
};

export default Reservations;
