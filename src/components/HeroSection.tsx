import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-reform.jpg";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <motion.img
      src={heroImg}
      alt="Reforma moderna de hogar"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    />
    <div className="absolute inset-0 hero-overlay" />

    {/* Decorative floating shapes */}
    <motion.div
      variants={floatingVariants}
      animate="animate"
      className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border-2 border-primary/20 hidden lg:block"
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{ animationDelay: "1s" }}
      className="absolute bottom-1/3 right-[8%] w-14 h-14 rounded-full bg-primary/10 hidden lg:block"
    />
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] right-[15%] w-8 h-8 border border-primary/30 rotate-45 hidden lg:block"
    />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-6 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
      >
        <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">✨ Más de 10 años de experiencia</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
      >
        Reformas profesionales
        <br />
        <motion.span
          className="text-gradient inline-block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          para tu hogar
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
      >
        En ReformArt transformamos tus ideas en espacios reales
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a href="#contacto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6">
              Pide tu presupuesto gratis
            </Button>
          </motion.div>
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#nosotros"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="w-8 h-8" />
    </motion.a>
  </section>
);

export default HeroSection;
