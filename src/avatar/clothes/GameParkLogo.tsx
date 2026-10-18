type Props = {
  maskID?: string
  x: number
  y: number
  scale: number
  fill?: string
}

// Game Park logo icon (4 dots + pawn), source viewBox 0 0 65 88
export default function GameParkLogo ({ maskID, x, y, scale, fill = '#FFFFFF' }: Props) {
  return (
    <g mask={maskID ? `url(#${maskID})` : undefined} fill={fill} fillRule='evenodd'>
      <g transform={`translate(${x}, ${y}) scale(${scale})`}>
        <circle cx='11.52' cy='11.52' r='11.52'/>
        <circle cx='53.49' cy='11.52' r='11.52'/>
        <circle cx='11.52' cy='52.78' r='11.52'/>
        <circle cx='53.49' cy='52.78' r='11.52'/>
        <path transform='translate(-393.75 -467.67)'
              d='M429.48,510.5a11.51,11.51,0,1,0-6.68,0c-2.67,41.22-28.09,36.57-28.09,36.57v8.63h62.86v-8.63S432.16,551.72,429.48,510.5Z'/>
      </g>
    </g>
  )
}
