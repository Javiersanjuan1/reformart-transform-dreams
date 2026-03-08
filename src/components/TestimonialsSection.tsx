import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background border border-border rounded-xl p-6 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
            <p className="font-semibold text-sm">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
