import { motion } from "framer-motion";
import { Hammer, Ruler, PaintBucket, Wrench, HardHat, Drill } from "lucide-react";

const items = [
  { icon: Hammer, text: "Reformas Integrales" },
  { icon: PaintBucket, text: "Pintura Profesional" },
  { icon: Ruler, text: "Diseño a Medida" },
  { icon: Wrench, text: "Fontanería" },
  { icon: HardHat, text: "Albañilería" },
  { icon: Drill, text: "Electricidad" },
];

const MarqueeStrip = () => (
  <div className="overflow-hidden bg-foreground py-4 relative">
    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-foreground to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-foreground to-transparent z-10" />
    <motion.div
      className="flex gap-12 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-background/70">
          <item.icon className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium tracking-wide uppercase">{item.text}</span>
          <span className="text-primary/40">•</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default MarqueeStrip;
