import { useContext, useId } from 'react'
import Graphics from './Graphics'
import ClotheColor from './ClotheColor'
import AvatarContext from '../AvatarContext'

export default function GraphicShirt () {
  const graphicType = useContext(AvatarContext).graphicType
  const path1 = useId()
  const mask1 = useId()

  return (
    <g transform='translate(0, 170)'>
      <defs>
        <path id={path1}
              d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill='#E6E6E6' fillRule='evenodd' xlinkHref={'#' + path1}/>
      <ClotheColor maskID={mask1}/>
      <Graphics maskID={mask1} type={graphicType}/>
    </g>
  )
}
