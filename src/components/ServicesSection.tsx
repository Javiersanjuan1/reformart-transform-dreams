import { motion } from "framer-motion";
import { Home, Bath, CookingPot, Paintbrush, Grid2x2, LayoutGrid, ArrowRight } from "lucide-react";

const services = [
  { icon: Home, title: "Reformas integrales", desc: "Renovación completa de tu vivienda, desde el diseño hasta la entrega de llaves." },
  { icon: Bath, title: "Reformas de baños", desc: "Baños modernos y funcionales con los mejores acabados y materiales." },
  { icon: CookingPot, title: "Reformas de cocinas", desc: "Cocinas a medida con diseños personalizados y electrodomésticos integrados." },
  { icon: Paintbrush, title: "Pintura y decoración", desc: "Pintura interior y exterior con técnicas profesionales y colores a tu elección." },
  { icon: Grid2x2, title: "Suelos y alicatados", desc: "Instalación de suelos de todo tipo: parquet, cerámica, porcelánico y más." },
  { icon: LayoutGrid, title: "Pladur y tabiquería", desc: "Tabiques, techos y muebles de pladur para optimizar tus espacios." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ServicesSection = () => (
  <section id="servicios" className="section-padding section-alt">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Nuestros <span className="text-gradient">servicios</span>
        </h2>
        <p className="text-muted-foreground text-lg">Todo lo que necesitas para transformar tu hogar</p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-background border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300"
              whileHover={{ rotate: 10 }}
            >
              <s.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </motion.div>
            <h3 className="text-lg font-display font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
              Saber más <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
