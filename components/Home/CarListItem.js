import React from 'react'
import Image from 'next/image'
import { FaUser } from "react-icons/fa";

function CarListItem({car,distance}) {
return (
    <div className='flex items-center justify-between mt-5'>
    <div>
      <div className='flex items-center justify-between gap-5'>
        <Image src={car.image} width={60} height={60}/>
        <div>
        <h2 className='font-semibold text-[12px] flex gap-3 items-center'>
            {car.name}
            <span className='flex gap-2 items-center font-normal text-[12px]'>
            <FaUser />{car.seat}
            </span>
            </h2>
        <p className='text-[12px]'>{car.desc}</p>
        </div>
      <h2 className='text-[18px] font-semibold'>Rs{(car.amount*distance).toFixed(2)}</h2>
      </div>
      </div>
    </div>
  )
}

export default CarListItem
