type Props = {
  id: string
  opacity?: number
}

// Same soft drop shadow as the original glasses
export default function Shadow ({ id, opacity = 0.1 }: Props) {
  return (
    <filter x='-10%' y='-10%' width='120%' height='130%' filterUnits='objectBoundingBox' id={id}>
      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/>
      <feColorMatrix values={`0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 ${opacity} 0`} type='matrix' in='shadowOffsetOuter1' result='shadowMatrixOuter1'/>
      <feMerge>
        <feMergeNode in='shadowMatrixOuter1'/>
        <feMergeNode in='SourceGraphic'/>
      </feMerge>
    </filter>
  )
}
