import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ShieldCheck, Clock, Gem } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  { icon: ShieldCheck, title: "Confianza", desc: "Más de 10 años de experiencia avalan nuestro trabajo." },
  { icon: Clock, title: "Puntualidad", desc: "Nos comprometemos con los plazos acordados." },
  { icon: Gem, title: "Calidad", desc: "Materiales de primera y acabados impecables." },
];

const stats = [
  { value: 500, suffix: "+", label: "Proyectos realizados" },
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

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
        <motion.p
          className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ReformArt es una empresa especializada en obras, reformas e instalaciones con atención personalizada.
          Utilizamos materiales de la más alta calidad y nos comprometemos con los plazos de entrega.
          Presupuestos sin compromiso. Nuestro objetivo es transformar tu hogar en el espacio que siempre has soñado.
        </motion.p>
      </motion.div>

      {/* Animated stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4 mb-16"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.3 }}
          >
            <p className="text-3xl md:text-5xl font-display font-bold text-primary">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <motion.p
              className="text-muted-foreground text-sm mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {s.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={itemVariants}
            whileHover={{
              y: -12,
              boxShadow: "0 25px 50px -15px hsl(var(--primary) / 0.25)",
              borderColor: "hsl(var(--primary) / 0.4)",
            }}
            className="bg-card border border-border rounded-xl p-8 text-center transition-colors"
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5"
              whileHover={{ rotate: 360, scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
              transition={{ duration: 0.6 }}
            >
              <f.icon className="w-7 h-7 text-accent-foreground" />
            </motion.div>
            <h3 className="text-xl font-display font-semibold mb-3">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
            {/* Animated underline */}
            <motion.div
              className="w-0 h-0.5 bg-primary mx-auto mt-4 rounded-full"
              whileInView={{ width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
