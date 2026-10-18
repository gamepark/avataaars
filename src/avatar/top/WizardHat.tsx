import FacialHair from './facialHair'
import HatColor from './HatColor'
import { FC, useId, PropsWithChildren } from 'react'

const star = 'M0,-6 L1.8,-1.9 L6,-1.6 L2.8,1.2 L3.8,5.4 L0,3.1 L-3.8,5.4 L-2.8,1.2 L-6,-1.6 L-1.8,-1.9 Z'

const WizardHat: FC<PropsWithChildren> = ({ children }) => {
  const filter1 = useId()
  const mask1 = useId()
  const path1 = useId()
  return (
    <g strokeWidth='1' fillRule='evenodd'>
      <defs>
        <path id={path1}
              d='M74,72 C88,52 102,30 120,18 C134,9 152,6 170,10 C176,11.5 182,14 186,18 C176,18 166,22 164,32 C166,44 168,48 176,54 C182,60 188,66 192,72 C216,72 222,82 200,86 C170,92 94,92 64,86 C42,82 48,72 78,70 Z'/>
        <filter x='-10%' y='-10%' width='120%' height='130%' filterUnits='objectBoundingBox' id={filter1}>
          <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/>
          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1' result='shadowMatrixOuter1'/>
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1'/>
            <feMergeNode in='SourceGraphic'/>
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <g filter={`url(#${filter1})`} transform='translate(0, -7)'>
        <use fill='#5B3C9E' xlinkHref={'#' + path1}/>
        <HatColor maskID={mask1} defaultColor='#5B3C9E'/>
        <g mask={`url(#${mask1})`}>
          <path fill='#000000' fillOpacity='0.24' d='M44,80 C70,90 194,90 220,80 L220,100 L44,100 Z'/>
          <path fill='#000000' fillOpacity='0.16' d='M80,62 C110,58 154,58 184,62 L190,72 C156,67 108,67 74,72 Z'/>
          <path fill='#FFFFFF' fillOpacity='0.12' d='M120,18 C134,9 152,6 170,10 C152,10 136,17 126,29 C116,42 104,56 94,70 L80,72 C94,50 104,30 120,18 Z'/>
        </g>
      </g>
      <g fill='#FFD84A' transform='translate(0, -7)'>
        <path transform='translate(118, 42)' d={star}/>
        <path transform='translate(146, 52) scale(0.7)' d={star}/>
        <path transform='translate(134, 30) scale(0.6)' d={star}/>
        <circle cx='104' cy='58' r='2'/>
        <circle cx='152' cy='36' r='1.6'/>
      </g>
      <g transform='translate(-1, 0)'>
        <FacialHair/>
        {children}
      </g>
    </g>
  )
}

export default WizardHat
