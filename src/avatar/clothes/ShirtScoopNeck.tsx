import { useId } from 'react'
import ClotheColor from './ClotheColor'

export default function ShirtScoopNeck2 () {
  const path1 = useId()
  const mask1 = useId()

  return (
    <g transform='translate(0, 170)'>
      <defs>
        <path id={path1}
              d='M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill='#E6E6E6' fillRule='evenodd' xlinkHref={'#' + path1}/>
      <ClotheColor maskID={mask1}/>
    </g>
  )
}
