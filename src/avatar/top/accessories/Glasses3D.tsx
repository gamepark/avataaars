import { useId } from 'react'
import Shadow from './Shadow'

export default function Glasses3D () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#F2F2F2' d='M80,100 L66,99 L66,103 L80,104 Z M184,100 L198,99 L198,103 L184,104 Z'/>
        <rect fill='#FF3B3B' fillOpacity='0.8' x='86' y='102' width='38' height='19'/>
        <rect fill='#2EC4F0' fillOpacity='0.8' x='140' y='102' width='38' height='19'/>
        <path fill='#F2F2F2' fillRule='evenodd'
              d='M80,98 L184,98 L184,126 L146,126 C144,121 138.5,118 132,118 C125.5,118 120,121 118,126 L80,126 Z M86,102 L86,121 L124,121 L124,102 Z M140,102 L140,121 L178,121 L178,102 Z'/>
        <path fill='#000000' fillOpacity='0.08' d='M80,122 L118,122 L118,126 L80,126 Z M146,122 L184,122 L184,126 L146,126 Z'/>
      </g>
    </g>
  )
}
