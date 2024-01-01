import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const VisualizeLinear = ({ arrayValues, searchElement, getMessage}) => {
  const [indexNow, setIndexNow] = useState(-1);
  const [found, setFound] = useState(-1);
  const [speechInProgress, setSpeechInProgress] = useState(false);
  const isMounted = useRef(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  //speech
  const speak = (text) => {
    //console.log(text);
    if ("speechSynthesis" in window && !speechInProgress) {
      setSpeechInProgress(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setSpeechInProgress(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  //speech
  
  async function linearSearchFunc() {
      setFound(-1);
    for (let i = 0; i < arrayValues.length; i++) {
      //console.log(i);
      setIndexNow(i);
      getMessage(`Checking Index: ${i} for Value: ${searchElement}`);
      speak(`Checking Index: ${i} for Value: ${searchElement}`);
      await delay(4500);
      //console.log(`Checking index ${i}, value: ${arrayValues[i]}`);
      if (arrayValues[i] == searchElement) {
        speak(`Value: ${arrayValues[i]} Found at Index: ${i}`);
        getMessage(`Value: ${arrayValues[i]} Found at Index: ${i}`);
        //console.log(`Found at index ${i}`);
        setFound(i);
        await delay(4500);
        break;
      }
    }
    if (i === arrayValues.length) {
      speak(`${searchElement} Not Found in Array`);
      getMessage(`${searchElement} Not Found in Array`);
      await delay(4500);
      setIndexNow(i);
    }
    console.log("Hello");
  }
  
    

  useEffect(() => {
    if (isMounted.current) {
      linearSearchFunc();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className=" space-y-4">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          {arrayValues.map((value, index) => (
            <div className="min-w-[60px]" key={index}>
              <div
                className={`bg-element w-full h-[40px] flex justify-center items-center p-2  ${
                  found == index
                    ? "bg-gradient-to-r from-green-300 to-green-500"
                    : index == indexNow
                    ? "bg-yellow-500 animate-bounce"
                    : index < indexNow
                    ? "bg-gradient-to-r from-red-500 to-red-700"
                    : ""
                }`}
              >
                <span>{value}</span>
              </div>
              <div className="w-full text-[12px] text-center pt-2">{index}</div>
              <div className="flex w-full justify-center items-center pt-2">
                <FaArrowUp
                  className={`text-center ${index == indexNow ? "flex" : "hidden"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualizeLinear;





