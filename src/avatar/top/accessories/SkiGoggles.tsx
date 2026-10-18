import { useId } from 'react'
import Shadow from './Shadow'

const shape = 'M84,98 C96,93 168,93 180,98 C186,102 186,122 180,127 C170,131 152,129 144,125 C140,123 136,121 132,121 C128,121 124,123 120,125 C112,129 94,131 84,127 C78,122 78,102 84,98 Z'

export default function SkiGoggles () {
  const filter1 = useId()
  const gradient1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.16}/>
        <linearGradient x1='0%' y1='0%' x2='100%' y2='100%' id={gradient1}>
          <stop stopColor='#FFB13B' offset='0%'/>
          <stop stopColor='#E8456B' offset='55%'/>
          <stop stopColor='#7A3FD0' offset='100%'/>
        </linearGradient>
      </defs>
      <rect fill='#FF5C5C' x='62' y='104' width='140' height='12' rx='2'/>
      <rect fill='#000000' fillOpacity='0.16' x='62' y='112' width='140' height='4'/>
      <g filter={`url(#${filter1})`}>
        <path fill='#2F383B' d={shape}/>
        <path fill={`url(#${gradient1})`} transform='translate(132, 111) scale(0.9, 0.8) translate(-132, -111)' d={shape}/>
        <path fill='#FFFFFF' fillOpacity='0.35' d='M92,100 C104,97.5 120,97 132,97 L104,118 C98,118 92,117 90,114 C89,108 89,103 92,100 Z'/>
      </g>
    </g>
  )
}
