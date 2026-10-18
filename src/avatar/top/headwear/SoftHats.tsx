import { FC, PropsWithChildren } from 'react'
import { Headwear, HeadwearBase, HatShape } from './Headwear'

// Fabric headwear: bandana, beret, chef hat, santa hat

const bandana = 'M74,84 C74,46 100,30 132,30 C164,30 190,46 190,84 C170,89 94,89 74,84 Z'

export const Bandana: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.None} hat={
    <>
      <HatShape d='M188,74 L212,102 L202,108 L186,84 Z M190,76 L218,84 L216,94 L188,84 Z' defaultColor='#D6293B'/>
      <path fill='#000000' fillOpacity='0.2' d='M188,74 L212,102 L202,108 L186,84 Z'/>
      <HatShape d={bandana} defaultColor='#D6293B'/>
      <g fill='#FFFFFF' fillOpacity='0.85'>
        <circle cx='104' cy='48' r='3'/><circle cx='132' cy='40' r='3'/><circle cx='160' cy='48' r='3'/>
        <circle cx='88' cy='66' r='3'/><circle cx='116' cy='60' r='3'/><circle cx='148' cy='60' r='3'/><circle cx='176' cy='66' r='3'/>
      </g>
      <path fill='#000000' fillOpacity='0.2' d='M74,84 C94,89 170,89 190,84 L190,77 C170,82 94,82 74,77 Z'/>
      <circle fill='#B71F2F' cx='190' cy='80' r='6'/>
    </>
  }>{children}</Headwear>
)

const beret = 'M66,70 C60,44 94,22 136,22 C178,22 204,42 196,66 C192,76 180,84 160,86 C140,88 112,88 94,88 C80,88 70,80 66,70 Z'

export const Beret: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <HatShape d={beret} defaultColor='#2B3A55'/>
      <path fill='#000000' fillOpacity='0.24' d='M70,78 C76,84 86,88 96,88 C114,88 142,88 160,86 C178,84 190,78 195,70 C184,78 170,80 158,80 C140,82 112,82 94,82 C84,82 76,80 70,78 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.1' d='M80,48 C94,30 118,25 140,26 C116,30 96,40 84,54 Z'/>
      <path fill='#1F2A3D' d='M134,24 L136,14 L140,14.5 L139,24 Z'/>
    </>
  }>{children}</Headwear>
)

export const ChefHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <g transform='translate(0, 8)'>
      <path fill='#F2F2F2' d='M84,64 C58,62 56,28 84,24 C84,6 114,-2 128,10 C140,-2 170,2 170,22 C196,22 204,60 180,64 Z'/>
      <path fill='#000000' fillOpacity='0.07' d='M100,64 C96,48 98,36 104,28 C102,40 104,52 110,64 Z M150,64 C156,50 158,40 156,28 C162,38 164,50 160,64 Z'/>
      </g>
      <path fill='#FFFFFF' d='M74,62 C108,58 156,58 190,62 L190,82 C156,88 108,88 74,82 Z'/>
      <path fill='#000000' fillOpacity='0.1' d='M74,76 C108,82 156,82 190,76 L190,82 C156,88 108,88 74,82 Z'/>
    </>
  }>{children}</Headwear>
)

export const SantaHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <path fill='#D6293B' d='M76,78 C78,44 102,20 136,18 C170,18 196,40 210,72 L199,77 C190,58 178,48 166,46 C178,56 186,66 188,78 Z'/>
      <path fill='#000000' fillOpacity='0.16' d='M166,46 C178,48 190,58 199,77 L210,72 C204,58 196,46 186,38 C188,46 180,46 166,46 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.14' d='M86,64 C92,40 112,26 134,24 C114,32 100,46 94,66 Z'/>
      <circle fill='#F7F7F7' cx='207' cy='80' r='10'/>
      <path fill='#F7F7F7' d='M70,72 C96,78 168,78 194,72 C198,78 196,85 190,88 C166,91 98,91 74,88 C68,85 66,78 70,72 Z'/>
      <path fill='#000000' fillOpacity='0.08' d='M74,88 C98,91 166,91 190,88 C186,85 182,84 178,84 C156,87 108,87 86,84 C82,84 78,85 74,88 Z'/>
    </>
  }>{children}</Headwear>
)
