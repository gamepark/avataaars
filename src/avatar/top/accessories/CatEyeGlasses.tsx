import { useId } from 'react'
import { mirror } from './mirror'
import Shadow from './Shadow'

const side = (
  <>
    <path fill='#B22252' d='M83,102 L66,100.5 L66,103.5 L83,105 Z'/>
    <path fill='#B22252' d='M80,99 C86,103 98,104 112,104 C120,104 126,105 127,110 C128,118 124,126 113,127 C101,128 90,124 86,116 C84,111 82,106 80,99 Z'/>
    <path fill='#FFFFFF' fillOpacity='0.25' d='M86,105 C92,107 101,107.5 112,107.5 C118,107.5 123,108.5 123.5,111.5 C124,117 120.5,123 112.5,123.5 C102,124 93,121 89.5,115 C88,112 87,108.5 86,105 Z'/>
  </>
)

export default function CatEyeGlasses () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#B22252' d='M126,108 C130,106 134,106 138,108 L138,111 C134,109 130,109 126,111 Z'/>
        {side}
        <g transform={mirror}>{side}</g>
      </g>
    </g>
  )
}
