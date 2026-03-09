import { motion } from "framer-motion";
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
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Galería de <span className="text-gradient">trabajos</span>
        </h2>
        <p className="text-muted-foreground text-lg">Algunos de nuestros proyectos más recientes</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex flex-col items-center justify-center">
              <motion.div
                className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <Eye className="w-8 h-8 text-primary-foreground" />
                <span className="text-primary-foreground font-display text-xl font-semibold">
                  {img.label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
