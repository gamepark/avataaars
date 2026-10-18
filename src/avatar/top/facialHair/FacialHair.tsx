import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { BeardViking, Goatee, MoustacheChevron, MoustacheHandlebar, MoustachePencil, Sideburns, Stubble } from './NewFacialHair'
import { FC, useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import FacialHairType from './FacialHairType'

const facialHairs: Partial<Record<FacialHairType, FC>> = {
  [FacialHairType.BeardMedium]: BeardMedium,
  [FacialHairType.BeardLight]: BeardLight,
  [FacialHairType.BeardMajestic]: BeardMajestic,
  [FacialHairType.MoustacheFancy]: MoustacheFancy,
  [FacialHairType.MoustacheMagnum]: MoustacheMagnum,
  [FacialHairType.Goatee]: Goatee,
  [FacialHairType.MoustacheHandlebar]: MoustacheHandlebar,
  [FacialHairType.MoustacheChevron]: MoustacheChevron,
  [FacialHairType.MoustachePencil]: MoustachePencil,
  [FacialHairType.Sideburns]: Sideburns,
  [FacialHairType.Stubble]: Stubble,
  [FacialHairType.BeardViking]: BeardViking
}

export default function FacialHair () {
  const type = useContext(AvatarContext).facialHairType ?? FacialHairType.Blank
  const Component = facialHairs[type]
  return Component ? <Component/> : null
}
