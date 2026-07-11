const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Guiones", href: "#guiones" },
  { label: "Contacto", href: "#contacto" },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href="#inicio" className="font-display text-lg uppercase tracking-tight text-foreground">
          J. Castrillón<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full border border-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Colaborar
        </a>
      </div>
    </nav>
  )
}
