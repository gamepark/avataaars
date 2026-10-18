import FacialHair from './facialHair'
import { FC, useId, PropsWithChildren } from 'react'

const PirateHat: FC<PropsWithChildren<PropsWithChildren>> = ({ children }) => {
  const filter1 = useId()
  return (
    <g strokeWidth='1' fillRule='evenodd'>
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
      <g filter={`url(#${filter1})`} transform='translate(0, -6)'>
        <path fill='#262E33'
              d='M28,62 C46,74 62,84 80,90 C98,84 114,81 132,81 C150,81 166,84 184,90 C202,84 218,74 236,62 C226,36 194,12 132,12 C70,12 38,36 28,62 Z'/>
        <path fill='#E6B325'
              d='M28,62 C38,36 70,12 132,12 C194,12 226,36 236,62 L230,62 C219,40 190,19 132,19 C74,19 45,40 34,62 Z'/>
        <path fill='#000000' fillOpacity='0.24'
              d='M28,62 C46,74 62,84 80,90 C98,84 114,81 132,81 C150,81 166,84 184,90 C202,84 218,74 236,62 C218,70 202,76 184,80 C166,75 150,73 132,73 C114,73 98,75 80,80 C62,76 46,70 28,62 Z'/>
        <g transform='translate(132, 46) scale(1.15)' fill='#FFFFFF'>
          <path d='M-14,-6 L14,8 L12.5,10.5 L-15.5,-3.5 Z M14,-6 L-14,8 L-12.5,10.5 L15.5,-3.5 Z'/>
          <path d='M0,-12 C6,-12 10,-8 10,-2.5 C10,1 8,3 6,4 L6,8 L-6,8 L-6,4 C-8,3 -10,1 -10,-2.5 C-10,-8 -6,-12 0,-12 Z'/>
          <circle fill='#262E33' cx='-4' cy='-2.5' r='2.6'/>
          <circle fill='#262E33' cx='4' cy='-2.5' r='2.6'/>
        </g>
      </g>
      <g transform='translate(-1, 0)'>
        <FacialHair/>
        {children}
      </g>
    </g>
  )
}

export default PirateHat
