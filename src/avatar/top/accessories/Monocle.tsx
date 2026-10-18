import { useId } from 'react'
import Shadow from './Shadow'

export default function Monocle () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1} opacity={0.16}/>
      </defs>
      <path fill='none' stroke='#C9971C' strokeWidth='1.6' strokeLinecap='round'
            d='M166,130 C172,150 168,168 178,184 C182,190 186,196 188,206'/>
      <g filter={`url(#${filter1})`}>
        <circle fill='#FFFFFF' fillOpacity='0.25' cx='158' cy='112' r='14'/>
        <path fill='#FFFFFF' fillOpacity='0.5' d='M148,106 C150,101 155,99 159,99.5 C156,101.5 152,104 150,108.5 Z'/>
        <path fill='#E6B325' fillRule='evenodd'
              d='M158,94.5 C167.665,94.5 175.5,102.335 175.5,112 C175.5,121.665 167.665,129.5 158,129.5 C148.335,129.5 140.5,121.665 140.5,112 C140.5,102.335 148.335,94.5 158,94.5 Z M158,98 C150.268,98 144,104.268 144,112 C144,119.732 150.268,126 158,126 C165.732,126 172,119.732 172,112 C172,104.268 165.732,98 158,98 Z'/>
        <path fill='#000000' fillOpacity='0.16'
              d='M175.5,112 C175.5,121.665 167.665,129.5 158,129.5 C148.335,129.5 140.5,121.665 140.5,112 L144,112 C144,119.732 150.268,126 158,126 C165.732,126 172,119.732 172,112 Z'/>
        <circle fill='#E6B325' cx='165' cy='129.5' r='2.5'/>
      </g>
    </g>
  )
}
