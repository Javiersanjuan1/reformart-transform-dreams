import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-foreground text-background py-10 px-4"
  >
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <motion.p
        className="font-display text-lg font-bold"
        whileHover={{ scale: 1.05 }}
      >
        Reform<span className="text-primary">Art</span>
      </motion.p>
      <p className="text-background/60">
        © {new Date().getFullYear()} ReformArt. Todos los derechos reservados.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
