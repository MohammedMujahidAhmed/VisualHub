import React, { useEffect, useState } from "react";

export default function ({ arrayValues, setArrayValues, getMessage }) {
  const [outIndex, setOutInd] = useState(-1);
  const [inIndex, setInInd] = useState(-1);
  const [outIndexSwap, setOutIndSwap] = useState(-1);
  const [inIndexSwap, setInIndSwap] = useState(-1);
  const [outerIter,setOuterIter] = useState(0);
  const [firstIndex, setFirstIndex] = useState(-1);
  const [lastIndex, setLastIndex] = useState(-1);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let newArray = [...arrayValues];

    const quickSort = async (first, last) => {
    
        let i, j, pivot;
        
        if(first < last){
            setFirstIndex(first);
            setLastIndex(last);
            setOuterIter(first);
            getMessage(`Selecting Pivot at Index: ${first}`);
            await delay(2000);
            i = first;
            pivot = first;
            j = last;
            setOutInd(i);
            setInInd(j);
            while(i < j){
                while(i < last && newArray[i] <= newArray[pivot]){
                    getMessage(`Incrementing i because ${newArray[i]} <= ${newArray[pivot]}`);
                    setOutInd(i);
                    i++;
                    await delay(2000);
                }
                getMessage(`Final i Value: ${i}`);
                setOutInd(i);
                await delay(2000);
                while(newArray[j] > newArray[pivot]){
                    getMessage(`Decrementing j because ${newArray[j]} > ${newArray[pivot]}`);
                    setInInd(j);
                    j--;
                    await delay(2000);
                }
                getMessage(`Final j Value: ${j}`);
                setInInd(j);
                await delay(2000);
                if(i < j){
                    getMessage(`Swapping Index: ${i} and Index: ${j} because ${i} < ${j}`);
                    setOutIndSwap(i);
                    setInIndSwap(j);
                    await delay(2000);
                    let temp = newArray[i];
                    newArray[i] = newArray[j];
                    newArray[j] = temp;
                    setArrayValues(() => [...newArray]);
                    await delay(2000);
                    setOutIndSwap(-1);
                    setInIndSwap(-1);
                }
                
            }
            getMessage(`Swapping Pivot and Index: ${j} because ${i} >= ${j}`);
            setOutIndSwap(pivot);
            setInIndSwap(j);
            await delay(2000);
            let temp = newArray[pivot];
            newArray[pivot] = newArray[j];
            newArray[j] = temp;
            setArrayValues(() => [...newArray]);
            setOuterIter(j);
            setOutInd(-1);
            setInInd(-1);
            await delay(2000);
            setOutIndSwap(-1);
            setInIndSwap(-1);
            await quickSort(first, j-1);
            await quickSort(j+1, last);
            return;
        }
        
        
        };

    const quickSortStarter = async() => {
      await quickSort(0, newArray.length-1);
      getMessage(`Array has been Sorted`);
      setFirstIndex(0);
      setLastIndex(newArray.length);
      setOuterIter(-1);
      await delay(1000);
    }

    quickSortStarter();
    
  }, []);

  return (
    <div className="space-y-4">
      
      <div className="flex flex-col">
        
      <div className="flex space-x-4 mb-10">
        
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px] justify-center items-center p-2`}
              key={index}
            >
              {value}
            </div> 
          </div>
        ))}
        </div>

        <div className="flex space-x-4">
        
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px]
                ${
                  index >= firstIndex && index <= lastIndex
                  ? "flex"
                  : "hidden"
                } 
                justify-center items-center p-2 ${
                index == outIndex
                  ? index == inIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index == inIndex
                  ? index == outIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index == outerIter
                    ? "bg-green-500"
                    : ""
              }`}
              key={index}
            >
              {value}
            </div> 
            <div className={`w-full text-[12px] text-center pt-2 ${
              index >= firstIndex && index <= lastIndex
              ? ""
              : "hidden"
            }`}>{index}</div>
            <div key={index} className={`w-full justify-center items-center pt-2 flex flex-col`}>
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
                i
              </span>
            </div>
          </div>
        ))}
        </div>
        
      </div> 
      <div className={`p-2 text-green-500 bg-glass text-center ${outerIter == -1 ? "hidden" : ""}`}>pivot = {outerIter}</div>
    </div>
  );
}
 