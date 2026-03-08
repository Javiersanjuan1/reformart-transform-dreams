import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Contacta</span> con nosotros
          </h2>
          <p className="text-muted-foreground text-lg">Pide tu presupuesto sin compromiso</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Teléfono</p>
                <a href="tel:608304706" className="text-muted-foreground hover:text-primary transition-colors">608 30 47 06</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:reformartsantos@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">reformartsantos@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:608304706" className="flex-1">
                <Button variant="hero" className="w-full" size="lg">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </Button>
              </a>
              <a href="https://wa.me/34608304706?text=Hola,%20me%20gustaría%20pedir%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="whatsapp" className="w-full" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-display font-semibold mb-2">Pide tu presupuesto gratis</h3>
            <Input
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              placeholder="Tu teléfono"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <Input
              placeholder="Tu email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Textarea
              placeholder="Describe tu proyecto..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" variant="hero" className="w-full" size="lg">
              <Send className="w-5 h-5" />
              Enviar solicitud
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
