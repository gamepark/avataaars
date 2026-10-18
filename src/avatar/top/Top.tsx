import { useContext } from 'react'
import AvatarContext from '../AvatarContext'
import Crown from './Crown'
import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairPonytail from './LongHairPonytail'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import PirateHat from './PirateHat'
import PrinceCut from './PrinceCut'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import TopType from './TopType'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'
import WizardHat from './WizardHat'
import { BaseballCap, BaseballCapBack } from './headwear/BaseballCap'
import { BowlerHat, CowboyHat, Fez, GraduationCap, Sombrero, TopHat } from './headwear/FormalHats'
import { BunnyEars, CatEars, DevilHorns, FlowerCrown, Halo, PartyHat } from './headwear/FunHeadwear'
import { HardHat, VikingHelmet } from './headwear/Helmets'
import { Bandana, Beret, ChefHat, SantaHat } from './headwear/SoftHats'
import { AfroPuffs, Buzzcut, Mohawk, Pigtails, SideBraid, SpaceBuns, Spiky } from './hair/NewHair'
import { FC, PropsWithChildren } from 'react'

const headwear: Partial<Record<TopType, FC<PropsWithChildren>>> = {
  [TopType.BaseballCap]: BaseballCap,
  [TopType.BaseballCapBack]: BaseballCapBack,
  [TopType.Bandana]: Bandana,
  [TopType.Beret]: Beret,
  [TopType.ChefHat]: ChefHat,
  [TopType.SantaHat]: SantaHat,
  [TopType.TopHat]: TopHat,
  [TopType.BowlerHat]: BowlerHat,
  [TopType.CowboyHat]: CowboyHat,
  [TopType.Sombrero]: Sombrero,
  [TopType.Fez]: Fez,
  [TopType.GraduationCap]: GraduationCap,
  [TopType.VikingHelmet]: VikingHelmet,
  [TopType.HardHat]: HardHat,
  [TopType.PartyHat]: PartyHat,
  [TopType.FlowerCrown]: FlowerCrown,
  [TopType.Halo]: Halo,
  [TopType.DevilHorns]: DevilHorns,
  [TopType.CatEars]: CatEars,
  [TopType.BunnyEars]: BunnyEars,
  [TopType.Pigtails]: Pigtails,
  [TopType.SpaceBuns]: SpaceBuns,
  [TopType.AfroPuffs]: AfroPuffs,
  [TopType.SideBraid]: SideBraid,
  [TopType.Buzzcut]: Buzzcut,
  [TopType.Mohawk]: Mohawk,
  [TopType.Spiky]: Spiky
}

const Top = ({ children }) => {
  const type = useContext(AvatarContext).topType ?? TopType.LongHairStraight
  const HeadwearTop = headwear[type]
  if (HeadwearTop) return <HeadwearTop>{children}</HeadwearTop>
  switch (type) {
    case TopType.NoHair:
      return <NoHair>{children}</NoHair>
    case TopType.Eyepatch:
      return <Eyepatch/>
    case TopType.Hat:
      return <Hat>{children}</Hat>
    case TopType.Hijab:
      return <Hijab>{children}</Hijab>
    case TopType.Turban:
      return <Turban>{children}</Turban>
    case TopType.WinterHat1:
      return <WinterHat1>{children}</WinterHat1>
    case TopType.WinterHat2:
      return <WinterHat2>{children}</WinterHat2>
    case TopType.WinterHat3:
      return <WinterHat3>{children}</WinterHat3>
    case TopType.WinterHat4:
      return <WinterHat4>{children}</WinterHat4>
    case TopType.LongHairBigHair:
      return <LongHairBigHair>{children}</LongHairBigHair>
    case TopType.LongHairBob:
      return <LongHairBob>{children}</LongHairBob>
    case TopType.LongHairBun:
      return <LongHairBun>{children}</LongHairBun>
    case TopType.LongHairCurly:
      return <LongHairCurly>{children}</LongHairCurly>
    case TopType.LongHairCurvy:
      return <LongHairCurvy>{children}</LongHairCurvy>
    case TopType.LongHairDreads:
      return <LongHairDreads>{children}</LongHairDreads>
    case TopType.LongHairFrida:
      return <LongHairFrida>{children}</LongHairFrida>
    case TopType.LongHairFro:
      return <LongHairFro>{children}</LongHairFro>
    case TopType.LongHairFroBand:
      return <LongHairFroBand>{children}</LongHairFroBand>
    case TopType.LongHairNotTooLong:
      return <LongHairNotTooLong>{children}</LongHairNotTooLong>
    case TopType.LongHairShavedSides:
      return <LongHairShavedSides>{children}</LongHairShavedSides>
    case TopType.LongHairMiaWallace:
      return <LongHairMiaWallace>{children}</LongHairMiaWallace>
    case TopType.LongHairStraight:
      return <LongHairStraight>{children}</LongHairStraight>
    case TopType.LongHairStraight2:
      return <LongHairStraight2>{children}</LongHairStraight2>
    case TopType.LongHairStraightStrand:
      return <LongHairStraightStrand>{children}</LongHairStraightStrand>
    case TopType.ShortHairDreads01:
      return <ShortHairDreads01>{children}</ShortHairDreads01>
    case TopType.ShortHairDreads02:
      return <ShortHairDreads02>{children}</ShortHairDreads02>
    case TopType.ShortHairFrizzle:
      return <ShortHairFrizzle>{children}</ShortHairFrizzle>
    /* XXX: broken, fix it later
    case TopType.ShortHairShaggy:
      return <ShortHairShaggy>{children}</ShortHairShaggy>*/
    case TopType.ShortHairShaggyMullet:
      return <ShortHairShaggyMullet>{children}</ShortHairShaggyMullet>
    case TopType.ShortHairShortCurly:
      return <ShortHairShortCurly>{children}</ShortHairShortCurly>
    case TopType.ShortHairShortFlat:
      return <ShortHairShortFlat>{children}</ShortHairShortFlat>
    case TopType.ShortHairShortRound:
      return <ShortHairShortRound>{children}</ShortHairShortRound>
    case TopType.ShortHairShortWaved:
      return <ShortHairShortWaved>{children}</ShortHairShortWaved>
    case TopType.ShortHairSides:
      return <ShortHairSides>{children}</ShortHairSides>
    case TopType.ShortHairTheCaesar:
      return <ShortHairTheCaesar>{children}</ShortHairTheCaesar>
    case TopType.ShortHairTheCaesarSidePart:
      return <ShortHairTheCaesarSidePart>{children}</ShortHairTheCaesarSidePart>
    case TopType.PrinceCut:
      return <PrinceCut>{children}</PrinceCut>
    case TopType.LongHairPonytail:
      return <LongHairPonytail>{children}</LongHairPonytail>
    case TopType.Crown:
      return <Crown>{children}</Crown>
    case TopType.PirateHat:
      return <PirateHat>{children}</PirateHat>
    case TopType.WizardHat:
      return <WizardHat>{children}</WizardHat>
    default:
      return null
  }
}

export default Top
