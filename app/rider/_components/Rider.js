import Image from "next/image";
import React from "react";

function Rider({ rider }) {
  return (
    <div>
      <div className="">
        <div className="border-b border-gray-400 py-4 shadow-md">
            <Image src={rider.image} width={200} height={200} className="object-cover mx-24"/>
          <div className="mx-8">
          <h1 className="text-2xl font-bold text-center my-3">{rider.name}</h1>
          <p className="text-xl text-center">Description : {rider.desc}</p>
          <h2 className="text-center text-xl">Identity : <span className="text-lg text-red-600">{rider.idproof}</span></h2>
          <h2 className="text-center">Address : {rider.address}</h2>
          <h2 className="text-center">Status : {rider.status}</h2>
          <div className="flex justify-between items-center">
          <Image src={rider.license} width={50} height={50} className="object-cover"/>
          <h2>Review : {rider.review}</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rider;
