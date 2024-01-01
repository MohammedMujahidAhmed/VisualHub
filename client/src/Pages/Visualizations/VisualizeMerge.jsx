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
    
    const merge = async (l, m, r) => {
    
        let i, j, k;
        let n1 = m - l + 1, n2 = r - m;
        let L = [], R = [];

        for(i = 0; i < n1; i++)
            L.push(newArray[l+i]);
        for(j = 0; j < n2; j++)
            R.push(newArray[m+1+j]);
        
        
        for(k = l; k <= r; k++)
          newArray[k] = "-";

        setArrayValues(() => [...newArray]);

        setOuterIter(-1);
        setFirstIndex(l);
        setLastIndex(r);
        setOutInd(l);
        setLeftHalf(L);
        setRightHalf(R);
        setLeftSlice(0);
        setRightSlice(0);
        getMessage(`Creating Left Half and Right Half`);
        await delay(2000);

        i = 0;
        j = 0;
        k = l;

        

        while(i < n1 && j < n2){
            await delay(1000);
            
            if(L[i] <= R[j]){
                getMessage(`Choosing ${L[i]} from Left Array`);
                newArray[k] = L[i]
                i++;
            }
            else{
                getMessage(`Choosing ${R[j]} from Right Array`);
                newArray[k] = R[j]
                j++;
            }
            await delay(1000);
            setLeftSlice(i);
            setRightSlice(j);
            setArrayValues(() => [...newArray]);
            k++;
            setOutInd(k);
            await delay(1000);
        }

        while(i < n1){
            getMessage(`Choosing ${L[i]} from Left Array`);
            await delay(1000);
            
            newArray[k] = L[i]
            i++;
            setOutInd(k);
            k++;
            setLeftSlice(i);
            setArrayValues(() => [...newArray]);
            
            await delay(1000);
        }
        
        while(j < n2){
            getMessage(`Choosing ${R[j]} from Right Array`);
            await delay(1000);
            
            newArray[k] = R[j];
            j++;
            setOutInd(k);
            k++;
            
            setRightSlice(j);
            setArrayValues(() => [...newArray]);
            
            await delay(1000);
        }
        setTempArray(()=>[...newArray]);
        setOutInd(-1);
        await delay(1000);
            
    };

    const mergeSort = async(l, r) => {
        if(r - l >= 1){
            let m = Number.parseInt(Math.floor((l + r)/2), 10);
            setOuterIter(m);
            setFirstIndex(l);
            setLastIndex(r);
            getMessage(`Selecting Mid: ${m}`);
            await delay(2000);
            await mergeSort(l, m);
            await mergeSort(m+1, r);
            await merge(l, m, r);
        }
    }

    const quickSortStarter = async() => {
      await mergeSort(0, newArray.length-1);
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
        
        {tempArray.map((value, index) => (
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
                k
              </span>
            </div>
          </div>
        ))}
        
        </div>
        
      </div>
      <div className="flex justify-between">
        <div className={`p-2 text-green-500 bg-glass text-center`}>
          Left Half: {(leftHalf.slice(leftSlice)).join(" ")}
        </div>
        <div className={`p-2 text-green-500 bg-glass text-center`}>
          Right Half:  {(rightHalf.slice(rightSlice)).join(" ")} 
        </div>
      </div>
      
      <div className={`p-2 text-green-500 bg-glass text-center ${outerIter == -1 ? "hidden" : ""}`}>mid = {outerIter}</div>
    </div>
  );
}
