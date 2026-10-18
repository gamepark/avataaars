import { useId } from 'react'
import Shadow from './Shadow'

// Left lens (viewer side); the right lens is its mirror around x=132
const frame = 'M86,99 C86,95.5 89,94 93,94 L120,94 C125,94 127.5,96.5 127,101 C126,110 123,122 112,128 C104,132.5 94,131 89,124 C85,118 86,107 86,99 Z'
const lens = 'M89,100 C89,97.5 91,97 94,97 L119.5,97 C123,97 124.2,98.5 124,101.5 C123,109.5 120.5,119.5 111,124.8 C104.5,128.5 96,127.3 91.8,121.5 C88.5,116.5 89,107 89,100 Z'

export default function Aviators () {
  const filter1 = useId()
  const gradient1 = useId()
  return (
    <g transform='translate(1, 0)'>
      <defs>
        <Shadow id={filter1}/>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id={gradient1}>
          <stop stopColor='#3C5A4A' offset='0%'/>
          <stop stopColor='#1D2B24' offset='100%'/>
        </linearGradient>
      </defs>
      <g filter={`url(#${filter1})`}>
        <path fill='#C9A24A' d='M88,97 L68,99.5 C66,99.8 66.2,102.6 68.2,102.5 L88,101 Z M176,97 L196,99.5 C198,99.8 197.8,102.6 195.8,102.5 L176,101 Z'/>
        <path fill='#C9A24A' d='M124,96 C129,93.6 135,93.6 140,96 L140,98.4 C135,96.2 129,96.2 124,98.4 Z M126,103 C129.5,101.6 134.5,101.6 138,103 L137.6,105 C134.5,103.9 129.5,103.9 126.4,105 Z'/>
        <path fill='#C9A24A' d={frame}/>
        <path fill={`url(#${gradient1})`} fillOpacity='0.92' d={lens}/>
        <g transform='translate(264, 0) scale(-1, 1)'>
          <path fill='#C9A24A' d={frame}/>
          <path fill={`url(#${gradient1})`} fillOpacity='0.92' d={lens}/>
        </g>
        <path fill='#FFFFFF' fillOpacity='0.22' d='M93,100 L108,100 L94.5,118 C92.5,113 92.2,106 93,100 Z M145,100 L160,100 L146.5,118 C144.5,113 144.2,106 145,100 Z'/>
      </g>
    </g>
  )
}
