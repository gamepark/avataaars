import ClotheColorName from './ClotheColorName'
import { useContext } from 'react'
import AvatarContext from '../AvatarContext'
import Color from '../Color'

export interface Props {
  maskID: string
}

export default function ClotheColor ({ maskID }: Props) {
  const color = useContext(AvatarContext).clotheColor
  return <Color maskID={maskID} color={getClothColor(color)} fillRule='evenodd'/>
}

export function getClothColor (color?: string) {
  if (color && color.startsWith('#')) return color
  switch (color) {
    case ClotheColorName.Black:
      return '#262E33'
    case ClotheColorName.Blue01:
      return '#65C9FF'
    case ClotheColorName.Blue02:
      return '#5199E4'
    case ClotheColorName.Blue03:
      return '#25557C'
    case ClotheColorName.Gray02:
      return '#929598'
    case ClotheColorName.Heather:
      return '#3C4F5C'
    case ClotheColorName.PastelBlue:
      return '#B1E2FF'
    case ClotheColorName.PastelGreen:
      return '#A7FFC4'
    case ClotheColorName.PastelOrange:
      return '#FFDEB5'
    case ClotheColorName.PastelRed:
      return '#FFAFB9'
    case ClotheColorName.PastelYellow:
      return '#FFFFB1'
    case ClotheColorName.Red:
      return '#FF5C5C'
    case ClotheColorName.Pink:
      return '#FF488E'
    case ClotheColorName.White:
      return '#FFFFFF'
    case ClotheColorName.Gray01:
    default:
      return '#E6E6E6'
  }
}
