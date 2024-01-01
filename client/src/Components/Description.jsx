import React, { useState } from 'react'
import '../index.css'

export default function Description({message}) {
  return (
    <div className='flex justify-center items-center min-h-[100px] p-4 border mt-6 bg-input text-xl'>
      <h1>{message}</h1>
    </div>
  )
}

