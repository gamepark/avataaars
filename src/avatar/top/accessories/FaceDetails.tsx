import { useId } from 'react'
import { mirror } from './mirror'
import Shadow from './Shadow'

// Small face details: drawn directly on the skin, no frame

export function ClownNose () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.2}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <circle fill='#E8343E' cx='132' cy='130' r='10'/>
        <path fill='#000000' fillOpacity='0.16' d='M142,130 C142,135.5 137.5,140 132,140 C126.5,140 122,135.5 122,130 C124,134 127.5,136.5 132,136.5 C136.5,136.5 140,134 142,130 Z'/>
        <ellipse fill='#FFFFFF' fillOpacity='0.6' cx='128.5' cy='126' rx='3' ry='2'/>
      </g>
    </g>
  )
}

const freckles = (
  <g fill='#9C5A33' fillOpacity='0.45'>
    <circle cx='94' cy='127' r='1.5'/>
    <circle cx='100' cy='130' r='1.4'/>
    <circle cx='106' cy='127.5' r='1.3'/>
    <circle cx='91' cy='132' r='1.3'/>
    <circle cx='97' cy='134.5' r='1.5'/>
    <circle cx='103' cy='135' r='1.2'/>
    <circle cx='112' cy='130' r='1.2'/>
  </g>
)

export function Freckles () {
  return (
    <g transform='translate(1, 0)'>
      {freckles}
      <g transform={mirror}>{freckles}</g>
    </g>
  )
}

export function Blush () {
  return (
    <g transform='translate(1, 0)' fill='#FF5C7A' fillOpacity='0.3'>
      <ellipse cx='96' cy='134' rx='11' ry='6.5'/>
      <ellipse cx='168' cy='134' rx='11' ry='6.5'/>
    </g>
  )
}

export function CheekBandage () {
  return (
    <g transform='translate(1, 0)'>
      <g transform='translate(6, -9) rotate(-24, 168, 136)'>
        <rect fill='#DE9F66' x='151' y='130.5' width='34' height='11' rx='5.5'/>
        <rect fill='#F7E1C6' x='162' y='132' width='12' height='8' rx='1'/>
        <g fill='#000000' fillOpacity='0.14'>
          <circle cx='155.5' cy='134' r='0.8'/>
          <circle cx='155.5' cy='138' r='0.8'/>
          <circle cx='180.5' cy='134' r='0.8'/>
          <circle cx='180.5' cy='138' r='0.8'/>
        </g>
      </g>
    </g>
  )
}

export function WarPaint () {
  const stripes = (
    <g fill='#2E6FD0' fillOpacity='0.85'>
      <path d='M92,124 L119,123 C120.5,123 120.5,127 119,127 L92,128 C90.5,128 90.5,124 92,124 Z'/>
      <path d='M95,131 L116,130.2 C117.5,130.2 117.5,134 116,134 L95,134.8 C93.5,134.8 93.5,131 95,131 Z'/>
    </g>
  )
  return (
    <g transform='translate(1, 0)'>
      {stripes}
      <g transform={mirror}>{stripes}</g>
    </g>
  )
}

export function NoseRing () {
  return (
    <g transform='translate(1, 0)'>
      <circle fill='none' stroke='#E6B325' strokeWidth='2.2' cx='141' cy='137.5' r='4'/>
      <circle fill='#FFF3C4' cx='138.3' cy='140.3' r='1'/>
    </g>
  )
}

export function Scar () {
  return (
    <g transform='translate(1, 0)'>
      <path fill='#B9655A' fillOpacity='0.75' d='M97,90 L99.5,89 L117,128 L114.5,129 Z'/>
      <g fill='#B9655A' fillOpacity='0.75'>
        <rect x='96.5' y='97' width='9' height='1.8' rx='0.9' transform='rotate(-24, 101, 98)'/>
        <rect x='101' y='106' width='9' height='1.8' rx='0.9' transform='rotate(-24, 105.5, 107)'/>
        <rect x='105.5' y='116' width='9' height='1.8' rx='0.9' transform='rotate(-24, 110, 117)'/>
      </g>
    </g>
  )
}
