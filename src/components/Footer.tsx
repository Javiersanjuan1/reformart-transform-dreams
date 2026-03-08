const Footer = () => (
  <footer className="bg-foreground text-background py-10 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="font-display text-lg font-bold">
        Reform<span className="text-primary">Art</span>
      </p>
      <p className="text-background/60">
        © {new Date().getFullYear()} ReformArt. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
