import { useId } from 'react'
import { mirror } from './mirror'
import Shadow from './Shadow'

const side = (
  <>
    <rect fill='#6B4226' x='64' y='105' width='26' height='12' rx='2'/>
    <circle fill='#8C5E1A' cx='106' cy='112' r='19'/>
    <circle fill='#C9952E' cx='106' cy='112' r='16.5'/>
    <circle fill='#3B2A16' cx='106' cy='112' r='13'/>
    <circle fill='#F2B84B' fillOpacity='0.75' cx='106' cy='112' r='11'/>
    <circle fill='#FFE7A8' cx='106' cy='93.5' r='1.6'/>
    <circle fill='#FFE7A8' cx='88' cy='112' r='1.6'/>
    <circle fill='#FFE7A8' cx='106' cy='130.5' r='1.6'/>
  </>
)

export default function SteampunkGoggles () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.16}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <rect fill='#8C5E1A' x='122' y='107' width='20' height='7' rx='3'/>
        {side}
        <g transform={mirror}>{side}</g>
        <path fill='#FFFFFF' fillOpacity='0.4' d='M98,106 C100,103 104,101.5 108,102 C104,104 101,106.5 100,110 Z M150,106 C152,103 156,101.5 160,102 C156,104 153,106.5 152,110 Z'/>
      </g>
    </g>
  )
}
