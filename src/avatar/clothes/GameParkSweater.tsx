import { useContext, useId } from 'react'
import AvatarContext from '../AvatarContext'
import ClotheColor, { getClothColor } from './ClotheColor'
import GameParkLogo from './GameParkLogo'

export default function GameParkSweater () {
  const clotheColor = useContext(AvatarContext).clotheColor
  const path1 = useId()
  const mask1 = useId()

  return (
    <g transform='translate(0, 170)'>
      <defs>
        <path id={path1}
              d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill='#E6E6E6' fillRule='evenodd' xlinkHref={'#' + path1}/>
      <ClotheColor maskID={mask1}/>
      <path fill='#000000' fillOpacity='0.16' fillRule='evenodd' mask={`url(#${mask1})`}
            d='M105.192402,29.0517235 C105.065362,30.0353144 105,31.0364513 105,32.0517235 C105,45.8588423 117.088312,57.0517235 132,57.0517235 C146.911688,57.0517235 159,45.8588423 159,32.0517235 C159,31.0364513 158.934638,30.0353144 158.807598,29.0517235 L163,29.0517235 C163.1,30 163.2,31 163.2,32.0517235 C163.2,48.2 149.2,61.3 132,61.3 C114.8,61.3 100.8,48.2 100.8,32.0517235 C100.8,31 100.9,30 101,29.0517235 Z'/>
      <GameParkLogo maskID={mask1} x={118.5} y={66} scale={0.42} fill={isLight(getClothColor(clotheColor)) ? '#28546B' : '#9FE2F7'}/>
    </g>
  )
}

function isLight (hex: string) {
  const n = parseInt(hex.slice(1, 7), 16)
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 170
}
