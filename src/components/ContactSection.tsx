import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
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

  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "608 30 47 06", href: "tel:608304706" },
    { icon: Mail, label: "Email", value: "reformartsantos@gmail.com", href: "mailto:reformartsantos@gmail.com" },
    { icon: MapPin, label: "Zona", value: "Comunidad de Madrid", href: undefined },
  ];

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
          <p className="text-muted-foreground text-lg">Presupuestos sin compromiso</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0"
                >
                  <c.icon className="w-5 h-5 text-accent-foreground" />
                </motion.div>
                <div>
                  <p className="font-semibold">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-muted-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-muted-foreground">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="tel:608304706" className="flex-1">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="hero" className="w-full" size="lg">
                    <Phone className="w-5 h-5" />
                    Llamar ahora
                  </Button>
                </motion.div>
              </a>
              <a href="https://wa.me/34608304706?text=Hola,%20me%20gustaría%20pedir%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="flex-1">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="whatsapp" className="w-full" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-display font-semibold mb-2">Pide tu presupuesto gratis</h3>
            {[
              { placeholder: "Tu nombre", key: "name", type: "text" },
              { placeholder: "Tu teléfono", key: "phone", type: "tel" },
              { placeholder: "Tu email", key: "email", type: "email" },
            ].map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Input
                  placeholder={field.placeholder}
                  type={field.type}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  required={field.key !== "email"}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Textarea
                placeholder="Describe tu proyecto..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Send className="w-5 h-5" />
                Enviar solicitud
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
