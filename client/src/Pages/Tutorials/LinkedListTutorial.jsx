import React, { useState } from "react";
import "../../index.css";
import LinkedListImage0 from "../../TutorialImages/LinkedListImage0.png"
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function LinkedListTutorial()
{
    return (

        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/selection-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Linked List Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br /><br />
            <span className="mr-8"></span>A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:
            <br />
            <br />
            <div className="flex  justify-center items-center w-full">
                <img src={LinkedListImage0} width={500}  alt="" />
            </div>
            <br />
            <span className="mr-8"></span>In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
            </div>
        </div>
    )
}