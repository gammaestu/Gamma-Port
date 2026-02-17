import type { PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{
  id: string
  title: string
  subtitle?: ReactNode
  className?: string
}>

export function Section({ id, title, subtitle, className, children }: Props) {
  return (
    <section id={id} className={className}>
      <div className="container-page py-16 sm:py-20">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-widest text-primary">
            SECTION
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

