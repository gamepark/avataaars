import ClotheType from './ClotheType'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import BlazerShirt from './BlazerShirt'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import CollarSweater from './CollarSweater'
import BlazerSweater from './BlazerSweater'
import Overall from './Overall'
import GameParkSweater from './GameParkSweater'
import { Armor, ChefJacket, ChristmasSweater, FootballJersey, HawaiianShirt, Kimono, ShirtTie, StripedShirt, SuperheroSuit, Turtleneck, Tuxedo } from './NewClothes'
import { FC, useContext } from 'react'
import AvatarContext from '../AvatarContext'

const newClothes: Partial<Record<ClotheType, FC>> = {
  [ClotheType.StripedShirt]: StripedShirt,
  [ClotheType.Turtleneck]: Turtleneck,
  [ClotheType.HawaiianShirt]: HawaiianShirt,
  [ClotheType.FootballJersey]: FootballJersey,
  [ClotheType.Tuxedo]: Tuxedo,
  [ClotheType.ShirtTie]: ShirtTie,
  [ClotheType.Kimono]: Kimono,
  [ClotheType.Armor]: Armor,
  [ClotheType.SuperheroSuit]: SuperheroSuit,
  [ClotheType.ChristmasSweater]: ChristmasSweater,
  [ClotheType.ChefJacket]: ChefJacket
}

export default function Clothes () {
  const type = useContext(AvatarContext).clotheType ?? ClotheType.BlazerShirt
  const Garment = newClothes[type]
  if (Garment) return <Garment/>
  switch (type) {
    case ClotheType.BlazerShirt:
      return <BlazerShirt/>
    case ClotheType.BlazerSweater:
      return <BlazerSweater/>
    case ClotheType.CollarSweater:
      return <CollarSweater/>
    case ClotheType.GraphicShirt:
      return <GraphicShirt/>
    case ClotheType.Hoodie:
      return <Hoodie/>
    case ClotheType.Overall:
      return <Overall/>
    case ClotheType.ShirtCrewNeck:
      return <ShirtCrewNeck/>
    case ClotheType.ShirtScoopNeck:
      return <ShirtScoopNeck/>
    case ClotheType.ShirtVNeck:
      return <ShirtVNeck/>
    case ClotheType.GameParkSweater:
      return <GameParkSweater/>
    default:
      return null
  }
}
