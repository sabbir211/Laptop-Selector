import React from 'react'
import bannerImg from "../../../resources/banner3.png"
import Image from 'next/image'
export default function Banner() {
  return (
 <div className='relative'>
<Image src={bannerImg} className='w-screen'></Image>
<button className="btn absolute top-2/3  md:left-1/4 btn-sm rounded-sm md:btn-lg left-10 ">Start Selecting</button>
 </div>   
  )
}
