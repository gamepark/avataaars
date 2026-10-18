import { useId } from 'react'
import { mirror } from './mirror'
import Shadow from './Shadow'

const side = (
  <>
    <path fill='#C9A24A' d='M90,116 L66,102.5 L66,105.5 L90,119 Z'/>
    <path fill='#C9A24A' d='M90,116.5 L122,116.5 C122,127 115,133 106,133 C97,133 90,127 90,116.5 Z'/>
    <path fill='#FFFFFF' fillOpacity='0.3' d='M93,119 L119,119 C119,126 113.5,130.5 106,130.5 C98.5,130.5 93,126 93,119 Z'/>
  </>
)

export default function HalfMoonGlasses () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#C9A24A' d='M121,117 C126,114.5 138,114.5 143,117 L143,119.5 C138,117 126,117 121,119.5 Z'/>
        {side}
        <g transform={mirror}>{side}</g>
      </g>
    </g>
  )
}
