import { useId } from 'react'

export function PearlEarrings () {
  const gradient1 = useId()
  const pearl = (cx: number) => (
    <>
      <circle fill='#E6B325' cx={cx} cy='134' r='1.8'/>
      <circle fill={`url(#${gradient1})`} cx={cx} cy='141' r='5.5'/>
    </>
  )
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <radialGradient id={gradient1} cx='35%' cy='35%' r='70%'>
          <stop stopColor='#FFFFFF' offset='0%'/>
          <stop stopColor='#EDE6DA' offset='60%'/>
          <stop stopColor='#C9BFAE' offset='100%'/>
        </radialGradient>
      </defs>
      {pearl(70)}
      {pearl(194)}
    </g>
  )
}

export function StudEarrings () {
  const stud = (cx: number) => (
    <g transform={`translate(${cx}, 134)`}>
      <path fill='#2E86C1' d='M0,-6.5 L6.5,0 L0,6.5 L-6.5,0 Z'/>
      <path fill='#7FD6F7' d='M0,-5 L5,0 L0,5 L-5,0 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.8' d='M0,-5 L1.6,0 L0,1.6 L-5,0 Z'/>
    </g>
  )
  return (
    <g transform='translate(1, 0)'>
      {stud(70)}
      {stud(194)}
    </g>
  )
}
