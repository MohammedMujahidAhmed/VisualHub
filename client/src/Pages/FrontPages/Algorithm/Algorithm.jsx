import React from 'react'
import Card from '../../../Components/Card'
import { Link } from 'react-router-dom';
import '../../../index.css'
import HeadLine from '../../../Components/HeadLine';
import SearchingImage from '../../../images/Searching.png';
import SortingImage from '../../../images/Sorting.png'

export const Algorithm = () => {

  const Data1 = {type:'Searching', image:SearchingImage}
  const Data2 = {type:'Sorting', image:SortingImage}

  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <HeadLine content='Algorithms'/>
      <div className='flex space-x-40'>
        <Link to='/algorithms/search'>
          <Card  Data={Data1}/>
        </Link>
        <Link to='/algorithms/sort'>
          <Card  Data={Data2}/>
        </Link>
      </div>
    </div>
  )
}