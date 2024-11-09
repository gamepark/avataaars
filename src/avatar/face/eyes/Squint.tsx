import { useId } from 'react'

export default function Squint () {
  const path1 = useId()
  const path2 = useId()
  const mask1 = useId()
  const mask2 = useId()
  return (
    <g transform='translate(0, 8)'>
      <defs>
        <path id={path1}
              d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'/>
        <path id={path2}
              d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'/>
      </defs>
      <g transform='translate(16, 13)'>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1}/>
        </mask>
        <use fill='#FFFFFF' xlinkHref={'#' + path1}/>
        <circle fillOpacity='0.699999988' fill='#000000' mask={`url(#${mask1})`} cx='14' cy='10' r='6'/>
      </g>
      <g transform='translate(68, 13)'>
        <mask id={mask2} fill='white'>
          <use xlinkHref={'#' + path2}/>
        </mask>
        <use fill='#FFFFFF' xlinkHref={'#' + path2}/>
        <circle fillOpacity='0.699999988' fill='#000000' mask={`url(#${mask2})`} cx='14' cy='10' r='6'/>
      </g>
    </g>
  )
}
