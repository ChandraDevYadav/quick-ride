import React from 'react'
import { riderData } from '../../utils/RiderData'
import Rider from '../rider/_components/Rider'

function page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3'>
        {riderData.map((item,index)=>(
            <Rider rider={item}/>
        ))}
    </div>
  )
}

export default page