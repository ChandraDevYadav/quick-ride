import React, { useState } from 'react'
import { carListData } from '../../utils/CarListData'
import CarListItem from './CarListItem'
import { useRouter } from 'next/navigation'

function CarListOptions({distance}) {
    const [activeIndex,setActiveIndex]=useState();
    const [selectedCar,setSelectedCar]=useState([]);
    const router=useRouter();

  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {carListData.map((item, index)=>(
        <div className={`cursor-pointer p-2 px-4 rounded-md border-black
        ${activeIndex==index?'border-[3px]':null}`}
        onClick={()=>{setActiveIndex(index); setSelectedCar(item)}}
        >
            <CarListItem car={item} distance={distance}/>
        </div>
      ))}
      {selectedCar?.name? <div className='flex justify-center bg-white p-3 shadow-xl w-full border-[1px] items-center rounded-lg my-4'>
        {/* <h2>Make Payment For</h2> */}
        <button className='p-3 bg-black text-white rounded-lg text-center' onClick={()=>router.push('/payment?amount='+(selectedCar.amount*distance).toFixed(2))}>Request {selectedCar.name}</button>
      </div>:null}
    </div>
  )
}

export default CarListOptions
