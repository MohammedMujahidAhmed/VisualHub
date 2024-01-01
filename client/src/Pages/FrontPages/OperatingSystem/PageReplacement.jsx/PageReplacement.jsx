// BinarySearch.jsx

import React, { useState } from "react";
import VisualizeHeader from "../../../../Components/VisualizeHeader";
import "../../../../index.css";
import Description from "../../../../Components/Description";
import VisualizePageReplacement from "../../../Visualizations/VisualizePageReplacement";
 
const PageReplacement = () => {
  const [array, setArray] = useState("1 2 3 4 5"); 
  const [inVisualize, setInVisualize] = useState(false);
  const [arrayValues, setArrayValues] = useState([]);
  const [message, setMessage] = useState('');
  const [type,setType] = useState('fifo');
  const [frameSize,setFrameSize] = useState(3);
  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };


  function getMessage(message){
    setMessage(message);
  }

  const setArrayRight = () => {
    const arrayValues = array.split(" ").map(Number);
    if (arrayValues[arrayValues.length - 1] === 0) arrayValues.pop(-1);
    setArrayValues(arrayValues);
    
    setInVisualize(true);
  };

  return (
    <div className="bg-color h-screen">
      <div className="max-w-[1200px] m-auto h-full">
        <VisualizeHeader
          routePath="/dataStructure/linkedList"
          setInVisualize={setInVisualize}
        />

        {inVisualize ? (
          <div className="flex justify-around items-center h-[80%]">
            <div className="border bg-input p-4 flex h-[80%] flex-col justify-between">
                <div>Array : {arrayValues}</div>
            </div>
            <div className="w-[70%]">
              <div className="w-full min-h-[350px] flex justify-center items-center bg-input p-4">
                <VisualizePageReplacement
                  arrayValues={arrayValues}
                  getMessage={getMessage}
                  type={type}
                  setArrayValues = {setArrayValues}
                  frameSize={frameSize}
                />
              </div>
              <Description message={message}/>
            </div>
          </div>
        ) : (
          <div className="mt-24  bg-input w-fit m-auto p-5">
            <h1 className="card-heading text-3xl font-bold mb-4 flex flex-col items-center text-red-500 py-4">
              Page Replacement Visualization
            </h1>
            <form className="mb-8 flex justify-center items-center flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <label className="min-w-[170px] text-blue-500 card-heading">
                  Enter Elements:
                </label>
                <input
                  type="text"
                  value={array}
                  onChange={handleArrayChange}
                  className="bg-input border border-blue-500 rounded py-2 px-3 text-red-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="min-w-[170px] text-blue-500 card-heading">
                  Enter Number Of Frames:
                </label>
                <input
                  type="number"
                  value={frameSize}
                  onChange={(event)=>{setFrameSize(event.target.value)}}
                  className="bg-input border border-blue-500 rounded py-2 px-3 text-red-500"
                />
              </div>
              <div className="mb-8 flex items-center justify-center">
                    <label htmlFor="type" className="min-w-[170px] text-blue-500 card-heading">Type:</label>

                    <select name="type" id="type" onChange={(event)=>setType(event.target.value)} className="border bg-input border-blue-500 rounded py-2 px-3 text-red-500">
                        <option value="fifo">FiFo</option>
                        <option value="lru">Lru</option>
                        <option value="optimal">Optimal</option>
                    </select>
                </div>
              <div className="flex gap-2 py-4">
                <button
                  type="button"
                  onClick={setArrayRight}
                  className="bg-input hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Visualize
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageReplacement;
