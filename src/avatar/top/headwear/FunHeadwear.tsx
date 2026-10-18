import { FC, PropsWithChildren } from 'react'
import { Headwear, HeadwearBase, mirror } from './Headwear'

// Playful headwear resting on short hair: party hat, flower crown, halo, devil horns, cat ears, bunny ears

export const PartyHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} lift={0} hat={
    <>
      <path fill='#5199E4' d='M108,42 L142,6 L158,40 C142,46 122,46 108,42 Z'/>
      <path fill='#FFD84A' d='M117,32.5 L126,23 L146,32 L151,24.5 L155,33.5 C143,38 128,37.5 117,32.5 Z M132,16.5 L136.5,12 L144.5,17 L146.5,20.5 Z'/>
      <path fill='#000000' fillOpacity='0.14' d='M142,6 L158,40 C154,41.5 150,42.6 146,43.4 Z'/>
      <circle fill='#FF488E' cx='142' cy='7' r='6'/>
    </>
  }>{children}</Headwear>
)

const flower = (cx: number, cy: number, color: string) => (
  <g key={`${cx}-${cy}`} transform={`translate(${cx}, ${cy})`}>
    <g fill={color}>
      <circle cx='0' cy='-4.5' r='4'/><circle cx='4.3' cy='-1.4' r='4'/><circle cx='2.6' cy='3.6' r='4'/>
      <circle cx='-2.6' cy='3.6' r='4'/><circle cx='-4.3' cy='-1.4' r='4'/>
    </g>
    <circle fill='#F4C430' r='2.6'/>
  </g>
)

export const FlowerCrown: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Long} lift={0} hat={
    <>
      <g fill='#4CAF50'>
        <ellipse cx='97' cy='50' rx='6' ry='3' transform='rotate(-40, 97, 50)'/>
        <ellipse cx='125' cy='36' rx='6' ry='3' transform='rotate(-10, 125, 36)'/>
        <ellipse cx='153' cy='39' rx='6' ry='3' transform='rotate(20, 153, 39)'/>
        <ellipse cx='175' cy='56' rx='6' ry='3' transform='rotate(50, 175, 56)'/>
      </g>
      {[[86, 62, '#FF8FB1'], [100, 47, '#FFFFFF'], [116, 38, '#FFB347'], [132, 35, '#FF8FB1'], [148, 38, '#FFFFFF'], [164, 47, '#FFB347'], [178, 62, '#FF8FB1']]
        .map(([x, y, c]) => flower(x as number, y as number, c as string))}
    </>
  }>{children}</Headwear>
)

export const Halo: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} lift={0} hat={
    <>
      <ellipse fill='none' stroke='#FFE57A' strokeOpacity='0.45' strokeWidth='9' cx='132' cy='16' rx='38' ry='8'/>
      <ellipse fill='none' stroke='#F4C430' strokeWidth='4.5' cx='132' cy='16' rx='38' ry='8'/>
    </>
  }>{children}</Headwear>
)

const devilHorn = (
  <>
    <path fill='#D6293B' d='M98,44 C92,36 90,24 96,12 C98,22 104,30 112,36 Z'/>
    <path fill='#000000' fillOpacity='0.16' d='M98,44 C94,38 92,30 93,22 C96,30 102,36 108,40 Z'/>
  </>
)

export const DevilHorns: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} lift={0} hat={
    <>
      {devilHorn}
      <g transform={mirror}>{devilHorn}</g>
    </>
  }>{children}</Headwear>
)

const catEar = (
  <>
    <path fill='#262E33' d='M80,54 L86,14 L118,36 Z'/>
    <path fill='#FF9EB8' d='M88,44 L91,25 L107,37 Z'/>
  </>
)

export const CatEars: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} lift={0} hat={
    <>
      <path fill='none' stroke='#262E33' strokeWidth='4' d='M80,62 C88,40 108,30 132,30 C156,30 176,40 184,62'/>
      {catEar}
      <g transform={mirror}>{catEar}</g>
    </>
  }>{children}</Headwear>
)

const bunnyEar = (
  <g transform='rotate(-14, 112, 38)'>
    <ellipse fill='#F7F7F7' cx='112' cy='14' rx='11' ry='26'/>
    <ellipse fill='#FFB3C7' cx='112' cy='16' rx='5.5' ry='18'/>
  </g>
)

export const BunnyEars: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} lift={0} hat={
    <>
      {bunnyEar}
      <g transform={mirror}>{bunnyEar}</g>
      <path fill='none' stroke='#F7F7F7' strokeWidth='4' d='M80,62 C88,40 108,30 132,30 C156,30 176,40 184,62'/>
    </>
  }>{children}</Headwear>
)
