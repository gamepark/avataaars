import { useId } from 'react'
import { mirror } from './mirror'
import Shadow from './Shadow'

const side = (
  <>
    <path fill='#1F2426' d='M83,100 L66,99 L66,103 L83,104 Z'/>
    <path fill='#1F2426' fillRule='evenodd'
          d='M90,96 L120,96 C125,96 128,99 128,104 L128,120 C128,125 125,128 120,128 L90,128 C85,128 82,125 82,120 L82,104 C82,99 85,96 90,96 Z M91,101 C88.5,101 87,102.5 87,105 L87,119 C87,121.5 88.5,123 91,123 L119,123 C121.5,123 123,121.5 123,119 L123,105 C123,102.5 121.5,101 119,101 Z'/>
    <path fill='#FFFFFF' fillOpacity='0.2' d='M91,101 L119,101 C121.5,101 123,102.5 123,105 L123,119 C123,121.5 121.5,123 119,123 L91,123 C88.5,123 87,121.5 87,119 L87,105 C87,102.5 88.5,101 91,101 Z'/>
  </>
)

export default function NerdGlasses () {
  const filter1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
      </defs>
      <g filter={`url(#${filter1})`}>
        <rect fill='#1F2426' x='126' y='104' width='12' height='6'/>
        {side}
        <g transform={mirror}>{side}</g>
        <rect fill='#F2F2F2' x='127' y='101.5' width='10' height='11' rx='1'/>
        <path fill='#000000' fillOpacity='0.12' d='M127,105 L137,105 L137,106 L127,106 Z M127,108.5 L137,108.5 L137,109.5 L127,109.5 Z'/>
      </g>
    </g>
  )
}
