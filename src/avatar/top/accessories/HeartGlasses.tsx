import { useId } from 'react'
import Shadow from './Shadow'

const frame = 'M0,15 C-6,10 -23,0 -23,-11 C-23,-19 -16,-24 -9,-23 C-5,-22.5 -2,-20 0,-16.5 C2,-20 5,-22.5 9,-23 C16,-24 23,-19 23,-11 C23,0 6,10 0,15 Z'
const lens = 'M0,10 C-5,6 -18,-1 -18,-10 C-18,-16 -13,-19 -8,-18.5 C-4.5,-18 -1.5,-15.5 0,-12 C1.5,-15.5 4.5,-18 8,-18.5 C13,-19 18,-16 18,-10 C18,-1 5,6 0,10 Z'
const shine = 'M-13,-12 C-13,-15 -10,-16 -8,-15.5 C-6,-15 -6,-13 -8,-12.5 C-10,-12 -11,-10 -11.5,-8.5 C-12.5,-9 -13,-10.5 -13,-12 Z'

export default function HeartGlasses () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#D6295B' d='M84,104 L66,101 C64,100.6 63.5,103.6 65.5,104 L84,108 Z M180,104 L198,101 C200,100.6 200.5,103.6 198.5,104 L180,108 Z'/>
        <path fill='#D6295B' d='M124,104 C128,100.5 136,100.5 140,104 L139,107.5 C135,105 129,105 125,107.5 Z'/>
        <g transform='translate(106, 116)'>
          <path fill='#D6295B' d={frame}/>
          <path fill='#FF5C8A' fillOpacity='0.75' d={lens}/>
          <path fill='#FFFFFF' fillOpacity='0.45' d={shine}/>
        </g>
        <g transform='translate(158, 116)'>
          <path fill='#D6295B' d={frame}/>
          <path fill='#FF5C8A' fillOpacity='0.75' d={lens}/>
          <path fill='#FFFFFF' fillOpacity='0.45' d={shine}/>
        </g>
      </g>
    </g>
  )
}
