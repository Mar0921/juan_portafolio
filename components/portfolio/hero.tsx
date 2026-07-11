import Image from "next/image"
import { Award, Clapperboard, Users } from "lucide-react"

const stats = [
  { icon: Clapperboard, value: "#", label: "Cortos dirigidos" },
  { icon: Award, value: "7", label: "Proyectos realizados" },
]

export function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden px-4 pt-6 sm:px-6 lg:px-10">
      {/* top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-border pb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
        <span>Portafolio Creativo</span>
        <span className="flex items-center gap-2">
          Disponible para colaborar
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        </span>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* giant title */}
        <h1 className="pointer-events-none select-none pt-4 text-center font-display text-[19vw] leading-[0.82] text-foreground sm:text-[17vw] lg:text-[15rem]">
          PORTAFOLIO
        </h1>

        {/* portrait + intro */}
        <div className="relative -mt-2 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-6">
          {/* left tag */}
          <div className="order-2 lg:order-1 lg:col-span-3 lg:pb-10">
            <p className="font-display text-3xl leading-none text-foreground sm:text-4xl">
              CINE / DIRECCIÓN
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Dirección
              <br />
              Guion
              <br />
            </p>
          </div>

          {/* portrait */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute -inset-3 rounded-lg bg-primary/20" aria-hidden="true" />
              <Image
                src="/images/juan-portrait.png"
                alt="Retrato en blanco y negro de Juan Castrillón, cineasta"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="relative z-10 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* right intro */}
          <div className="order-3 lg:col-span-4 lg:pb-10">
            <h2 className="font-display text-5xl leading-[0.9] text-foreground sm:text-6xl">
              JUAN
              <br />
              CASTRILLÓN
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Cineasta · Director & Guionista
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Estudiante de Cine y Comunicación Audiovisual con conocimientos en dirección, fotografía, escenografía, sonido, edición, diseño sonoro y escritura de guion.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <s.icon className="mb-2 size-5 text-primary" aria-hidden="true" />
                  <p className="font-display text-3xl text-foreground">{s.value}</p>
                  <p className="text-[0.7rem] uppercase leading-tight tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
