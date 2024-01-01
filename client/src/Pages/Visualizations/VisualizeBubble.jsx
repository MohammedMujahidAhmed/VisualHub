import React, { useEffect, useState } from "react";

export default function ({ arrayValues, setArrayValues, getMessage }) {
  const [outIndex, setOutInd] = useState(-1);
  const [inIndex, setInInd] = useState(-1);
  const [outIndexSwap, setOutIndSwap] = useState(-1);
  const [inIndexSwap, setInIndSwap] = useState(-1);
  const [outerIter,setOuterIter] = useState(0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const bubbleSort = async () => {
      let newArray = [...arrayValues];
      for (let i = 0; i < newArray.length - 1; i++) {
        
        setOuterIter(i);
        getMessage(`Iteration: ${i+1}`);
        await delay(1000);
        for (let j = 0; j < newArray.length - i - 1; j++) {
          getMessage(`Comparing Index: ${j} and Index: ${j+1}`);
          setInInd(j);
          setOutInd(j + 1);
          await delay(1000);
          if (newArray[j] > newArray[j + 1]) {
            getMessage(`Swapping Index: ${j} and Index: ${j+1} because ${newArray[j]} > ${newArray[j+1]}`);
            setOutIndSwap(j);
            setInIndSwap(j + 1);
            await delay(1000);
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
            setArrayValues(() => [...newArray]);
            await delay(1000);
            setOutIndSwap(-1);
            setInIndSwap(-1);
          }
        }
      }
      getMessage(`Array has been Sorted`);
      setOuterIter(newArray.length);
      await delay(1000);
      setInInd(-1);
      setOutInd(-1);
    };
    bubbleSort();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <div className="flex space-x-4">
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px] flex justify-center items-center p-2 ${
                index == outIndex
                  ? index == inIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index == inIndex
                  ? index == outIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index > arrayValues.length - outerIter - 1
                    ? "bg-green-500"
                    : ""
              }`}
              key={index}
            >
              {value}
            </div> 
            <div className="w-full text-[12px] text-center pt-2">{index}</div>
            <div key={index} className="w-full justify-center items-center pt-2 flex flex-col">
              <span
                className={`${
                  index == inIndex ? "flex" : "hidden"
                } text-yellow-500`}
              >
                j
              </span>
              <span
                className={`${
                  index == outIndex ? "flex" : "hidden"
                } text-yellow-500`}
              >
                j+1
              </span>
            </div>
          </div>
        ))}
        </div>
        
      </div>
      <div className="p-2 text-green-500 bg-glass text-center">i = {outerIter}</div>
    </div>
  );
}