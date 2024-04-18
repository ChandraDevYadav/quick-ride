"use client"
import { useSearchParams } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import CheckOutForm from '../../components/Home/CheckOutForm';

function payment() {
    const searchParam=useSearchParams();
    const amount=searchParam.get('amount')
 
    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY)
    const options={
        mode:'payment',
        amount:Math.round(amount*100),
        currency:'npr'

    }

    return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOutForm amount={amount}/>
    </Elements>
  )
}

export default payment
