import type { ComponentProps } from 'react'
type NutBamProps = ComponentProps<'button'> & {
  bienThe?: 'chinh' | 'phu'
}
export default function NutBam({
  bienThe = 'chinh',
  className = '',
  ...conLai
}: NutBamProps) {
  return (
    <button className={`nut nut-${bienThe} ${className}`.trim()} {...conLai} />
  )
}
