import React from 'react'
import '../index.css'

export default function HeadLine({content}) {
  return (
    <div className='pb-8'>
      <h1 className='heading'>{content}</h1>
    </div>
  )
}
