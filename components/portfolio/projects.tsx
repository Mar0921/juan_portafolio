import Image from "next/image"
import { Play, Lightbulb, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"

type Project = {
  title: string
  year: string
  duration: string
  genre: string
  role: string
  cover?: string
  synopsis?: string
  learned: string
  link?: { label: string; href: string }
  captures?: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    title: "Desde mi cuarto",
    year: "2025",
    duration: "7 min",
    genre: "Thriller",
    role: "Escenografía y ambientación",
    cover: "/cuarto1.png",
    synopsis:
      "Desde mi cuarto es un cortometraje que explora la intimidad de un personaje que, desde el espacio reducido de su habitación, reflexiona sobre sus emociones, pensamientos y la manera en que percibe el mundo exterior. A través de una narrativa sensible y un enfoque introspectivo, el corto muestra cómo un lugar cotidiano puede convertirse en un refugio donde convergen los recuerdos, la soledad, los sueños y los conflictos personales. La obra invita al espectador a contemplar la relación entre el espacio físico y el universo emocional del protagonista, resaltando la importancia de la introspección y el poder de la imaginación.",
    learned:
      "Aprendí a transformar un espacio reducido en un universo emocional y a usar la ambientación como lenguaje narrativo.",
    link: {
      label: "Ver cortometraje completo",
      href: "https://www.youtube.com/watch?v=lkaXeKupaqU",
    },
    captures: [
      { src: "/cuarto2.png", alt: "Habitación iluminada de forma intimista" },
      { src: "/cuarto3.png", alt: "Detalle de la ambientación del cuarto" },
    ],
  },
  {
    title: "La Dama de blanco",
    year: "2025",
    duration: "5 min",
    genre: "Terror",
    role: "Director, guionista, productor, montajista, asis. arte",
    cover: "/ddb1.jpeg",
    synopsis:
      "Durante una entrevista, un hombre atormentado revela los aterradores acontecimientos que comenzaron después de encontrar un antiguo libro de brujería y pronunciar en voz alta un misterioso hechizo. Desde entonces, una enigmática figura conocida como la Dama de Blanco lo persigue sin descanso, apareciendo cada vez más cerca de él. Mientras la realidad se distorsiona y el miedo consume su cordura, la entrevista se convierte en el escenario de una inquietante confrontación donde descubrir la verdad podría significar enfrentarse a una presencia imposible de detener.",
    learned:
      "Aprendí a cómo hacer un casting y mejoré mis habilidades en dirección.",
    link: {
      label: "Ver cortometraje completo",
      href: "https://www.youtube.com/watch?v=XTvBauwixBA&t=1s",
    },
    captures: [
      { src: "/ddb2.jpeg", alt: "Figura enigmática en la penumbra" },
      { src: "/ddb3.jpeg", alt: "Set de rodaje de terror" },
    ],
  },
  {
    title: "Papá el Monstruo ya no está en el armario",
    year: "2025",
    duration: "Aún en montaje",
    genre: "Terror",
    role: "Ambientación y escenografía",
    cover: "/monstruo1.jpeg",
    learned:
      "Aprendí mucho de ambientación: generar tensión con el entorno y que el espacio sea el protagonista.",
    captures: [
      { src: "/monstruo2.jpeg", alt: "Armario como elemento de tensión" },
      { src: "/monstruo3.jpeg", alt: "Detrás de cámaras de la ambientación" },
    ],
  },
  {
    title: "Banco de recuerdos",
    year: "2025",
    duration: "Aún en montaje",
    genre: "Drama",
    role: "Asistente de dirección",
    cover: "/bd1.jpeg",
    synopsis:
      "Cada imagen, cada sonido y cada pequeño detalle del presente despiertan en un joven recuerdos que lo arrastran, una y otra vez, a distintos momentos de su pasado. Mientras transita entre la realidad y la memoria, revive experiencias que marcaron su vida y descubre que algunos recuerdos pueden brindar consuelo, mientras que otros esconden heridas que nunca terminan de sanar. En este viaje íntimo y emocional, deberá enfrentarse a aquello que ha intentado olvidar para comprender quién es realmente.",
    learned:
      "Aprendí mucho sobre organizar tiempos, liderazgo y paciencia.",
    captures: [
      { src: "/bd2.jpeg", alt: "Joven sumergido en sus recuerdos" },
      { src: "/bd3.jpeg", alt: "Storyboard del montaje" },
    ],
  },
  {
    title: "Nada pasó en la esquina",
    year: "2025",
    duration: "5 min",
    genre: "Drama",
    role: "Dir. sonido",
    cover: "/npe1.jpeg",
    synopsis:
      "En un barrio donde la violencia se ha vuelto parte del paisaje cotidiano, Lorena envía a su hijo Juan David a hacer un sencillo mandado. Lo que parecía una mañana cualquiera se transforma en una angustiosa espera cuando una balacera irrumpe en la tranquilidad de la cuadra. Mientras el miedo y la incertidumbre consumen a una madre que solo desea volver a ver a su hijo con vida, ambos enfrentarán una realidad en la que la violencia ha sido tan normalizada que amenaza con borrar el valor de la vida y la empatía.",
    learned:
      "Aprendí todo lo que se sabe sobre sonido, frecuencias y espacio sonoro.",
    captures: [
      { src: "/npe2.jpeg", alt: "Calle tranquila antes de la balacera" },
      { src: "/npe3.jpeg", alt: "Rodaje en exteriores del barrio" },
    ],
  },
  {
    title: "La profecía incorrecta",
    year: "2026",
    duration: "1 min",
    genre: "Thriller",
    role: "Director, guionista, productor, montajista, diseño sonoro",
    cover: "/pi1.jpeg",
    synopsis:
      "Un joven visita a una misteriosa médium en busca de respuestas sobre su futuro. Durante la consulta, ella le revela una aterradora profecía: morirá en exactamente dos horas, al llegar a su casa. Antes de despedirse, le describe con inquietante precisión cada uno de los sucesos que ocurrirán durante ese tiempo y cómo estos lo conducirán a una muerte inevitable. A medida que las predicciones comienzan a cumplirse una tras otra, el miedo se apodera del joven, quien intenta desesperadamente cambiar su destino. Cuando finalmente logra escapar del peligro que parecía destinado a acabar con su vida, cree haber vencido a la muerte. Sin embargo, el destino le demuestra que no puede ser burlado: un inesperado accidente terminó arrebatándole la vida de la forma más absurda e impredecible.",
    learned:
      "Pude expandir mis conocimientos en dirección y diseño sonoro. Aprendí a trabajar bajo presión a poco tiempo y presupuesto.",
    link: {
      label: "Ver cortometraje completo",
      href: "https://drive.google.com/file/d/1ZysZFKc-zin3WQFpnjNypXpvY4hdm3FC/view?usp=sharing",
    },
    captures: [
      { src: "/pi2.jpeg", alt: "Consulta con la médium" },
      { src: "/pi3.jpeg", alt: "Planificación de la profecía" },
    ],
  },
  {
    title: "Bombón",
    year: "2026",
    duration: "5 min",
    genre: "Drama",
    role: "Director, guionista, productor, montajista, diseño sonoro, actor",
    cover: "/bombon1.jpeg",
    synopsis:
      "Martín, un joven boxeador con el sueño de convertirse en campeón mundial, lleva una vida marcada por los excesos y los malos hábitos alimenticios, ignorando las señales de que algo no está bien con su cuerpo. Mientras su rendimiento físico se deteriora y una lesión aparentemente menor cambia el rumbo de su carrera, descubre que enfrenta una enfermedad que transformará por completo su futuro. Obligado a aceptar una nueva realidad, Martín deberá decidir entre aferrarse a sus viejas costumbres o aprender a vivir con una condición que pondrá a prueba su fortaleza dentro y fuera del ring.",
    learned:
      "Fue un proyecto en el cual pude aprender cosas nuevas como crear una coreografía de pelea, trabajar con bajo presupuesto y al ser diseñado para un festival aprendí mucho más de Blackmagic para iPhone.",
    link: {
      label: "Ver cortometraje completo",
      href: "https://drive.google.com/file/d/1kjMGTbhPpLgzWrpZgaz6Nl9eMZrdCoRo/view?usp=sharing",
    },
    captures: [
      { src: "/bombon2.jpeg", alt: "Martín entrenando como boxeador" },
      { src: "/bombon3.jpeg", alt: "Detrás de cámaras de Bombón" },
    ],
  },
]

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-lg uppercase text-foreground">{value}</dd>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="bg-card/40 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="Proyectos" kicker="Trabajo destacado" />

        <div className="mt-12 flex flex-col gap-16 lg:gap-24">
          {projects.map((p, i) => (
            <article key={p.title} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* media column */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                  <Image
                    src={p.cover || "/placeholder.svg"}
                    alt={`Fotograma principal de ${p.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {p.captures && p.captures.length > 0 && (
                  <>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {p.captures.map((c) => (
                        <div
                          key={c.src}
                          className="relative aspect-video w-full overflow-hidden rounded-md border border-border"
                        >
                          <Image
                            src={c.src || "/placeholder.svg"}
                            alt={c.alt}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                      Capturas del proyecto
                    </p>
                  </>
                )}
              </div>

              {/* info column */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-display text-sm text-primary">Proyecto 0{i + 1}</p>
                <h3 className="mt-1 font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
                  {p.title}
                </h3>

                <dl className="mt-6 grid grid-cols-2 gap-5 border-y border-border py-6 sm:grid-cols-4">
                  <Meta label="Año" value={p.year} />
                  <Meta label="Duración" value={p.duration} />
                  <Meta label="Género" value={p.genre} />
                  <Meta label="Rol" value={p.role} />
                </dl>

                {p.synopsis && (
                  <>
                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Sinopsis
                    </h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.synopsis}</p>
                  </>
                )}

                <div className="mt-5 flex gap-3 rounded-lg border border-border bg-background/50 p-4">
                  <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                      Qué aprendí
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.learned}</p>
                  </div>
                </div>

                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Play className="size-4" aria-hidden="true" />
                    {p.link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
