import React, { useState } from "react";
import "../../index.css";
import QueueImage0 from "../../TutorialImages/QueueImage0.png";
import QueueImage1 from "../../TutorialImages/QueueImage1.png"
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function QueueTutorial()
{
    return (

        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/selection-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Queue Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br /><br />
            <span className="mr-8"></span>A <b>Queue</b> is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.
            <br /><br />
            We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.  The element which is first pushed into the order, the operation is first performed on that.
            <br /><br />
            <div className="flex  justify-center items-center w-full">
                <img src={QueueImage0} width={500}  alt="" />
            </div>
            <br /><br />
            <h1 className="text-[20px]"><b>FIFO Principle of Queue:</b></h1>
            <br />
            <ul>
                <li>A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. (i.e. First come first serve).</li>
                <li>Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue(sometimes, head of the queue), similarly, the position of the last entry in the queue, that is, the one most recently added, is called the rear (or the tail) of the queue. See the below figure.</li>

            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={QueueImage1} width={500}  alt="" />
            </div>
            <br /><br />
            <h1 className="text-[20px]"><b>Characteristics of Queue:</b></h1>
            <br />
            <ul>
                <li>Queue can handle multiple data.</li>
                <li>We can access both ends.</li>
                <li>They are fast and flexible. </li>
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Queue Representation:</b></h1>
            <br />
            Like stacks, Queues can also be represented in an array: In this representation, the Queue is implemented using the array. Variables used in this case are

            <br />
            <ul>
                <li><b>Queue:</b> the name of the array storing queue elements.</li>
                <li><b>Front:</b>the index where the first element is stored in the array representing the queue.</li>
                <li><b>Rear:</b>the index where the last element is stored in an array representing the queue.</li>
            </ul>
            </div>
        </div>
       )
}