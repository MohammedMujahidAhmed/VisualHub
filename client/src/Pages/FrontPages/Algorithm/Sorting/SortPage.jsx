import React from 'react'
// import tempsearch from '../../../../images/sortImg.jpg';
import { Link } from 'react-router-dom';
import Card from '../../../../Components/Card';
import BubbleSortImage from '../../../../images/BubbleSortImage.png'
import SelectionSortImage from '../../../../images/SelectionSortImage.png'
import MergeSortImage from '../../../../images/MergeSortImage.png'
import QuickSortImage from '../../../../images/QuickSortImage.png'
import InsertionSortImage from '../../../../images/InsertionSortImage.png'
export default function SearcSortPage() {
    const Data1 = {type:'Bubble Sort',image:BubbleSortImage}
    const Data2 = {type:'Selection Sort',image:SelectionSortImage}
    const Data3 = {type:"Merge Sort",image:MergeSortImage}
    const Data4 = {type:"Quick Sort",image:QuickSortImage}
    const Data5 = {type:"Insertion Sort",image:InsertionSortImage}
  return (
    <div className='mt-32 flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <h1 className='heading font-bold text-gray-800'>Welcome to Our Sorting Page!</h1>
      <div className='flex justify-center items-center flex-wrap'>
        <Link to={'/algorithms/sort/bubble-sort'}>
          <Card  Data={Data1}/>
        </Link>
        <Link to={'/algorithms/sort/selection-sort'}>
            <Card  Data={Data2}/>
        </Link>
        <Link to={'/algorithms/sort/merge-sort'}>
            <Card  Data={Data3}/>
        </Link>
        <Link to={'/algorithms/sort/quick-sort'}>
            <Card  Data={Data4}/>
        </Link>
        <Link to={'/algorithms/sort/insertion-sort'}>
          <Card Data={Data5}></Card>
        </Link>
      </div>
    </div>
  )
}