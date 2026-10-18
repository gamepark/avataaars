import { useId } from 'react'
import { mirror, starPath } from './mirror'
import Shadow from './Shadow'

const frame = starPath(106, 113, 24, 11.5)
const lens = starPath(106, 113, 18.5, 8.6)

export default function StarGlasses () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#F2A93B' d='M86,104 L66,101 C64,100.6 63.5,103.6 65.5,104 L86,108 Z M124,107 C129,104 135,104 140,107 L139.5,110 C135,108 129,108 124.5,110 Z'/>
        <g>
          <path fill='#F2A93B' d={frame}/>
          <path fill='#FFD84A' fillOpacity='0.7' d={lens}/>
        </g>
        <g transform={mirror}>
          <path fill='#F2A93B' d='M86,104 L66,101 C64,100.6 63.5,103.6 65.5,104 L86,108 Z'/>
          <path fill='#F2A93B' d={frame}/>
          <path fill='#FFD84A' fillOpacity='0.7' d={lens}/>
        </g>
        <path fill='#FFFFFF' fillOpacity='0.5' d='M100,105 L104,99 L105,106 Z M152,105 L156,99 L157,106 Z'/>
      </g>
    </g>
  )
}
