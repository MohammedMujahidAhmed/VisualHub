import React, { useEffect, useRef, useState } from "react";

export default function VisualizeSelection({ arrayValues, setArrayValues, getMessage }) {
  const [outIndex, setOutInd] = useState(-1);
  const [inIndex, setInInd] = useState(-1);
  const [outIndexSwap, setOutIndSwap] = useState(-1);
  const [inIndexSwap, setInIndSwap] = useState(-1);
  const isMounted = useRef(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // const speak = (text) => {
  //   //console.log(text);
  //   if ("speechSynthesis" in window && !speechInProgress) {
  //     setSpeechInProgress(true);
  //     const utterance = new SpeechSynthesisUtterance(text);
  //     utterance.onend = () => setSpeechInProgress(false);
  //     window.speechSynthesis.speak(utterance);
  //   }
  // };

  useEffect(() => {
    const selectionSort = async () => {
      let newArray = [...arrayValues];
      const n = newArray.length;

      for (let i = 0; i < n - 1; i++) {
        setOutInd(i);
        getMessage(`Iteration: ${i+1}`)
        await delay(2000);

        for (let j = i + 1; j < n; j++) {
          setInInd(j);
          getMessage(`Comparing Index: ${i} and ${j}`);
          await delay(2000);

          if (newArray[j] < newArray[i]) {
            getMessage(`Swapping Index: ${i} and Index: ${j} because ${newArray[i]} > ${newArray[j]}`);
            let temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
            setArrayValues(() => [...newArray]);
            setInInd(-1);
            await delay(2000);
            
          }
        }

      }
      getMessage(`Array has been Sorted`);
      setInInd(-1);
      setOutInd(arrayValues.length);
      await delay(2000);
      
      
    };

    selectionSort();
  }, []); 

  return (
    <div>
      <div className="flex space-x-4">
        {arrayValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px] flex justify-center items-center p-2 ${
                index === outIndex
                  ? index === outIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index === inIndex
                  ? index === inIndexSwap
                    ? "animate-bounce bg-green-500"
                    : "animate-bounce bg-yellow-500"
                  : index < outIndex
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
                  index == outIndex ? "flex" : "hidden"
                } text-yellow-500`}
              >
                i
              </span>
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
  );
}
