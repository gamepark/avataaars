import GameParkLogo from '../../clothes/GameParkLogo'
import { FC, PropsWithChildren } from 'react'
import { Headwear, HeadwearBase, HatShape } from './Headwear'

const dome = 'M74,80 C74,46 100,26 132,26 C164,26 190,46 190,80 C170,85 94,85 74,80 Z'
const visor = 'M66,80 C92,86 172,86 198,80 C202,84 200,90 194,91 C172,94 92,94 70,91 C64,90 62,84 66,80 Z'

export const BaseballCap: FC<PropsWithChildren> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <HatShape d={dome} defaultColor='#25557C'/>
      <path fill='#FFFFFF' fillOpacity='0.12' d='M82,70 C84,46 102,30 128,28 C108,34 94,48 90,70 Z'/>
      <circle fill='#000000' fillOpacity='0.2' cx='132' cy='27' r='3'/>
      <HatShape d={visor} defaultColor='#25557C'/>
      <path fill='#000000' fillOpacity='0.24' d={visor}/>
      <GameParkLogo x={124.5} y={44} scale={0.23}/>
    </>
  }>{children}</Headwear>
)

export const BaseballCapBack: FC<PropsWithChildren> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <HatShape d='M110,30 C116,18 148,18 154,30 Z' defaultColor='#E0464F'/>
      <path fill='#000000' fillOpacity='0.3' d='M110,30 C116,18 148,18 154,30 Z'/>
      <HatShape d={dome} defaultColor='#E0464F'/>
      <path fill='#FFFFFF' fillOpacity='0.12' d='M82,70 C84,46 102,30 128,28 C108,34 94,48 90,70 Z'/>
      <path fill='#000000' fillOpacity='0.28' d='M114,83 C114,70 122,64 132,64 C142,64 150,70 150,83 C142,84.5 122,84.5 114,83 Z'/>
      <rect fill='#000000' fillOpacity='0.2' x='114' y='72' width='36' height='3'/>
    </>
  }>{children}</Headwear>
)
