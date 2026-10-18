import FacialHair from '../facialHair'
import HairColor from '../HairColor'
import { FC, ReactNode, useId, PropsWithChildren } from 'react'

type Props = {
  d: string | string[]
  shading?: (maskID: string) => ReactNode
  extras?: ReactNode
  opacity?: number
  underlay?: { d: string, opacity: number }
}

// A haircut drawn as one path colored with hairColor, in avatar coordinates (same frame as LongHairBun)
export const HairTop: FC<PropsWithChildren<Props>> = ({ d, shading, extras, opacity, underlay, children }) => {
  const mask3 = useId()
  const path3 = useId()
  const mask1 = useId()
  const mask2 = useId()
  const pieces = Array.isArray(d) ? d : [d]
  const path2 = useId()
  return (
    <g strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path2} x='0' y='0' width='264' height='280'/>
        {underlay && <path id={path3} d={underlay.d}/>}
      </defs>
      <mask id={mask2} fill='white'>
        <use xlinkHref={'#' + path2}/>
      </mask>
      <g mask={`url(#${mask2})`}>
        <g transform='translate(-1, 0)'>
          <FacialHair/>
          {underlay && (
            <g opacity={underlay.opacity}>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path3}/>
              </mask>
              <HairColor maskID={mask3}/>
            </g>
          )}
          <mask id={mask1} fill='white'>
            {pieces.map((piece, i) => <path key={i} d={piece}/>)}
          </mask>
          <g opacity={opacity}>
            <g fill='#28354B'>{pieces.map((piece, i) => <path key={i} d={piece}/>)}</g>
            <HairColor maskID={mask1}/>
            {shading && shading(mask1)}
          </g>
          {extras}
          {children}
        </g>
      </g>
    </g>
  )
}

// Hair pulled back tightly over the skull (the cap of LongHairBun without the bun)
export const pulledBackCap = 'M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C139.5,26.2 126.5,26.1 114.939716,28.3372418 Z'

export const mirror = 'translate(264, 0) scale(-1, 1)'

export function circlePath (cx: number, cy: number, r: number) {
  return `M${cx + r},${cy} A${r},${r} 0 1 1 ${cx - r},${cy} A${r},${r} 0 1 1 ${cx + r},${cy} Z`
}

export function ellipsePath (cx: number, cy: number, rx: number, ry: number) {
  return `M${cx + rx},${cy} A${rx},${ry} 0 1 1 ${cx - rx},${cy} A${rx},${ry} 0 1 1 ${cx + rx},${cy} Z`
}

export function mirrorPath (d: string) {
  return d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) => `${(264 - parseFloat(x)).toFixed(3)},${y}`)
}

export const Tie: FC<{ x: number, y: number, angle: number }> = ({ x, y, angle }) => (
  <g transform={`rotate(${angle}, ${x}, ${y})`}>
    <rect fill='#E0464F' x={x - 7} y={y - 7} width='14' height='14' rx='5'/>
    <rect fill='#000000' fillOpacity='0.16' x={x - 7} y={y + 1} width='14' height='6' rx='3'/>
  </g>
)
