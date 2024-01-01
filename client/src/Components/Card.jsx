import React from 'react'
import '../index.css'

export default function Card({Data}) {

  return (
    <div
        className="hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-110 data-card m-4 p-4 border border-gray-300 bg-[#140524] rounded-lg shadow-md transition-transform ease-in-out hover:transform scale-105 text-center">
        <div className='overflow-hidden'>
            <img src={Data.image} alt={Data.type} className="rounded mb-2 w-[250px] h-[150px] border border-gray-800" />
        </div>
        {/* <p className="card-heading text-[2rem]">{Data.type}</p> */}
    </div>
  )
}