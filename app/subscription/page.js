import React from 'react'
import { subscriptionData } from '../../utils/Subscription'
import Subscription from './_components/Subscription'

function page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-3'>
        {subscriptionData.map((item, index)=>(
            <Subscription subscription={item}/>
        ))}
    </div>
  )
}

export default page