import { ReactNode, useId } from 'react'
import ClotheColor from './ClotheColor'

// Clothes in the clothes frame (translate(0, 170)): shoulders from y=29, neck x≈99-166, bottom y=110

const crewNeck = 'M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'
const vNeck = 'M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z'
const fullTorso = 'M104,29 C64.235498,29 32,61.235498 32,101 L32,110 L232,110 L232,101 C232,61.235498 199.764502,29 160,29 Z'

type GarmentProps = {
  d: string
  base?: string
  colored?: boolean
  children?: (maskID: string) => ReactNode
}

// A garment body: grey placeholder, then clotheColor (or a fixed base color), then details clipped to the body
function Garment ({ d, base = '#E6E6E6', colored = true, children }: GarmentProps) {
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
      <use fill={base} fillRule='evenodd' xlinkHref={'#' + path1}/>
      {colored && <ClotheColor maskID={mask1}/>}
      {children && children(mask1)}
    </>
  )
}

const inside = (maskID: string, node: ReactNode) => <g mask={`url(#${maskID})`}>{node}</g>

const neckShadow = (maskID: string) => inside(maskID,
  <ellipse fill='#000000' fillOpacity='0.1' cx='132.5' cy='31.8' rx='39.6' ry='26.9'/>
)

export function StripedShirt () {
  const stripes = useId()
  return (
    <g transform='translate(0, 170)'>
      <Garment d={crewNeck} base='#F7F7F7' colored={false}>
        {m => <>
          <mask id={stripes} fill='white'>
            {[44, 58, 72, 86, 100].map(y => <rect key={y} x='0' y={y} width='264' height='7'/>)}
          </mask>
          {inside(m, <ClotheColor maskID={stripes}/>)}
          {neckShadow(m)}
        </>}
      </Garment>
    </g>
  )
}

export function Turtleneck () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={fullTorso}>
        {m => inside(m, <path fill='#000000' fillOpacity='0.1' d='M90,30 C100,46 116,54 132,54 C148,54 164,46 174,30 Z'/>)}
      </Garment>
      <Garment d='M106,44 L106,15 C114,22 122,26 132,26 C142,26 150,22 158,15 L158,44 C150,50 114,50 106,44 Z'>
        {m => inside(m, <>
          <path fill='#000000' fillOpacity='0.16' d='M106,15 C114,22 122,26 132,26 C142,26 150,22 158,15 L158,22 C150,30 142,33 132,33 C122,33 114,30 106,22 Z'/>
          <path fill='#000000' fillOpacity='0.08' d='M106,32 C114,38 150,38 158,32 L158,36 C150,42 114,42 106,36 Z'/>
        </>)}
      </Garment>
    </g>
  )
}

const hibiscus = (x: number, y: number, s: number) => (
  <g key={`${x}-${y}`} transform={`translate(${x}, ${y}) scale(${s})`}>
    <g fill='#FFFFFF' fillOpacity='0.85'>
      <circle cx='0' cy='-5' r='4.5'/><circle cx='4.8' cy='-1.5' r='4.5'/><circle cx='3' cy='4' r='4.5'/>
      <circle cx='-3' cy='4' r='4.5'/><circle cx='-4.8' cy='-1.5' r='4.5'/>
    </g>
    <circle fill='#F4C430' r='2.4'/>
  </g>
)

export function HawaiianShirt () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={vNeck}>
        {m => inside(m, <>
          {[[62, 72, 1], [84, 52, 0.8], [180, 54, 0.9], [204, 78, 1.1], [110, 94, 0.9], [160, 92, 1], [52, 100, 0.8], [214, 104, 0.8]]
            .map(([x, y, s]) => hibiscus(x, y, s))}
          <path fill='#2E9E5B' fillOpacity='0.8' d='M72,62 C78,56 86,56 90,60 C84,62 78,64 72,62 Z M190,66 C196,60 204,60 208,64 C202,66 196,68 190,66 Z M150,104 C156,98 164,98 168,102 C162,104 156,106 150,104 Z'/>
        </>)}
      </Garment>
      <path fill='#000000' fillOpacity='0.16' d='M92.7,29.9 C92,40 100,52 112,60 L108,46 C100,42 95,36 92.7,29.9 Z M171.3,29.9 C172,40 164,52 152,60 L156,46 C164,42 169,36 171.3,29.9 Z'/>
    </g>
  )
}

export function FootballJersey () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={vNeck}>
        {m => inside(m, <>
          <path fill='#FFFFFF' d='M54,52 C60,46 66,42 72,39 L76,46 C70,49 64,53 59,58 Z M210,52 C204,46 198,42 192,39 L188,46 C194,49 200,53 205,58 Z'/>
          <g fill='#FFFFFF'>
            <path d='M116,80 L122,76 L126,76 L126,106 L120,106 L120,83 L116,85 Z'/>
            <path fillRule='evenodd' d='M140,76 C147,76 151,82 151,91 C151,100 147,106 140,106 C133,106 129,100 129,91 C129,82 133,76 140,76 Z M140,81.5 C137,81.5 135,85 135,91 C135,97 137,100.5 140,100.5 C143,100.5 145,97 145,91 C145,85 143,81.5 140,81.5 Z'/>
          </g>
        </>)}
      </Garment>
      <path fill='#FFFFFF' d='M92.7,29.9 C93.6,35 96.1,39.8 100.2,43.5 L132,72 L163.8,43.5 C168.4,38.8 170.5,34.5 171.3,29.9 L174,30.4 C173,36 170.6,41 166.6,45 L134.7,73.8 C133.2,75.2 130.8,75.2 129.3,73.8 L97.4,45 C93.4,41 91,36 90,30.4 Z'/>
    </g>
  )
}

// Tuxedo: the BlazerShirt cut (neck opening, side panels, lapels) in black satin over a white shirt
const blazerBody = 'M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z'
const blazerPanels = 'M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
const blazerPocket = 'M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
const blazerLapel = 'M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
const blazerLapelRight = 'M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'

export function Tuxedo () {
  const mask1 = useId()
  const path1 = useId()
  return (
    <g transform='translate(0, 170)'>
      <defs>
        <path id={path1} d={blazerBody}/>
      </defs>
      <g transform='translate(32, 29)'>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1}/>
        </mask>
        <use fill='#F7F7F7' xlinkHref={'#' + path1}/>
        <g opacity='0.6' mask={`url(#${mask1})`} fillOpacity='0.16' fill='#000000'>
          <ellipse cx='100.5' cy='2.8' rx='39.6' ry='26.9'/>
        </g>
        <g fill='#262E33'>
          <circle cx='100.5' cy='37' r='1.8'/>
          <circle cx='100.5' cy='48' r='1.8'/>
          <circle cx='100.5' cy='59' r='1.8'/>
        </g>
      </g>
      <g transform='translate(32, 28)'>
        <path fill='#1F2426' d={blazerPanels}/>
        <path fill='#F7F7F7' d={blazerPocket}/>
        <path fill='#2F383B' d={blazerLapel}/>
        <path fill='#2F383B' transform='translate(141, 41) scale(-1, 1) translate(-141, -41)' d={blazerLapelRight}/>
      </g>
      <g transform='translate(132.5, 54)'>
        <path fill='#1F2426' d='M-3,-3 L-15,-8.5 C-17,-9.4 -18,-8.5 -18,-6.5 L-18,6.5 C-18,8.5 -17,9.4 -15,8.5 L-3,3 Z M3,-3 L15,-8.5 C17,-9.4 18,-8.5 18,-6.5 L18,6.5 C18,8.5 17,9.4 15,8.5 L3,3 Z'/>
        <path fill='#FFFFFF' fillOpacity='0.12' d='M-15,-6.5 L-5,-2 L-5,0 L-16,-4 Z M15,-6.5 L5,-2 L5,0 L16,-4 Z'/>
        <rect fill='#2F383B' x='-4' y='-4' width='8' height='8' rx='2'/>
      </g>
    </g>
  )
}

export function ShirtTie () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={crewNeck} base='#F7F7F7' colored={false}>
        {m => <>
          {neckShadow(m)}
          {inside(m, <path fill='#000000' fillOpacity='0.06' d='M131.5,52 L133.5,52 L133.5,110 L131.5,110 Z'/>)}
        </>}
      </Garment>
      <path fill='#E6E6E6' d='M99,29 L106,24 C110,36 120,45 132.5,48 L120,58 C108,52 100,42 99,29 Z M166,29 L159,24 C155,36 145,45 132.5,48 L145,58 C157,52 165,42 166,29 Z'/>
      <path fill='#000000' fillOpacity='0.08' d='M120,58 L132.5,48 L145,58 L141,59 L132.5,52 L124,59 Z'/>
      <Garment d='M126,46 L139,46 L141,55 L124,55 Z M125.5,55 L139.5,55 L146,96 L132.5,108 L119,96 Z'>
        {m => inside(m, <path fill='#000000' fillOpacity='0.16' d='M124,52 L141,52 L141,55 L124,55 Z'/>)}
      </Garment>
    </g>
  )
}

export function Kimono () {
  return (
    <g transform='translate(0, 170)'>
      <path fill='#F7F7F7' d='M100.2,43.5 L129.3,69.8 C130.8,71.1 133.2,71.1 134.7,69.8 L163.8,43.5 L160,39.5 L132.5,64 L104,39.5 Z'/>
      <Garment d={vNeck}>
        {m => inside(m, <>
          <path fill='#000000' fillOpacity='0.24' d='M92.7,29.9 C93.6,35 96.1,39.8 100.2,43.5 L129.3,69.8 L123.5,76 L94,49.5 C89,44.5 86.5,37.5 86,30.6 Z'/>
          <path fill='#000000' fillOpacity='0.3' d='M171.3,29.9 L178,30.6 C177.5,37.5 175,44.5 170,49.5 L124,92 L118,86 L163.8,43.5 C168.4,38.8 170.5,34.5 171.3,29.9 Z'/>
          <path fill='#262E33' d='M32,92 L232,92 L232,110 L32,110 Z'/>
          <path fill='#E0464F' d='M32,96 L232,96 L232,100 L32,100 Z'/>
        </>)}
      </Garment>
    </g>
  )
}

// Stand collar hugging the crew neck opening
const standCollar = 'M99,29.2 C99,42.2 114,51.8 132.5,51.8 C151,51.8 166,42.2 166,29.3 L160,26 C159,37 147,45 132.5,45 C118,45 106,37 105,26 Z'
const standCollarShade = 'M99,29.2 C99,42.2 114,51.8 132.5,51.8 C151,51.8 166,42.2 166,29.3 L165,33 C162,44 149,53.5 132.5,53.5 C116,53.5 103,44 100,33 Z'

export function Armor () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={crewNeck} base='#9AA5AD' colored={false}>
        {m => inside(m, <>
          <path fill='#FFFFFF' fillOpacity='0.2' d='M120,52 L130,52 L130,110 L112,110 Z'/>
          <path fill='#000000' fillOpacity='0.12' d='M135,52 L145,52 L153,110 L135,110 Z'/>
          <path fill='#7C878F' d='M80,72 C110,64 154,64 184,72 L184,76 C154,68 110,68 80,76 Z M78,90 C110,82 154,82 186,90 L186,94 C154,86 110,86 78,94 Z'/>
          <ellipse fill='#7C878F' cx='56' cy='62' rx='30' ry='24'/>
          <ellipse fill='#7C878F' cx='208' cy='62' rx='30' ry='24'/>
          <ellipse fill='#FFFFFF' fillOpacity='0.15' cx='52' cy='54' rx='16' ry='8'/>
          <ellipse fill='#FFFFFF' fillOpacity='0.15' cx='212' cy='54' rx='16' ry='8'/>
          <g fill='#C9D1D6'><circle cx='50' cy='72' r='2'/><circle cx='64' cy='76' r='2'/><circle cx='214' cy='72' r='2'/><circle cx='200' cy='76' r='2'/></g>
        </>)}
      </Garment>
      <path fill='#7C878F' d={standCollar}/>
      <path fill='#000000' fillOpacity='0.16' d={standCollarShade}/>
      <g fill='#C9D1D6'><circle cx='112' cy='42' r='1.6'/><circle cx='132.5' cy='48.5' r='1.6'/><circle cx='153' cy='42' r='1.6'/></g>
    </g>
  )
}

export function SuperheroSuit () {
  return (
    <g transform='translate(0, 170)'>
      <path fill='#C0262E' d='M88,31 C50,40 20,70 12,110 L252,110 C244,70 214,40 176,31 Z'/>
      <Garment d={crewNeck}>
        {m => <>
          {neckShadow(m)}
          {inside(m, <>
            <path fill='#F4C430' d='M132,62 L152,72 L132,100 L112,72 Z'/>
            <path fill='#C0262E' d='M132,70 L134.5,77 L141.5,77 L136,81.5 L138,88.5 L132,84.5 L126,88.5 L128,81.5 L122.5,77 L129.5,77 Z'/>
          </>)}
        </>}
      </Garment>
    </g>
  )
}

export function ChristmasSweater () {
  const zig = Array.from({ length: 21 }, (_, i) => `${32 + i * 10},${i % 2 === 0 ? 74 : 66}`).join(' L')
  return (
    <g transform='translate(0, 170)'>
      <Garment d={crewNeck}>
        {m => <>
          {neckShadow(m)}
          {inside(m, <>
            <path fill='none' stroke='#FFFFFF' strokeWidth='3' d={'M' + zig}/>
            <path fill='none' stroke='#2E9E5B' strokeWidth='3' d={'M' + zig.replace(/,(74|66)/g, (_, y) => ',' + (parseInt(y) + 10))}/>
            <g fill='#FFFFFF'>
              {[56, 92, 132, 172, 208].map(x => <g key={x} transform={`translate(${x}, 96)`}>
                <rect x='-0.8' y='-5' width='1.6' height='10'/>
                <rect x='-0.8' y='-5' width='1.6' height='10' transform='rotate(60)'/>
                <rect x='-0.8' y='-5' width='1.6' height='10' transform='rotate(-60)'/>
              </g>)}
            </g>
          </>)}
        </>}
      </Garment>
      <path fill='#FFFFFF' fillOpacity='0.85' d='M99,29.2 C99,42.2 114,51.8 132.5,51.8 C151,51.8 166,42.2 166,29.3 L170,29.6 C170,45 153,56 132.5,56 C112,56 95,45 95,29.5 Z'/>
    </g>
  )
}

export function ChefJacket () {
  return (
    <g transform='translate(0, 170)'>
      <Garment d={crewNeck} base='#F7F7F7' colored={false}>
        {m => <>
          {neckShadow(m)}
          {inside(m, <>
            <path fill='#000000' fillOpacity='0.07' d='M146,50 L149,50 L149,110 L146,110 Z'/>
            <g fill='#C9D1D6'>
              {[64, 78, 92].map(y => <g key={y}><circle cx='122' cy={y} r='2.6'/><circle cx='160' cy={y} r='2.6'/></g>)}
            </g>
          </>)}
        </>}
      </Garment>
      <path fill='#EBEBEB' d={standCollar}/>
      <path fill='#000000' fillOpacity='0.08' d={standCollarShade}/>
    </g>
  )
}
