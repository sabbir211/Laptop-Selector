import React from 'react'
import delivery from "../resources/delivery.gif"
import Image from 'next/image'
export default function BuyPage() {
  return (
    <div className='bg-white'>
        <p className='text-center text-4xl font-semibold pt-10'>Success !!!</p>
        <h1 className='text-2xl text-center p-10'> YOUR ORDER IS ON YOUR WAY...</h1>
<Image src={delivery}  unoptimized alt="delivery boy image" className='mx-auto'></Image>
    </div>
  )
}
