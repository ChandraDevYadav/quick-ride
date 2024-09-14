import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.png',
            link:'/rider'
        },
        {
            id:2,
            name:'Package',
            icon:'/box1.png',
            link:'/subscription'
        }
    ]
  return (
    <div className='pb-3 pl-5 pr-5 border-b-[4px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
         <Link href={'/'}>
         <Image src='/logo.png' width={50} height={50} alt='Logo'/>
         </Link>
        <div className='flex gap-4 items-center'>
            {headerMenu.map((item)=>(
                <Link href={item.link} className='flex gap-2 items-center'>
                    <Image src={item.icon} width={25} height={25} />
                    <h2 className='text-[12px] md:text-[14px] font-medium'>{item.name}</h2>
                </Link>
            ))}
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default Header
