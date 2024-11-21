import { useId } from 'react'
import FacialHair from './facialHair'
import HairColor from './HairColor'

const PrinceCut = ({ children }) => {
  const mask1 = useId()
  const mask2 = useId()
  const path1 = useId()
  const path2 = useId()

  return (
    <g strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280'/>
        <path id={path2}
              d='M179.6,14.9
  c-14.6-3.4,26.7,14.6,9.4,27.7c-17.3,13.1-57.1-49-94.1-21c-11.6,8.7-16.1,24.6-10.5,35.8c-4.1,3.2-9,9.7-10.7,18.3
  c-2.8,14.1,3.2,36.1,3.2,36.1s0.2,0.2,0.6,0.4c-0.2,0.8-0.4,1.7-0.6,2.8c-4.2,21.6,6.3,61.7,12,63.2
  c5.7,1.6,23.4-15.2,15-17.5c-8.4-2.3-18.9-8-21.8-22.7c-1.3-6.9-1.6-17.2-2-23.9c1.7,1.2,3.6,2.4,4.5,2.6
  c1.8,0.4-2.8-25,0-37.4c1.4-6,3.4-11.3,4.9-15.3c1.5,1.3,3.3,2.4,5.4,3.4c12.3,5.6,54.7,7.8,83.6,0.7
  c1.2,3.3,2.5,7.1,3.4,11.3c2.8,12.4-1.8,37.8,0,37.4c0.9-0.2,2.8-1.4,4.5-2.6c-0.4,6.7-0.7,17-2,23.9
  c-2.8,14.7-13.4,20.4-21.8,22.7c-8.4,2.3,9.3,19.1,15,17.5c5.7-1.6,16.2-41.6,12-63.2c-0.2-1.1-0.4-2-0.6-2.8
  c0.4-0.3,0.6-0.4,0.6-0.4s6.1-21.9,3.2-36.1c-0.8-4.1-2.4-7.8-4.3-10.8c9.3-3.6,15.9-8.6,17.5-15.3
  C210.3,31.2,194.2,18.2,179.6,14.9z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <g mask={`url(#${mask1})`}>
        <g transform='translate(-27, 0)'>
          <path fillOpacity='0.16' fill='#000000' fillRule='evenodd'
                d='M181.9,82.2c0.6,2.7,0.9,6,0.9,9.5c0.1-4.6-0.1-9.1-0.9-12.5c-1-4.2-2.2-8-3.4-11.3c-28.8,7.1-71.2,4.9-83.6-0.7
  c-2-0.9-3.8-2.1-5.4-3.4c-1.4,4.1-3.5,9.3-4.9,15.3c-0.8,3.4-1,7.9-0.9,12.5c0.1-3.5,0.3-6.8,0.9-9.5
  c1.4-6,3.4-11.3,4.9-15.3c1.5,1.3,3.3,2.4,5.4,3.4c12.3,5.6,54.7,7.8,83.6,0.7C179.7,74.3,180.9,78.1,181.9,82.2z'/>
          <g strokeWidth='1' fill='none' fillRule='evenodd' transform='translate(25, 10)'>
            <mask id={mask2} fill='white'>
              <use xlinkHref={'#' + path2}/>
            </mask>
            <use fill='#314756' xlinkHref={'#' + path2}/>
            <HairColor maskID={mask2}/>
          </g>
        </g>
          <FacialHair/>
          {children}
      </g>
    </g>
  )
}

export default PrinceCut
