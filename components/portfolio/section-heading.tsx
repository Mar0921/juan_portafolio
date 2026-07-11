export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string
  title: string
  kicker: string
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
      <div>
        <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {kicker}
        </p>
        <h2 className="font-display text-4xl uppercase leading-none text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      <span className="font-display text-3xl leading-none text-muted-foreground/50 sm:text-4xl">
        {index}
      </span>
    </div>
  )
}
