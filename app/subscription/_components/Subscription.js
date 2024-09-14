import Image from 'next/image'
import React from 'react'

function Subscription({ subscription }) {
  return (
    <div className='border-b border-gray-300 py-4'>
        <h1 className='text-3xl font-bold text-center my-3'>{subscription.type}</h1>
        <div className='mx-32 px-2'>
        <Image src={subscription.image} width={250} height={250} className='object-cover w-[7rem] h-[7rem]'/>
        </div>
        <h1 className='text-center text-xl font-semibold my-3'>{subscription.name}</h1>
        <h1 className='text-center text-md'>{subscription.desc}</h1>
        <div className='text-center my-3'>
            <button className='bg-blue-600 px-6 py-3 font-bold rounded-lg text-xl'>{subscription.buy}</button>
        </div>
        <div className='text-center my-3'>
            <button className='bg-blue-600 px-6 py-3 font-bold rounded-lg text-xl'>{subscription.more}</button>
        </div>
        <div className='text-center '>
            <button className='bg-blue-600 px-4 py-3 font-bold rounded-lg text-xl'>{subscription.quote}</button>
        </div>
    </div>
  )
}

export default Subscription
