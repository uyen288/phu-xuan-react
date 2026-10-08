import type { ReactNode } from 'react'
type TheProps = {
  tieuDe?: string
  children: ReactNode
}
export default function The({ tieuDe, children }: TheProps) {
  return (
    <article className="the">
      {tieuDe && <h3>{tieuDe}</h3>}
      {children}
    </article>
  )
}
