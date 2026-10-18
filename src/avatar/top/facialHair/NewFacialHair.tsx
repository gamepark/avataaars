import { useId } from 'react'
import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import FacialHairColor from './FacialHairColor'

// Facial hair in avatar coordinates: moustache band y≈138-148, mouth from y=149, chin y≈190

function Hair ({ d, shade }: { d: string | string[], shade?: string }) {
  const pieces = Array.isArray(d) ? d : [d]
  const mask1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <mask id={mask1} fill='white'>
        {pieces.map((piece, i) => <path key={i} d={piece}/>)}
      </mask>
      <g fill='#331B0C'>{pieces.map((piece, i) => <path key={i} d={piece}/>)}</g>
      <FacialHairColor maskID={mask1}/>
      {shade && <path fill='#000000' fillOpacity='0.16' mask={`url(#${mask1})`} d={shade}/>}
    </g>
  )
}

const mirrorX = (d: string) => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => `${(264 - parseFloat(x)).toFixed(2)},${y}`)

export function Goatee () {
  return <Hair d='M114,146 C120,140 128,140 132,142.5 C136,140 144,140 150,146 C146,148 140,147.5 132,147 C124,147.5 118,148 114,146 Z M120,168 C124,166 140,166 144,168 C147,177 142,189 132,191 C122,189 117,177 120,168 Z'
               shade='M120,180 C124,186 128,189 132,190 C136,189 140,186 144,180 C142,188 138,191 132,191 C126,191 122,188 120,180 Z'/>
}

const handlebarHalf = 'M132,143 C126,138.5 114,138 104,143 C98,146 92,145 90,140 C89,137 91,134 94,135 C92,138 94,141 98,140.5 C106,136 118,134 127,136.5 C129.5,137.5 131,139 132,140 Z'

export function MoustacheHandlebar () {
  return <Hair d={handlebarHalf + ' ' + mirrorX(handlebarHalf)}/>
}

export function MoustacheChevron () {
  return <Hair d='M104,148 C108,138 122,135 132,138.5 C142,135 156,138 160,148 C152,150.5 142,149.5 132,147 C122,149.5 112,150.5 104,148 Z'
               shade='M104,148 C112,150.5 122,149.5 132,147 C142,149.5 152,150.5 160,148 C158,145 156,143.5 154,143 C146,145 140,145 132,143.5 C124,145 118,145 110,143 C108,143.5 106,145 104,148 Z'/>
}

export function MoustachePencil () {
  return <Hair d='M110,146 C118,142.5 127,142.5 132,144 C137,142.5 146,142.5 154,146 C146,146.6 139,146.6 132,146 C125,146.6 118,146.6 110,146 Z'/>
}

const sideburnHalf = 'M76,86 L85,86 C85,98 85.5,111 86,123 C83.5,125.5 80,126 77,125 C76.5,112 76,99 76,86 Z'

export function Sideburns () {
  return <Hair d={sideburnHalf + ' ' + mirrorX(sideburnHalf)}/>
}

export function Stubble () {
  return (
    <g opacity='0.35'>
      <BeardLight/>
    </g>
  )
}

// Majestic beard with two braids ending in gold rings
export function BeardViking () {
  const braid = (x: number) => [...Array.from({ length: 5 }, (_, i) =>
    `M${x + 6},${200 + i * 8} C${x + 6},${204 + i * 8} ${x + 3},${207 + i * 8} ${x},${207 + i * 8} C${x - 3},${207 + i * 8} ${x - 6},${204 + i * 8} ${x - 6},${200 + i * 8} C${x - 6},${196 + i * 8} ${x - 3},${193 + i * 8} ${x},${193 + i * 8} C${x + 3},${193 + i * 8} ${x + 6},${196 + i * 8} ${x + 6},${200 + i * 8} Z`
  ), `M${x - 4},240 L${x + 4},240 L${x + 6},252 L${x - 6},252 Z`]
  return (
    <>
      <BeardMajestic/>
      <Hair d={[...braid(118), ...braid(146)]}
            shade='M112,202 L124,202 L124,204 L112,204 Z M112,210 L124,210 L124,212 L112,212 Z M112,218 L124,218 L124,220 L112,220 Z M112,226 L124,226 L124,228 L112,228 Z M140,202 L152,202 L152,204 L140,204 Z M140,210 L152,210 L152,212 L140,212 Z M140,218 L152,218 L152,220 L140,220 Z M140,226 L152,226 L152,228 L140,228 Z'/>
      <g transform='translate(1, 0)' fill='#E6B325'>
        <rect x='112' y='235' width='12' height='5' rx='2'/>
        <rect x='140' y='235' width='12' height='5' rx='2'/>
      </g>
    </>
  )
}
