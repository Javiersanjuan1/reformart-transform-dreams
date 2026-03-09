import { motion } from "framer-motion";
import logoImg from "@/assets/logo-reformart.png";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-foreground text-background py-10 px-4 relative overflow-hidden"
  >
    {/* Animated line divider */}
    <motion.div
      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <motion.div whileHover={{ scale: 1.05 }}>
        <img src={logoImg} alt="ReformArt logo" className="h-10 w-auto brightness-0 invert" />
      </motion.div>
      <motion.p
        className="text-background/60"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        © {new Date().getFullYear()} ReformArt. Todos los derechos reservados.
      </motion.p>
    </div>
  </motion.footer>
);

export default Footer;
