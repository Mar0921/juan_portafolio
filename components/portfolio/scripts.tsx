import { FileText, ScrollText, ClipboardList, ListOrdered, Download } from "lucide-react"
import { SectionHeading } from "./section-heading"

const documents = [
  {
    icon: ScrollText,
    type: "Cortometraje",
    title: "La profecía incorrecta",
    detail: "Guion completo",
    href: "/Profecia incorrecta.pdf",
  },
  {
    icon: FileText,
    type: "Cortometraje",
    title: "Script My Project (Versión rostro con gusanos)",
    detail: "Guion completo",
    href: "/Script My Project (Versión rostro con gusanos).pdf",
  },
  {
    icon: ClipboardList,
    type: "Cortometraje",
    title: "Money v1",
    detail: "Guion completo",
    href: "/Money v1.pdf",
  },
  {
    icon: ListOrdered,
    type: "Cortometraje",
    title: "Money v2",
    detail: "Guion completo",
    href: "/Money v2.pdf",
  },
  {
    icon: FileText,
    type: "Cortometraje",
    title: "Los boxeadores no lloran",
    detail: "Guion completo",
    href: "/Los boxeadores no lloran.pdf",
  },
  {
    icon: ScrollText,
    type: "Cortometraje",
    title: "Bombón",
    detail: "Guion completo",
    href: "/Bombón.pdf",
  },
]

export function Scripts() {
  return (
    <section id="guiones" className="bg-card/40 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="Guiones" kicker="Escritura" />

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Una selección de mi trabajo escrito: cortometrajes completos y tratamientos. Descarga los
          guiones directamente desde aquí.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {documents.map((d) => (
            <a
              key={d.title}
              href={d.href}
              download
              target="_blank"
              rel="noopener noreferrer"
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
