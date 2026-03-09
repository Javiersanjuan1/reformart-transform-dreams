import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    text: "Reformaron nuestro baño y cocina. El resultado fue espectacular, superaron nuestras expectativas. Muy profesionales y puntuales.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    text: "Hicieron la reforma integral de nuestro piso. Un trabajo impecable de principio a fin. Totalmente recomendables.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Nos pintaron toda la casa y cambiaron los suelos. Quedó como nueva. Excelente relación calidad-precio.",
    rating: 5,
  },
  {
    name: "Pedro Sánchez López",
    text: "Instalaron tabiques de pladur en nuestra oficina. Rápidos, limpios y con un acabado perfecto. Repetiremos seguro.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const TestimonialsSection = () => (
  <section id="opiniones" className="section-padding section-alt">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Lo que dicen nuestros <span className="text-gradient">clientes</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(var(--foreground) / 0.1)" }}
            className="bg-background border border-border rounded-xl p-6 flex flex-col relative overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + j * 0.08 }}
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">{t.name.charAt(0)}</span>
              </div>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
