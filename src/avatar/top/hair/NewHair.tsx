import { FC, PropsWithChildren } from 'react'
import { circlePath, ellipsePath, HairTop, mirrorPath, pulledBackCap, Tie } from './HairTop'

const buzz = 'M76,96 C74,58 100,33 132,33 C164,33 190,58 188,96 L184,96 C183,80 180,70 174,64 C160,58 146,56 132,56 C118,56 104,58 90,64 C84,70 81,80 80,96 Z'

const shade = (maskID: string, d: string, opacity = 0.16) => (
  <path stroke='none' fill='#000000' fillOpacity={opacity} mask={`url(#${maskID})`} d={d}/>
)

// Pigtails: cap + one tail on each side, tied above the ears
const pigtail = 'M186,66 C198,60 214,66 220,80 C226,96 224,120 218,140 C214,152 210,160 204,166 C202,158 204,146 205,134 C206,118 205,104 200,92 C196,84 191,77 186,72 Z'
const pigtailShade = 'M200,92 C205,104 206,118 205,134 C204,146 202,158 204,166 C208,160 211,152 213,142 C216,124 214,104 207,88 C203,80 196,74 190,72 C194,78 197,84 200,92 Z'

export const Pigtails: FC<PropsWithChildren> = ({ children }) => (
  <HairTop d={[pulledBackCap, pigtail, mirrorPath(pigtail)]}
           shading={m => <>{shade(m, pigtailShade)}{shade(m, mirrorPath(pigtailShade))}</>}
           extras={<><Tie x={191} y={70} angle={60}/><Tie x={73} y={70} angle={-60}/></>}>
    {children}
  </HairTop>
)

// Space buns: two buns like LongHairBun's (wider than tall), on each side of the top of the head
function bunPath (cx: number, cy: number, rx: number, ry: number, angle: number) {
  const t = angle * Math.PI / 180
  const dx = rx * Math.cos(t), dy = rx * Math.sin(t)
  return `M${cx + dx},${cy + dy} A${rx},${ry} ${angle} 1 1 ${cx - dx},${cy - dy} A${rx},${ry} ${angle} 1 1 ${cx + dx},${cy + dy} Z`
}

const coil = (cx: number, cy: number, flip: number) =>
  `M${cx - 9 * flip},${cy + 1} C${cx - 9 * flip},${cy - 7} ${cx + 2 * flip},${cy - 9} ${cx + 7 * flip},${cy - 4} C${cx + 11 * flip},${cy} ${cx + 6 * flip},${cy + 7} ${cx},${cy + 5}`

export const SpaceBuns: FC<PropsWithChildren> = ({ children }) => (
  <HairTop d={[pulledBackCap, bunPath(101, 26, 20, 16, -18), bunPath(165, 26, 20, 16, 18)]}
           shading={m => <g mask={`url(#${m})`}>
             <path fill='#000000' fillOpacity='0.16' d='M82,30 C84,40 92,45 102,44 C110,43 117,38 120,30 C114,36 108,39 101,39 C93,39 86,36 82,30 Z M144,30 C147,38 154,43 162,44 C172,45 180,40 182,30 C178,36 171,39 163,39 C156,39 150,36 144,30 Z'/>
             <path fill='none' stroke='#000000' strokeOpacity='0.2' strokeWidth='2.2' strokeLinecap='round' d={coil(101, 25, 1) + ' ' + coil(165, 25, -1)}/>
           </g>}>
    {children}
  </HairTop>
)

// Afro puffs: two big round puffs on the sides of the head
export const AfroPuffs: FC<PropsWithChildren> = ({ children }) => (
  <HairTop d={[pulledBackCap, circlePath(80, 42, 27), circlePath(184, 42, 27)]}
           shading={m => <>
             {shade(m, 'M53,46 C55,60 66,69 80,69 C94,69 105,60 107,46 C100,57 91,62 80,62 C69,62 60,57 53,46 Z')}
             {shade(m, 'M157,46 C159,60 170,69 184,69 C198,69 209,60 211,46 C204,57 195,62 184,62 C173,62 164,57 157,46 Z')}
             <g fill='#FFFFFF' fillOpacity='0.1' mask={`url(#${m})`}>
               <circle cx='70' cy='32' r='6'/><circle cx='174' cy='32' r='6'/>
             </g>
           </>}>
    {children}
  </HairTop>
)

// Side braid falling over the right shoulder
const braidSegments = Array.from({ length: 9 }, (_, i) => {
  const t = i / 8
  const cx = 199 + t * 8 + (i % 2 === 0 ? -2.5 : 2.5)
  const cy = 86 + i * 11.5
  return ellipsePath(Number(cx.toFixed(1)), cy, 10 - t * 2.5, 7.5)
})

export const SideBraid: FC<PropsWithChildren> = ({ children }) => (
  <HairTop d={[pulledBackCap, 'M184,64 C194,66 202,74 203,86 L191,86 C190,78 187,72 184,70 Z', ...braidSegments, 'M206,186 C209,194 215,198 221,198 C215,202 207,200 203,194 Z']}
           shading={m => <g mask={`url(#${m})`} fill='#000000' fillOpacity='0.16'>
             {Array.from({ length: 9 }, (_, i) => {
               const t = i / 8
               const cx = 199 + t * 8 + (i % 2 === 0 ? -2.5 : 2.5)
               return <rect key={i} x={cx - 9} y={86 + i * 11.5 + 4} width={18 - t * 4} height='3' rx='1.5'/>
             })}
           </g>}
           extras={<Tie x={207} y={186} angle={10}/>}>
    {children}
  </HairTop>
)

// Buzz cut: very short hair following the skull
export const Buzzcut: FC<PropsWithChildren> = ({ children }) => (
  <HairTop opacity={0.85}
           d={buzz}>
    {children}
  </HairTop>
)

// Mohawk: a crest in the middle, shaved sides
export const Mohawk: FC<PropsWithChildren> = ({ children }) => (
  <HairTop underlay={{ d: buzz, opacity: 0.3 }}
           d='M118,60 C114,44 116,24 120,8 L126,20 L132,0 L138,20 L144,8 C148,24 150,44 146,60 C140,56 124,56 118,60 Z'
           shading={m => shade(m, 'M132,0 L138,20 L144,8 C148,24 150,44 146,60 C143,58.5 138,57.5 132,57.3 Z')}>
    {children}
  </HairTop>
)

// Spiky hair, manga style
export const Spiky: FC<PropsWithChildren> = ({ children }) => (
  <HairTop d='M78,96 C76,84 74,76 76,70 L64,42 L90,46 L86,14 L110,30 L120,0 L134,24 L150,2 L156,30 L180,12 L176,44 L202,40 L188,72 C190,80 190,88 186,96 C184,78 178,68 168,62 C156,66 144,64 136,58 C126,66 108,68 96,64 C86,70 80,80 78,96 Z'
           shading={m => shade(m, 'M76,70 C78,62 84,56 92,54 C86,62 82,72 80,86 Z M188,72 C186,62 180,56 172,54 C178,62 182,72 184,86 Z M96,64 C108,68 126,66 136,58 C144,64 156,66 168,62 C156,60 144,56 136,50 C126,58 110,62 96,64 Z')}>
    {children}
  </HairTop>
)
