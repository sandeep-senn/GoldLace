import React from 'react'
import Image from 'next/image'
import Header from './Header'
const Hero = () => {
  return (
    <div>
      <Header />
      <Image 
      src={'/hero.webp'}
      width={1920}
      height={1080}
      alt="Hero Image"
      className="w-[1000vh] h-full object-cover"
      />
    </div>
  )
}

export default Hero