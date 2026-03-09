import { motion, useMotionValue, useTransform } from "framer-motion";
import { Eye } from "lucide-react";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";

const images = [
  { src: galleryBathroom, alt: "Reforma de baño moderno", label: "Baño" },
  { src: galleryKitchen, alt: "Reforma de cocina moderna", label: "Cocina" },
  { src: galleryLiving, alt: "Reforma de salón", label: "Salón" },
  { src: galleryBedroom, alt: "Reforma de dormitorio", label: "Dormitorio" },
];

const TiltCard = ({ img, i }: { img: typeof images[0]; i: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.15 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer perspective-1000"
    >
      <motion.img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
          initial={false}
        >
          <motion.div
            initial={false}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Eye className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <span className="text-primary-foreground font-display text-xl font-semibold">
            {img.label}
          </span>
        </motion.div>
      </div>
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
};

const GallerySection = () => (
  <section id="galeria" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Galería de <span className="text-gradient">trabajos</span>
        </motion.h2>
        <p className="text-muted-foreground text-lg">Algunos de nuestros proyectos más recientes</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
        {images.map((img, i) => (
          <TiltCard key={img.label} img={img} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
