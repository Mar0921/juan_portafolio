import { FileText, ScrollText, ClipboardList, ListOrdered, Download } from "lucide-react"
import { SectionHeading } from "./section-heading"

const documents = [
  {
    icon: ScrollText,
    type: "Cortometraje escrito",
    title: "Bajo la Lluvia",
    detail: "Guion literario · 14 páginas",
  },
  {
    icon: FileText,
    type: "Escena",
    title: "El Último Café — Secuencia final",
    detail: "Fragmento dramático · 3 páginas",
  },
  {
    icon: ClipboardList,
    type: "Tratamiento",
    title: "Camino de Polvo",
    detail: "Tratamiento de largometraje · 8 páginas",
  },
  {
    icon: ListOrdered,
    type: "Escaleta",
    title: "La Mesa Vacía",
    detail: "Escaleta por secuencias · 2 páginas",
  },
]

export function Scripts() {
  return (
    <section id="guiones" className="bg-card/40 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="Guiones" kicker="Escritura" />

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Una selección de mi trabajo escrito: cortometrajes completos, escenas sueltas, tratamientos
          y escaletas. Documentos disponibles bajo solicitud.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {documents.map((d) => (
            <a
              key={d.title}
              href="#contacto"
              className="group flex items-center gap-5 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <d.icon className="size-6" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary">{d.type}</p>
                <h3 className="truncate font-display text-xl uppercase text-foreground">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.detail}</p>
              </div>
              <Download
                className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
