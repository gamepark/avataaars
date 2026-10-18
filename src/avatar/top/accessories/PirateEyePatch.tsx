import { useId } from 'react'
import Shadow from './Shadow'

export default function PirateEyePatch () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.2}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#1F2426' d='M148,103 L77,83 L76,87 L147,107 Z M170,107 L193,109 L193,112.5 L170,110.5 Z'/>
        <path fill='#262E33' d='M146,102 C152,99 166,99 171,104 C175,110 172,122 164,125 C156,128 148,124 145,118 C142,112 142,106 146,102 Z'/>
        <path fill='#FFFFFF' fillOpacity='0.1' d='M146,102 C152,99 166,99 171,104 C165,102.5 154,102.5 148,106 C146,108 145,111 144.6,114 C143,109 143,105 146,102 Z'/>
      </g>
    </g>
  )
}
