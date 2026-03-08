import { motion } from "framer-motion";
import { ShieldCheck, Clock, Gem } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Confianza", desc: "Más de 10 años de experiencia avalan nuestro trabajo." },
  { icon: Clock, title: "Puntualidad", desc: "Nos comprometemos con los plazos acordados." },
  { icon: Gem, title: "Calidad", desc: "Materiales de primera y acabados impecables." },
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Sobre <span className="text-gradient">nosotros</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          ReformArt es una empresa especializada en reformas integrales con atención personalizada.
          Utilizamos materiales de la más alta calidad y nos comprometemos con los plazos de entrega.
          Nuestro objetivo es transformar tu hogar en el espacio que siempre has soñado.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
