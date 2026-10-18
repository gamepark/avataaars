import { FC, PropsWithChildren } from 'react'
import { Headwear, HeadwearBase, HatShape } from './Headwear'

// Structured hats: top hat, bowler, cowboy, sombrero, fez, graduation cap

export const TopHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <HatShape d='M80,16 C108,12 156,12 184,16 L186,80 C156,84 108,84 78,80 Z' defaultColor='#262E33'/>
      <path fill='#FFFFFF' fillOpacity='0.08' d='M86,17 L100,15.5 L100,80 L85,79 Z'/>
      <path fill='#E0464F' d='M79,62 C108,66 156,66 185,62 L185,74 C156,78 108,78 79,74 Z'/>
      <path fill='#000000' fillOpacity='0.3' d='M80,16 C108,12 156,12 184,16 C156,19 108,19 80,16 Z'/>
      <HatShape d='M56,80 C56,74 208,74 208,80 C208,87 174,90 132,90 C90,90 56,87 56,80 Z' defaultColor='#262E33'/>
      <path fill='#000000' fillOpacity='0.24' d='M56,80 C56,87 90,90 132,90 C174,90 208,87 208,80 C194,85 164,86 132,86 C100,86 70,85 56,80 Z'/>
    </>
  }>{children}</Headwear>
)

export const BowlerHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <HatShape d='M76,80 C76,40 100,20 132,20 C164,20 188,40 188,80 Z' defaultColor='#262E33'/>
      <path fill='#FFFFFF' fillOpacity='0.1' d='M88,62 C90,40 104,26 126,24 C108,32 98,44 96,64 Z'/>
      <path fill='#000000' fillOpacity='0.35' d='M76,64 C104,68 160,68 188,64 L188,80 L76,80 Z'/>
      <HatShape d='M62,76 C70,84 194,84 202,76 C206,82 200,90 190,90 C162,92 102,92 74,90 C64,90 58,82 62,76 Z' defaultColor='#262E33'/>
      <path fill='#000000' fillOpacity='0.2' d='M74,90 C102,92 162,92 190,90 C184,88 170,87 132,87 C94,87 80,88 74,90 Z'/>
    </>
  }>{children}</Headwear>
)

export const CowboyHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <path fill='#A0642E' d='M76,82 C74,52 90,18 112,16 C122,15 126,24 132,24 C138,24 142,15 152,16 C174,18 190,52 188,82 Z'/>
      <path fill='#000000' fillOpacity='0.12' d='M126,24 C130,30 132,40 132,70 C132,40 134,30 138,24 C136,25 134,26 132,26 C130,26 128,25 126,24 Z'/>
      <path fill='#5A3518' d='M78,64 C108,70 156,70 186,64 L187,76 C156,82 108,82 77,76 Z'/>
      <path fill='#B8743A' d='M40,56 C52,72 88,80 132,80 C176,80 212,72 224,56 C228,68 218,84 190,88 C162,92 102,92 74,88 C46,84 36,68 40,56 Z'/>
      <path fill='#000000' fillOpacity='0.16' d='M74,88 C102,92 162,92 190,88 C218,84 228,68 224,56 C216,74 196,82 170,84 C150,86 114,86 94,84 C68,82 48,74 40,56 C36,68 46,84 74,88 Z'/>
    </>
  }>{children}</Headwear>
)

// Zigzag ribbon on the sombrero band, from x=78 to x=186
const zigzag = (() => {
  const top: string[] = []
  const bottom: string[] = []
  for (let i = 0; i <= 18; i++) {
    const x = 78 + i * 6
    const y = i % 2 === 0 ? 61 : 66
    top.push(`${x},${y}`)
    bottom.unshift(`${x},${y + 2.5}`)
  }
  return 'M' + top.join(' L') + ' L' + bottom.join(' L') + ' Z'
})()

export const Sombrero: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <path fill='#E7B85C' d='M78,76 C76,40 100,10 132,10 C164,10 188,40 186,76 Z'/>
      <path fill='#D6293B' d='M78,60 C108,64 156,64 186,60 L186,70 C156,74 108,74 78,70 Z'/>
      <path fill='#2E9E5B' d={zigzag}/>
      <path fill='#F0C870' d='M22,70 C30,58 80,64 132,64 C184,64 234,58 242,70 C246,82 200,90 132,90 C64,90 18,82 22,70 Z'/>
      <path fill='#000000' fillOpacity='0.14' d='M22,70 C18,82 64,90 132,90 C200,90 246,82 242,70 C230,80 190,85 132,85 C74,85 34,80 22,70 Z'/>
      <path fill='#D6293B' d='M30,74 C60,82 204,82 234,74 L236,77 C204,86 60,86 28,77 Z'/>
    </>
  }>{children}</Headwear>
)

export const Fez: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.None} hat={
    <>
      <path fill='#C0262E' d='M76,84 L98,16 C118,12 146,12 166,16 L188,84 C160,90 104,90 76,84 Z'/>
      <path fill='#000000' fillOpacity='0.16' d='M150,13.5 C156,14.2 161.5,15 166,16 L188,84 C180,85.7 170,87 158,88 Z'/>
      <path fill='#000000' fillOpacity='0.2' d='M78,78 C104,84 160,84 186,78 L188,84 C160,90 104,90 76,84 Z'/>
      <path fill='#8E1A20' d='M98,16 C118,12 146,12 166,16 C146,19 118,19 98,16 Z'/>
      <path fill='#1F2426' d='M132,15 C142,15 154,20 160,32 L164,52 L160,52 L157,33 C152,23 142,18 132,18 Z'/>
      <path fill='#1F2426' d='M157,50 L167,50 L169,64 L155,64 Z'/>
    </>
  }>{children}</Headwear>
)

export const GraduationCap: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => (
  <Headwear base={HeadwearBase.Short} hat={
    <>
      <path fill='#262E33' d='M74,84 C74,54 100,42 132,42 C164,42 190,54 190,84 C168,89 96,89 74,84 Z'/>
      <path fill='#000000' fillOpacity='0.2' d='M74,84 C96,89 168,89 190,84 L190,76 C168,81 96,81 74,76 Z'/>
      <path fill='#2F383B' d='M56,40 L132,22 L208,40 L132,58 Z'/>
      <path fill='#FFFFFF' fillOpacity='0.08' d='M56,40 L132,22 L132,58 Z'/>
      <path fill='#000000' fillOpacity='0.25' d='M56,40 L132,58 L208,40 L208,43 L132,61 L56,43 Z'/>
      <path fill='#F4C430' d='M131,39 L195,44 L198,44 L200,70 L196,70 L194,47 L131,42 Z'/>
      <path fill='#F4C430' d='M192,68 L204,68 L206,84 L190,84 Z'/>
      <circle fill='#F4C430' cx='132' cy='40' r='3'/>
    </>
  }>{children}</Headwear>
)
