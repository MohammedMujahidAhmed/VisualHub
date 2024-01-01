import React, { useState } from "react";
import "../../index.css";
import StackImage0 from "../../TutorialImages/StackImage0.png"
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function StackTutorial()
{
    return (

        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/selection-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Stack Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br /><br />
            <span className="mr-8"></span><b>Stack</b> is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.
            <br /><br />
            <div className="flex  justify-center items-center w-full">
                <img src={StackImage0} width={500}  alt="" />
            </div>
            <br /><br />
            <span className="mr-8"></span>There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.
            </div>
        </div>
    )
}