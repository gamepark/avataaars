import Aviators from './Aviators'
import CatEyeGlasses from './CatEyeGlasses'
import DominoMask from './DominoMask'
import { PearlEarrings, StudEarrings } from './Earrings'
import { Blush, CheekBandage, ClownNose, Freckles, NoseRing, Scar, WarPaint } from './FaceDetails'
import Glasses3D from './Glasses3D'
import HalfMoonGlasses from './HalfMoonGlasses'
import Headphones from './Headphones'
import HeartGlasses from './HeartGlasses'
import HoopEarrings from './HoopEarrings'
import Kurt from './Kurt'
import MasqueradeMask from './MasqueradeMask'
import Monocle from './Monocle'
import NerdGlasses from './NerdGlasses'
import PirateEyePatch from './PirateEyePatch'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import SkiGoggles from './SkiGoggles'
import StarGlasses from './StarGlasses'
import SteampunkGoggles from './SteampunkGoggles'
import Sunglasses from './Sunglasses'
import VRHeadset from './VRHeadset'
import Wayfarers from './Wayfarers'
import { FC, useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import AccessoriesType from './AccessoriesType'

const accessories: Partial<Record<AccessoriesType, FC>> = {
  [AccessoriesType.Kurt]: Kurt,
  [AccessoriesType.Prescription01]: Prescription01,
  [AccessoriesType.Prescription02]: Prescription02,
  [AccessoriesType.Round]: Round,
  [AccessoriesType.Sunglasses]: Sunglasses,
  [AccessoriesType.Wayfarers]: Wayfarers,
  [AccessoriesType.HeartGlasses]: HeartGlasses,
  [AccessoriesType.Monocle]: Monocle,
  [AccessoriesType.Aviators]: Aviators,
  [AccessoriesType.HoopEarrings]: HoopEarrings,
  [AccessoriesType.Headphones]: Headphones,
  [AccessoriesType.StarGlasses]: StarGlasses,
  [AccessoriesType.CatEyeGlasses]: CatEyeGlasses,
  [AccessoriesType.HalfMoonGlasses]: HalfMoonGlasses,
  [AccessoriesType.NerdGlasses]: NerdGlasses,
  [AccessoriesType.Glasses3D]: Glasses3D,
  [AccessoriesType.SkiGoggles]: SkiGoggles,
  [AccessoriesType.SteampunkGoggles]: SteampunkGoggles,
  [AccessoriesType.DominoMask]: DominoMask,
  [AccessoriesType.MasqueradeMask]: MasqueradeMask,
  [AccessoriesType.PirateEyePatch]: PirateEyePatch,
  [AccessoriesType.ClownNose]: ClownNose,
  [AccessoriesType.Freckles]: Freckles,
  [AccessoriesType.Blush]: Blush,
  [AccessoriesType.CheekBandage]: CheekBandage,
  [AccessoriesType.WarPaint]: WarPaint,
  [AccessoriesType.NoseRing]: NoseRing,
  [AccessoriesType.PearlEarrings]: PearlEarrings,
  [AccessoriesType.StudEarrings]: StudEarrings,
  [AccessoriesType.VRHeadset]: VRHeadset,
  [AccessoriesType.Scar]: Scar
}

export default function Accessory () {
  const type = useContext(AvatarContext).accessoriesType
  const Component = type ? accessories[type] : undefined
  return Component ? <Component/> : null
}
