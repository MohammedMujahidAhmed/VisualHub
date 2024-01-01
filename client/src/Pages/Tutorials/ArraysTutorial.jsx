import React, { useState } from "react";
import "../../index.css";
import ArrayImage0 from "../../TutorialImages/ArrayImage0.png"
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function ArraysTutorial()
{
    return (

        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/selection-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Arrays Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br /><br />
            <span className="mr-8"></span>An <b>array</b> is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
            <br /><br />
            <div className="flex  justify-center items-center w-full">
                <img src={ArrayImage0} width={500}  alt="" />
            </div>
            <br /><br />
            <span className="mr-8"></span>The above image can be looked as a top-level view of a staircase where you are at the base of the staircase. Each element can be uniquely identified by their index in the array (in a similar way as you could identify your friends by the step on which they were on in the above example).


            </div>
        </div>
    )
}