import React, { useEffect, useState,useRef } from "react";

const VisualizeLinear = ({ arrayValues, searchElement, getMessage }) => {
  const [startInd, setStartIndex] = useState(-1);
  const [endInd, setEndIndex] = useState(-1);
  const [midInd, setMidIndex] = useState(-1);
  const [found, setFound] = useState(-1);
  const [speechInProgress, setSpeechInProgress] = useState(false);
  const isMounted = useRef(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const speak = (text) => {
    // console.log(text);
    if ("speechSynthesis" in window && !speechInProgress) {
      setSpeechInProgress(true);
      const utterance = new SpeechSynthesisUtterance(text);
  
      // Get the list of available voices
      const voices = window.speechSynthesis.getVoices();
  
      // Find a female voice (you can customize this logic based on your needs)
      const femaleVoice = voices.find((voice) => voice.gender === "female");
  
      // Set the voice to the female voice if found, otherwise use the default voice
      utterance.voice = femaleVoice || voices[0];
  
      // Set the voice URI directly (to ensure female voice)
      utterance.voiceURI = "com.apple.speech.synthesis.voice.samantha";
  
      utterance.onend = () => setSpeechInProgress(false);
      window.speechSynthesis.speak(utterance);
    }
  };
  
  

  async function binarySearchFunc() {
    let s = 0,
      e = arrayValues.length - 1;
    setEndIndex(e);
    setStartIndex(s);
    let m;
    setFound(-1);
    while (s <= e) {
      m = Math.floor((s + e) / 2);
      setEndIndex(e);
      setStartIndex(s);
      
      getMessage(`Start Index: ${s} End Index: ${e}`);
      speak(`Start Index: ${s} End Index: ${e}`);
      await delay(4500);
      setMidIndex(m);
      getMessage(`Middle Index: ${m}`);
      speak(`Middle Index: ${m}`);
      await delay(4500);
      if (searchElement == arrayValues[m]) {
        setFound(m);

        getMessage(`Found Value: ${arrayValues[m]} at Index: ${m}`);
        speak(`Found Value: ${arrayValues[m]} at Index: ${m}`);
        await delay(4500);
        break;
      } else if (searchElement < arrayValues[m]) {
        e = m - 1;
        setEndIndex(e);

        
        getMessage(`Changing End Index: ${e} because ${searchElement} less than ${arrayValues[m]}`);
        speak(`Changing End Index: ${e} because ${searchElement} less than ${arrayValues[m]}`);
        await delay(4500);
      } else {
        s = m + 1;
        setStartIndex(s);
        getMessage(`Changing Start Index: ${s} because ${searchElement} greater than ${arrayValues[m]}`);
        speak(`Changing Start Index: ${s} because ${searchElement} greater than ${arrayValues[m]}`);
        await delay(4500);
      }
    }
  }

  useEffect(() => {
    if(isMounted.current)
    binarySearchFunc();

    return()=>{
      isMounted.current=false;
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          {arrayValues.map((value, index) => (
            <div className="min-w-[60px]">
              <div
                className={`bg-element w-full h-[40px] flex justify-center items-center p-2 ${
                  found == index
                    ? "bg-gradient-to-r from-green-300 to-green-500"
                    : index == startInd
                    ? "bg-yellow-500 animate-bounce"
                    : index == endInd
                    ? "bg-yellow-500 animate-bounce "
                    : index == midInd
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 animate-bounce"
                    : index > endInd
                    ? "bg-gradient-to-r from-red-500 to-red-700"
                    : index < startInd
                    ? "bg-gradient-to-r from-red-500 to-red-700"
                    : ""
                }`}
                key={index}
              >
                <span>{value}</span>
              </div>
              <div className="w-full text-[12px] text-center pt-2" key={index}>
                {index}
              </div>
              <div key={index} className="w-full justify-center items-center pt-2 flex flex-col">
                <span
                  className={`${
                    index == midInd ? "flex" : "hidden"
                  } text-blue-500`}
                >
                  mid
                </span>
                <span
                  className={`${
                    index == startInd ? "flex" : "hidden"
                  } text-yellow-500`}
                >
                  start
                </span>
                <span
                  className={`${
                    index == endInd ? "flex" : "hidden"
                  } text-yellow-500`}
                >
                  end
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualizeLinear;
