import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { toast } from "react-toastify";

const VisualizeQueue = ({
  arrayValues,
  getMessage,
  element,
  type,
  startVis,
  setStartVis,
  setArrayValues, 
  intialLength
}) => {
  const [front, setFront] = useState(0);
  const [rear, setRear] = useState(intialLength);
  const [start, setStart] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let size = 8;

  async function enqueueFunc() {
    if (rear == size) {
      toast("Queue Size exceeded");
    } else {
      let newArray = [...arrayValues];
      newArray[rear] = element;
      setRear(rear + 1);
      console.log(newArray);
      await delay(1000);
      setArrayValues(() => [...newArray]);
    }
  }
  
  async function dequeueFunc() {
    if (front == rear) {
      if(front == size){
        toast('The Queue used to its limits');
        await delay(250);
        toast('reseting the queue');
        setFront(0);
        setRear(0);
      }
      else{
        toast("Queue is empty");
      }
    } else {
      let newArray = new Array(9);
      for(let i=front+1;i<rear;i++){
        newArray[i] = arrayValues[i];
      }
      setFront(front+1);
      await delay(1000);
      setArrayValues(() => [...newArray]);
    }
  }

  async function stackPeakFunc() {
    if(front == rear){
      toast('No element to Peak');
    }
    else{
      toast(`The peak element is ${arrayValues[front]}`);
    }
  }

  useEffect(() => {
    console.log(startVis);
    if (startVis == true) {
      if (type === "enqueue") {
        enqueueFunc();
      } else if (type === "dequeue") {
        dequeueFunc();
      } else if (type === "peak") {
        stackPeakFunc();
      }
    }
    setStartVis(false);
  }, [startVis]);

  // useEffect(()=>{
  //   let newArray = new Array(9);
  //   let j = 0;
  //   for (let i = front; i < rear; i++) {
  //     newArray[i] = arrayValues[j];
  //     j++;
  //   }
  //   setArrayValues(() => [...newArray]);
  // },[])

  return (
    <div className=" space-y-4">
      <div className="flex space-x-3">
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div className="w-[100%] flex flex-col justify-center items-center">
              <div
                className={`bg-element w-[100%] h-[40px] flex justify-center items-center p-2  
                ${
                  top == index ? "bg-gradient-to-r from-red-500 to-red-700" : ""
                }
                ${index == top && start ? "animate-bounce bg-yellow-500" : ""}
                
                `}
                key={index}
              >
                <span>{value}</span>
              </div>
              <div className="w-[50%] flex justify-center items-center">
                <div
                  key={index}
                  className={` ${
                    index == front ? "flex flex-col  space-x-3" : "hidden"
                  } justify-center items-center`}
                >
                  <FaArrowUp />
                  <div>front</div>
                </div>
                <div
                  key={index}
                  className={` ${
                    index == rear ? "flex flex-col space-x-3" : "hidden"
                  } justify-center items-center`}
                >
                  <FaArrowUp />
                  <div>rear</div>
                </div>
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

export default VisualizeQueue;
