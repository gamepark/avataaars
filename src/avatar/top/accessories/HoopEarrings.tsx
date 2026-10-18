const hoop = 'M0,-1 C5.523,-1 10,3.477 10,9 C10,14.523 5.523,19 0,19 C-5.523,19 -10,14.523 -10,9 C-10,3.477 -5.523,-1 0,-1 Z M0,2.2 C-3.756,2.2 -6.8,5.244 -6.8,9 C-6.8,12.756 -3.756,15.8 0,15.8 C3.756,15.8 6.8,12.756 6.8,9 C6.8,5.244 3.756,2.2 0,2.2 Z'
const shade = 'M10,9 C10,14.523 5.523,19 0,19 C-5.523,19 -10,14.523 -10,9 L-6.8,9 C-6.8,12.756 -3.756,15.8 0,15.8 C3.756,15.8 6.8,12.756 6.8,9 Z'

export default function HoopEarrings () {
  return (
    <g transform='translate(1, 0)' fillRule='evenodd'>
      <g transform='translate(70, 132)'>
        <path fill='#E6B325' d={hoop}/>
        <path fill='#000000' fillOpacity='0.16' d={shade}/>
      </g>
      <g transform='translate(194, 132)'>
        <path fill='#E6B325' d={hoop}/>
        <path fill='#000000' fillOpacity='0.16' d={shade}/>
      </g>
    </g>
  )
}
