import { FC, PropsWithChildren } from 'react'
import { Headwear, HeadwearBase, mirror } from './Headwear'

// Hard headwear: viking helmet, hard hat

const horn = (
  <>
    <path fill='#F2E6C9' d='M80,62 C62,58 48,44 46,18 C56,34 68,42 84,46 Z'/>
    <path fill='#000000' fillOpacity='0.14' d='M80,62 C68,59 56,51 50,38 C58,46 70,52 83,54 Z'/>
  </>
)

export const VikingHelmet: FC<PropsWithChildren> = ({ children }) => (
  <Headwear base={HeadwearBase.None} hat={
    <>
      {horn}
      <g transform={mirror}>{horn}</g>
      <path fill='#9AA5AD' d='M74,84 C74,46 100,24 132,24 C164,24 190,46 190,84 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.2' d='M86,70 C88,48 104,30 126,27 C108,36 96,50 94,72 Z'/>
      <rect fill='#000000' fillOpacity='0.12' x='128' y='25' width='8' height='52'/>
      <path fill='#7C878F' d='M72,74 C100,80 164,80 192,74 L192,85 C164,91 100,91 72,85 Z'/>
      <path fill='#7C878F' d='M127,84 L137,84 L136,118 C136,121 128,121 128,118 Z'/>
      <g fill='#C9D1D6'>
        <circle cx='82' cy='80' r='2'/><circle cx='104' cy='83' r='2'/><circle cx='160' cy='83' r='2'/><circle cx='182' cy='80' r='2'/>
      </g>
    </>
  }>{children}</Headwear>
)

export const HardHat: FC<PropsWithChildren> = ({ children }) => (
  <Headwear base={HeadwearBase.None} hat={
    <>
      <path fill='#F4C430' d='M74,82 C74,44 100,22 132,22 C164,22 190,44 190,82 Z'/>
      <path fill='#FFE07A' d='M124,23 C129,22.3 135,22.3 140,23 L142,82 L122,82 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.25' d='M84,66 C86,46 100,30 120,26 C104,36 94,50 92,68 Z'/>
      <path fill='#E0A90F' d='M62,80 C62,76 202,76 202,80 C202,87 186,90 132,90 C78,90 62,87 62,80 Z'/>
      <path fill='#000000' fillOpacity='0.12' d='M62,80 C62,87 78,90 132,90 C186,90 202,87 202,80 C188,85 160,86 132,86 C104,86 76,85 62,80 Z'/>
    </>
  }>{children}</Headwear>
)
