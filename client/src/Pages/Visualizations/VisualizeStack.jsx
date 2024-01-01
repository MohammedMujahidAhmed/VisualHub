import React, { useEffect, useState } from "react";
import {  FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

const VisualizeStack = ({
  arrayValues, 
  getMessage,
  element,
  type,
  startVis,
  setStartVis, 
  setArrayValues,
}) => { 
  const [top, setTop] = useState(0);
  const [start, setStart] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const [peak,setPeak] = useState(false);

  async function stackPushFunc() {
    if(arrayValues.length > 8){
        toast('Stack Over Flow');
    }
    else{
        let newArray = [...arrayValues];
        newArray.unshift(element);
        setArrayValues(() => [...newArray]);
        setTop(1);
        await delay(1000);
        setTop(0);
    }
  }

  async function stackPopFunc() {
    if(arrayValues.length <= 0){
        toast('Stack is empty');
    }
    else{
        let newArray = [...arrayValues];
        newArray.pop();
        setTop(top+1); 
        await delay(1000);       
        setArrayValues(() => [...newArray]);
        setTop(0);
    }
  }

  async function stackPeakFunc() {
    if(arrayValues.length <= 0){
        toast('Stack is empty');
    }
    else{
        setStart(true);
        toast(`Peak Element : ${arrayValues[top]}`)
        await delay(2000);
        setStart(false);
    }
  }

  useEffect(() => {
    console.log(startVis);
    if (startVis == true) {
      if (type === "push") {
        stackPushFunc();
      } else if (type === "pop") {
        stackPopFunc();
      } else if (type === "peak") {
        stackPeakFunc();
      }
    }
    setStartVis(false);
  }, [startVis]);

  return (
    <div className=" space-y-4">
      <div className="flex flex-col">
        {arrayValues.map((value, index) => (
          <div className="min-w-[150px]">
            <div className="w-[100%] flex justify-center items-center">
                <div className="w-[50%]">
                    <div key={index} className={` ${index == top ? 'flex  space-x-3' : 'hidden'} w-[100%] justify-center items-center`}>
                        <div>
                            top
                        </div>
                        <FaArrowRight/>
                    </div>
                </div>
              <div
                className={`bg-element w-full h-[40px] flex justify-center items-center p-2  
                ${
                    top == index ? "bg-gradient-to-r from-red-500 to-red-700" : ""
                }
                ${ (index == top && start) ? 'animate-bounce bg-yellow-500':''}
                
                `}
                key={index}
              >
                <span>{value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0">
        {start ? (
          <div className="bg-element w-[80px] h-[40px] flex justify-center items-center p-2">
            {arrayValues[top]}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default VisualizeStack;
