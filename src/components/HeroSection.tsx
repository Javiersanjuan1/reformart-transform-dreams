import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-reform.jpg";
import { useRef } from "react";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const titleWords = ["Obras,", "Reformas"];

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Reforma moderna de hogar"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ y: imgY }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative floating shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border-2 border-primary/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[8%] w-14 h-14 rounded-full bg-primary/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[15%] w-8 h-8 border border-primary/30 rotate-45 hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[15%] w-32 h-32 rounded-full bg-primary/5 blur-2xl hidden lg:block"
      />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
        >
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">Más de 10 años de experiencia</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-2">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="text-gradient inline-block">para tue Instae Instalaciones    </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          En RePresupuestos sin compromiso · Tormamos tus ideas en espacios reales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#contacto">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(24 100% 50% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Button variant="hero" size="lg" className="text-lg px-10 py-6">
                Pide tu presupuesto gratis
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
