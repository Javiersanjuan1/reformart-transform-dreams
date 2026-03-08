import { motion } from "framer-motion";
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-xl aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
              <span className="px-6 py-4 text-primary-foreground font-display text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
