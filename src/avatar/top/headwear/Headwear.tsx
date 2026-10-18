import FacialHair from '../facialHair'
import HatColor from '../HatColor'
import LongHairStraight from '../LongHairStraight'
import ShortHairTheCaesar from '../ShortHairTheCaesar'
import Shadow from '../accessories/Shadow'
import { FC, ReactNode, useId, PropsWithChildren } from 'react'

export enum HeadwearBase {
  None, Short, Long
}

type Props = {
  base?: HeadwearBase
  hat: ReactNode
  lift?: number
}

// Draws a hat in avatar coordinates (face axis x=132, forehead y≈80, eyebrows from y=89) over a base haircut
// lift raises the hat so its edge leaves the same gap above the eyebrows as the original Hat (edge at y≈80)
export const Headwear: FC<PropsWithChildren<Props>> = ({ base = HeadwearBase.None, hat, lift = 8, children }) => {
  const filter1 = useId()
  const drawn = (
    <g transform={`translate(1, ${-lift})`}>
      <defs>
        <Shadow id={filter1} opacity={0.16}/>
      </defs>
      <g filter={`url(#${filter1})`}>{hat}</g>
    </g>
  )
  switch (base) {
    case HeadwearBase.Short:
      return <ShortHairTheCaesar>{drawn}{children}</ShortHairTheCaesar>
    case HeadwearBase.Long:
      return <LongHairStraight>{drawn}{children}</LongHairStraight>
    default:
      return (
        <g strokeWidth='1' fillRule='evenodd'>
          <g transform='translate(-1, 0)'>
            <FacialHair/>
            {drawn}
            {children}
          </g>
        </g>
      )
  }
}

type ShapeProps = {
  d: string
  defaultColor: string
}

// A shape filled with the avatar's hatColor (falls back to defaultColor)
export function HatShape ({ d, defaultColor }: ShapeProps) {
  const mask1 = useId()
  const path1 = useId()
  return (
    <>
      <defs>
        <path id={path1} d={d}/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill={defaultColor} xlinkHref={'#' + path1}/>
      <HatColor maskID={mask1} defaultColor={defaultColor}/>
    </>
  )
}

export const mirror = 'translate(264, 0) scale(-1, 1)'
