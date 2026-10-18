import { useId } from 'react'
import Shadow from './Shadow'

export default function Headphones () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.16}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#2F383B'
              d='M62,108 C62,58 92,20 132,20 C172,20 202,58 202,108 L194,108 C194,64 167,29 132,29 C97,29 70,64 70,108 Z'/>
        <path fill='#FFFFFF' fillOpacity='0.12' d='M74,70 C82,44 104,25 132,24 C110,28 89,44 78,72 Z'/>
        <rect fill='#2F383B' x='54' y='94' width='24' height='46' rx='11'/>
        <rect fill='#FF5C5C' x='72' y='99' width='9' height='36' rx='4.5'/>
        <rect fill='#000000' fillOpacity='0.16' x='54' y='122' width='24' height='18' rx='9'/>
        <rect fill='#2F383B' x='186' y='94' width='24' height='46' rx='11'/>
        <rect fill='#FF5C5C' x='183' y='99' width='9' height='36' rx='4.5'/>
        <rect fill='#000000' fillOpacity='0.16' x='186' y='122' width='24' height='18' rx='9'/>
      </g>
    </g>
  )
}
