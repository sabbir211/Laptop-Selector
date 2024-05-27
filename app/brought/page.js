import Link from 'next/link'
import React from 'react'

export default function Brought() {
  return (
    <div className=' bg-white text-center h-screen text-6xl items-center flex justify-center'>
<div>
        <p>
        Order Successfully Placed
        </p>
        <Link href={"/"} className='btn btn-outline px-12 mb-40'> HOME</Link>
        </div>
    </div>
  )
}
