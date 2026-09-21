import type { ReactNode } from 'react'

type HuyHieuProps = {
  mau?: 'xanh' | 'cam' | 'do' | 'tim'
  children: ReactNode
}

const mauMap = {
  xanh: {
    backgroundColor: '#e6f7f1',
    color: '#0d7b5a',
  },
  cam: {
    backgroundColor: '#fff3e6',
    color: '#c76a00',
  },
  do: {
    backgroundColor: '#feeaea',
    color: '#d22b2b',
  },
  tim: {
    backgroundColor: '#f2ebff',
    color: '#6d4cc7',
  },
} as const

export function HuyHieu({ mau = 'xanh', children }: HuyHieuProps) {
  return (
    <span
      style={{
        ...mauMap[mau],
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: '999px',
        border: '0px solid',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
