'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, StatsGl } from '@react-three/drei'

export default function Home() {

  return (
    <div
      className="h-screen w-screen bg-gray-900" >
      <Suspense fallback={null}>
        <Canvas camera={{ fov: 75, position: [0, 0, 70] }}>
          <ambientLight intensity={5} />
          <OrbitControls />
          
          <StatsGl />
        </Canvas>
      </Suspense>
    </div>
  )
}
