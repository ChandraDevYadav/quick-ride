"use client";
import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../../components/Home/CheckOutForm";
import { FaWhatsapp } from "react-icons/fa6";
import { TbMassage, TbMessage, TbPhoneCall } from "react-icons/tb";

function payment() {
  const searchParam = useSearchParams();
  const amount = searchParam.get("amount");

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY
  );
  const options = {
    mode: "payment",
    amount: Math.round(amount * 100),
    currency: "npr",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <div>
          <h2 className="text-center font-bold my-3 text-xl">Start Chart with Driver</h2>
          <div className="flex gap-3 justify-center">
            <FaWhatsapp className="text-4xl text-green-600 hover:shadow-lg hover:rounded-full hover:text-3xl hover:text-green-800"/>
            <TbPhoneCall className="text-4xl text-blue-700 hover:shadow-lg hover:rounded-full hover:text-3xl hover:text-blue-800"/>
            <TbMessage className="text-4xl text-yellow-600 hover:shadow-lg hover:rounded-full hover:text-3xl hover:text-yellow-800"/>
          </div>
        </div>
      </div>
      <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckOutForm amount={amount} />
        </Elements>
      </div>
    </div>
  );
}

export default payment;
