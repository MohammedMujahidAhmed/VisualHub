import React, { useEffect, useState } from "react";

export default function ({ arrayValues, setArrayValues, getMessage }) {
  const [outIndex, setOutInd] = useState(-1);
  const [inIndex, setInInd] = useState(-1);
  const [outIndexSwap, setOutIndSwap] = useState(-1);
  const [inIndexSwap, setInIndSwap] = useState(-1);
  const [outerIter,setOuterIter] = useState(0);
  const [firstIndex, setFirstIndex] = useState(-1);
  const [lastIndex, setLastIndex] = useState(-1);
  const [leftHalf, setLeftHalf] = useState([]);
  const [rightHalf, setRightHalf] = useState([]);
  const [leftSlice, setLeftSlice] = useState(-1);
  const [rightSlice, setRightSlice] = useState(-1);
  const [tempArray, setTempArray] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let newArray = [...arrayValues];
    setTempArray(()=>[...newArray]);
    
    const insertionSort = async() => {
      
      let i = 1;
      setOuterIter(i);
      getMessage(`Initial Sorted Array till Index: ${i}`);
      await delay(3000);
      for(i; i < newArray.length; i++){
        let element = newArray[i];
        let tempUpArray = [];
        for(let k = 0; k < newArray.length; k++)
          tempUpArray.push(element);
        console.log(tempUpArray);

        setTempArray(() => [...tempUpArray]);
        setOutInd(i);
        getMessage(`Picking Element at Index: ${i}`);

        setInInd(i);
        await delay(3000);
        
        let j = i - 1;
        setInInd(j);
        await delay(3000);
        getMessage(`Finding Correct Position of Index: ${i}`);
        await delay(3000);
        while(j >= 0 && newArray[j] > element){
          newArray[j+1] = newArray[j];
          setInInd(j);
          j--;
          
          await delay(3000);
        }
        getMessage(`Placing Element in Correct Position`);
        await delay(3000);
        newArray[j+1] = element;
        setTempArray(()=>[...newArray]);
        setArrayValues(()=>[...newArray]);

      }
      setArrayValues(()=>[...newArray]);
            
    };

    const quickSortStarter = async() => {
      setFirstIndex(0);
      setLastIndex(newArray.length);
      await insertionSort(0, newArray.length);
      setOutInd(newArray.length);
      setInInd(-1);
      
      getMessage(`Array has been Sorted`);
      
      setOuterIter(newArray.length);
      await delay(3000);
    }

    quickSortStarter();
    
  }, []);

  return (
    <div className="space-y-4">
      
      <div className="flex flex-col">
        
      <div className="flex space-x-4 mb-10">
        
        {tempArray.map((value, index) => (
          <div className="min-w-[60px]">
            {/* <div > */}
              <div
                className={`bg-element w-full h-[40px]
                ${
                  index == inIndex
                ? "flex"
                : "hidden"
                
                }
                justify-center items-center p-2`}
                key={index}
              >
                {value}
              {/* </div>  */}
            </div>
          </div>
        ))}
        </div>

        <div className="flex space-x-4">
        
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px] justify-center items-center p-2 ${
                 index == inIndex
                  ? index == outIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index < outIndex
                    ? "bg-green-500"
                    : ""
              }`}
              key={index}
            >
              {index == outIndex ? " " : value}
            </div> 
            <div className={`w-full text-[12px] text-center pt-2`}>{index}</div>
            <div key={index} className={`w-full justify-center items-center pt-2 flex flex-col`}>
              <span
                className={`${
                  index == inIndex ? "flex" : "hidden"
                } text-yellow-500`}
              >
                j
              </span>
            </div>
          </div>
        ))}
        
        </div>
        
      </div>
    </div>
  );
}
 