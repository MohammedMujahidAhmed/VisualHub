import React from 'react'
// import tempsearch from '../../../../images/SearchImg.jpg';
import { Link } from 'react-router-dom';
import Card from '../../../../Components/Card';
import HeadLine from '../../../../Components/HeadLine';
import LinearSearchImage from '../../../../images/LinearSearchImage.png'
import BinarySearchImage from '../../../../images/BinarySearchImage.png'

export default function SearchPage() {
    const Data1 = {type:'Linear Search',image:LinearSearchImage}
    const Data2 = {type:'Binary Search',image:BinarySearchImage }
  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <HeadLine content='Welcome to Our Search Page!'/>
      <div className='flex space-x-40'>
        <Link to={'/algorithms/search/linear-search'}>
          <Card  Data={Data1}/>
        </Link>
        <Link to={'/algorithms/search/binary-search'}>
            <Card  Data={Data2}/>
        </Link>
      </div>
    </div>
  )
}