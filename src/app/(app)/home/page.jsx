import LampDemo  from '@/components/Lamp';
import React, { Suspense } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline/next'));

function Home() {
  return (
    <div className='relative'>
    {/* <Suspense fallback={<div>Loading...</div>}>
      <Spline
        scene="https://prod.spline.design/WYPWt-TL6ybEDvok/scene.splinecode" 
      />
      </Suspense> */}
      <LampDemo />
    </div>
  )
}

export default Home

