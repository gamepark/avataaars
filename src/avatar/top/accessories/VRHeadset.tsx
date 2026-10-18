import { useId } from 'react'
import Shadow from './Shadow'

export default function VRHeadset () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.2}/>
      </defs>
      <rect fill='#262E33' x='62' y='103' width='140' height='11' rx='2'/>
      <g filter={`url(#${filter1})`}>
        <rect fill='#E6E6E6' x='78' y='90' width='108' height='40' rx='12'/>
        <rect fill='#262E33' x='84' y='95' width='96' height='30' rx='8'/>
        <path fill='#FFFFFF' fillOpacity='0.14' d='M92,95 L128,95 L104,125 L92,125 C87.6,125 84,121.4 84,117 L84,103 C84,98.6 87.6,95 92,95 Z'/>
        <rect fill='#5EE6F2' x='98' y='118' width='68' height='2.5' rx='1.25' fillOpacity='0.8'/>
        <path fill='#000000' fillOpacity='0.1' d='M78,118 L186,118 L186,118 C186,124.6 180.6,130 174,130 L90,130 C83.4,130 78,124.6 78,118 Z'/>
      </g>
    </g>
  )
}
