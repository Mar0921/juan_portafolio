import {
  Clapperboard,
  PenLine,
  Camera,
  Scissors,
  AudioLines,
  ClipboardList,
  Armchair,
  Palette,
} from "lucide-react"
import { SectionHeading } from "./section-heading"

const disciplines = [
  { icon: Clapperboard, title: "Dirección", desc: "Guiar el tono, el ritmo y la actuación de cada escena." },
  { icon: PenLine, title: "Guion", desc: "Estructura, diálogo y arco dramático de la historia." },
  { icon: Camera, title: "Dirección de foto", desc: "Encuadre, luz y lenguaje visual de la película." },
  { icon: Scissors, title: "Edición", desc: "Montaje y construcción del ritmo en la sala de corte." },
  { icon: AudioLines, title: "Sonido", desc: "Diseño sonoro, mezcla y ambientes." },
  { icon: ClipboardList, title: "Producción", desc: "Planeación, presupuesto y logística de rodaje." },
  { icon: Armchair, title: "Escenografía", desc: "Ambientación y dirección de espacios." },
  { icon: Palette, title: "Arte", desc: "Dirección de arte, color y atmósfera." },
]

const software = [
  { name: "DaVinci Resolve", tag: "Color / Edición" },
  { name: "Adobe Premiere Pro", tag: "Edición" },
  { name: "Adobe Audition", tag: "Sonido" },
  { name: "Pro Tools", tag: "Mezcla de audio" },
]

export function Skills() {
  return (
    <section id="habilidades" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" title="Habilidades" kicker="Lo que hago" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <d.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-xl uppercase text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-6 lg:p-8">
          <h3 className="font-display text-2xl uppercase text-foreground">Software</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {software.map((s) => (
              <div key={s.name} className="border-l-2 border-primary pl-4">
                <p className="font-semibold text-foreground">{s.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
