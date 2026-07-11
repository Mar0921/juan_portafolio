import { Mail, Phone, Briefcase, AtSign } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Correo",
    value: "Calcetinesrosadosinc@gmail.com",
    href: "mailto:Calcetinesrosadosinc@gmail.com",
  },
  { icon: Phone, label: "Teléfono", value: "317 079 4878", href: "tel:+573170794878" },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "Juan Andrés Castrillón",
    href: "https://www.linkedin.com/in/juan-andres-castrillon-9776a2392?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  { icon: AtSign, label: "Instagram", value: "@Juan_andres0996", href: "https://instagram.com/Juan_andres0996" },
]

export function Contact() {
  return (
    <footer id="contacto" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Contacto
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-foreground sm:text-7xl">
              Trabajemos
              <br />
              juntos
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              ¿Tienes un proyecto en mente o quieres colaborar en un rodaje? Escríbeme y hablemos de
              cómo contar tu historia.
            </p>
            <a
              href="mailto:Calcetinesrosadosinc@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Enviar un correo
            </a>
          </div>

          <div className="flex flex-col justify-center gap-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/60"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="font-semibold text-foreground">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <span className="font-display text-lg text-foreground">Juan Castrillón</span>
          <span>Cineasta · Director & Guionista</span>
          <span>© {new Date().getFullYear()} · Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  )
}
