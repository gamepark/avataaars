import ShortHairTheCaesar from './ShortHairTheCaesar'
import { FC, useId, PropsWithChildren } from 'react'

const Crown: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => {
  const filter1 = useId()
  return (
    <ShortHairTheCaesar>
      <g transform='translate(1, 0)'>
        <defs>
          <filter x='-10%' y='-10%' width='120%' height='130%' filterUnits='objectBoundingBox' id={filter1}>
            <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/>
            <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1' result='shadowMatrixOuter1'/>
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1'/>
              <feMergeNode in='SourceGraphic'/>
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#${filter1})`}>
          <path fill='#C99A12' d='M102,36 L102,19 C118,15 146,15 162,19 L162,36 Z'/>
          <path fill='#F4C430' d='M102,36 L97,8 L117,24 L132,4 L147,24 L167,8 L162,36 C148,33 116,33 102,36 Z'/>
          <path fill='#FFFFFF' fillOpacity='0.3' d='M132,4 L132,33.6 C127,33.6 122,33.8 117,34.2 L117,24 Z'/>
          <path fill='#F4C430' d='M102,36 C116,33 148,33 162,36 L163,46 C148,43 116,43 101,46 Z'/>
          <path fill='#000000' fillOpacity='0.16' d='M101.5,41 C116,38 148,38 162.5,41 L163,46 C148,43 116,43 101,46 Z'/>
          <circle fill='#F4C430' cx='97' cy='7' r='3.5'/>
          <circle fill='#F4C430' cx='132' cy='3.5' r='3.5'/>
          <circle fill='#F4C430' cx='167' cy='7' r='3.5'/>
          <circle fill='#E0464F' cx='132' cy='39.6' r='3.2'/>
          <circle fill='#3D9BE9' cx='116' cy='40.2' r='2.4'/>
          <circle fill='#3D9BE9' cx='148' cy='40.2' r='2.4'/>
        </g>
      </g>
      {children}
    </ShortHairTheCaesar>
  )
}

export default Crown
