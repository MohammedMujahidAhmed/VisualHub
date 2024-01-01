import React, { useEffect, useState } from "react";
import { FaArrowDown , FaArrowRight, FaArrowUp } from "react-icons/fa";
import { toast } from "react-toastify";

const VisualizeLinkedList = ({ arrayValues ,getMessage,element,type,at,position,startVis,setStartVis,setArrayValues,setPosition }) => {
  const [indexNow, setIndexNow] = useState(-1);
  const [found, setFound] = useState(-1);
  const [head,setHead] = useState(0);
  const [temp,setTemp] = useState(-1);
  const [stopped,setStopped] = useState(false);
  const [start,setStart] = useState(false); 
  const [elmentDown,setElementDown] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function LinkedListInsertFunc() {
    let pos;
    let newArray = [...arrayValues];
    if(at == 'atFirst'){
        // getMessage('Inserting at first');
        // await delay(1000);
        pos = 0;
    }
    if(at == 'atLast'){
        // getMessage('Inserting at last');
        // await delay(1000);
        pos = arrayValues.length;
    }
    console.log(pos);
    if(pos === 0){
        setStart(true);
        setTemp(-1);
        newArray[pos] = element;
        for(let j=pos+1;j<arrayValues.length+1;j++){
            newArray[j] = arrayValues[j-1];
        }
    }
    else if(pos === arrayValues.length){
        setStart(true);
        for(let i=0;i<pos;i++){
            await delay(1000);
            setTemp(i);
        }
        newArray[pos] = element;
    }
    else if(position === arrayValues.length){
        console.log('In last');
        setStart(true);
        for(let i=0;i<position;i++){
            await delay(1000);
            setTemp(i);
        }
        newArray[position] = element;
    }
    else if(position || position === 0){
        if(position < 0 || position > arrayValues.length){
            toast("Position input out of range");
        }
        else{
            console.log('in some');
            setStart(true);
            console.log(position);
            console.log(temp);
            for(let i=0;i<position;i++){
                await delay(1000);
                setTemp(i);
            }
            newArray[position] = element;
            for(let j=position+1;j<arrayValues.length+1;j++){
                newArray[j] = arrayValues[j-1];
            }
        }
    }
        console.log('outside');
        console.log(position);
        setElementDown(true);
        await delay(1000);
        setStopped(true);
        await delay(1000);
        setElementDown(false); 
        setArrayValues(() => [...newArray]);
        await delay(1000);
        setStopped(false);
        setStart(false);
        await delay(1000);
        setTemp(-1);
        setPosition(null);
  }

  async function LinkedListDeleteFunc(){
    let pos;
    if(position == 0){
        pos = 0;
    }
    else if(position == arrayValues.length-1){
        pos = arrayValues.length - 1; 
    }
    let newArray = [];
    if(at == 'atFirst' || pos == 0){
        if(arrayValues.length == 0){
            toast('Nothing to delete');
        }
        else if(arrayValues.length != 1){
            setHead(head+1);
            let j = 0;
            for(let i=1;i<arrayValues.length;i++){
                newArray[j] = arrayValues[i];
                j = j + 1;
            }
        }
    }
    else if(at == 'atLast' || pos == arrayValues.length - 1){
        if(arrayValues.length == 0){
            toast('Nothing to delete');
        }
        else{
            for(let i=0;i<arrayValues.length-1;i++){
                await delay(1000);
                setTemp(i);
                newArray[i] = arrayValues[i];
            }
        }
    }
    else{
        if(position < 0 || position >= arrayValues.length){
            toast('Position out of range');
            for(let i=0;i<arrayValues.length;i++){
                newArray[i] = arrayValues[i];
            }
        }
        else{
            for(let i = 0;i<position;i++){
                await delay(1000);
                setTemp(i);
                newArray[i] = arrayValues[i];
            }
            for(let i = position+1;i<arrayValues.length;i++){
                newArray[i-1] = arrayValues[i];
            }
            setStopped(true);
        }
    }
    await delay(1000);
    setArrayValues(() => [...newArray]);
    setHead(0);
    await delay(1000);
    setStopped(false);
    await delay(1000);
    setTemp(-1);
  }

  useEffect( ()=>{
    console.log(startVis);
    if(startVis == true){
        if(type === 'insert'){
            LinkedListInsertFunc()
        }
        else if(type === 'delete'){
            LinkedListDeleteFunc()
        }
    }
    setStartVis(false);
  },[startVis])

  return (
    <div className=" space-y-4">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          {arrayValues.map((value, index) => (
            <div className="min-w-[80px]">
                <div className="w-[100%] space-y-5 flex flex-col justify-center items-center">
                    <div className="flex h-[40px]">
                        <div className="w-[50%]">
                            <div key={index} className={`flex-col ${index == head ? 'flex':'hidden'}`}>
                                <span>h</span>
                                <FaArrowDown />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div key={index} className={`flex-col ${index == temp ? 'flex':'hidden'}`}>
                                <span>t</span>
                                <FaArrowDown />
                            </div>
                        </div>
                    </div>
                    {/* olf */}
                    <div className="w-[100%] flex justify-center items-center space-x-3">
                        <div
                            className={`bg-element w-full h-[40px] flex justify-center items-center p-2  ${
                            temp == index
                                ? "bg-gradient-to-r from-red-500 to-red-700"
                                : ""
                            }`}
                            key={index}
                        >
                            <span>{value}</span>
                        </div>
                        <div className="w-[50%]">
                            <div key={index} className={`${stopped ? temp == index ? 'hidden':'' :''}`}>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-[12px] text-center pt-2">{index}</div>
                    {/* new */}
                    <div className="w-[100%] flex justify-center items-center space-x-3">
                        {
                            elmentDown 
                            ?
                                index == temp+1 
                                ?
                                <div className="w-[50%] flex flex-col">
                                    <div className="w-[100%]">
                                        <div key={index} className={`${stopped ? temp == index ? 'hidden':'' :''}`}>
                                            <FaArrowUp />
                                        </div>
                                    </div>
                                    <div
                                        className={`bg-element w-full h-[40px] flex justify-center items-center p-2`}
                                        key={index}
                                    >
                                        <span>{element}</span>
                                    </div>
                                </div>
                                :
                                <div className="w-[100%]"></div>
                            : 
                                <div className="w-[100%]"></div>

                        }
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        {
            start
            ?
                <div className="bg-element w-[80px] h-[40px] flex justify-center items-center p-2">{element}</div>
            :
                <div></div>
        }
      </div>
    </div>
  );
};

export default VisualizeLinkedList;
