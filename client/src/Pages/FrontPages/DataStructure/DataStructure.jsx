import React from 'react'
import '../../../index.css'
import HeadLine from '../../../Components/HeadLine';
import { Link } from 'react-router-dom';
import Card from '../../../Components/Card';
import LinkedListImage from '../../../images/linked list.png'
import StackImage from '../../../images/Stack.png'
import QueueImage from '../../../images/Queue.jpg'

const DataStructure = () => {

  const Data1 = {type:'Linked List', image:LinkedListImage}
  const Data2 = {type:'Stack', image:StackImage}
  const Data3 = {type:'Queue', image:QueueImage}

  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <HeadLine content='DataStructure'/>
      <div className='flex'>
        <Link to='/dataStructure/linkedList'>
          <Card Data={Data1}/>
        </Link>
        <Link to='/dataStructure/stack'>
          <Card Data={Data2}/>
        </Link>
        <Link to='/dataStructure/queue'>
          <Card Data={Data3}/>
        </Link>
      </div>
    </div>
  );
}

export default DataStructure;