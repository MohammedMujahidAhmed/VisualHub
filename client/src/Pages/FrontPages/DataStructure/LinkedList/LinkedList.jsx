// BinarySearch.jsx

import React, { useState } from "react";
import VisualizeHeader from "../../../../Components/VisualizeHeader";
import "../../../../index.css";
import Description from "../../../../Components/Description";
import VisualizeLinkedList from "../../../Visualizations/VisualizeLinkedList";

const LinkedList = () => { 
  const [array, setArray] = useState("1 2 3 4 5");
  const [steps, setSteps] = useState([]); 
  const [inVisualize, setInVisualize] = useState(false);
  const [arrayValues, setArrayValues] = useState([]);
  const [message, setMessage] = useState('');
  const [element,setElement] = useState(null);
  const [type,setType] = useState('insert');
  const [at,setAt] = useState('atFirst');
  const [position,setPosition] = useState(null);
  const [startVis,setStartVis] = useState(false);


  function handleVisualization(){
    setStartVis(true);
  }

  const handleArrayChange = (event) => {
    setArray(event.target.value);
  };

  function getMessage(message){
    setMessage(message);
  }

  const visualizeBinarySearch = () => {
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
          forLinked={true}
          setAt={setAt}
        />

        {inVisualize ? (
          <div className="flex justify-around items-center h-[80%]">
            <div className="border bg-input p-4 flex h-[80%] flex-col justify-between">
                <div className="flex flex-col">
                    <label for="Type" className="card-heading">Type:</label>
                    <select name="Type" id="Type" onChange={(event)=>setType(event.target.value)} className="border bg-input border-blue-500 rounded py-2 px-3 text-red-500">
                        <option value="insert">Insert</option>
                        <option value="delete">Delete</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label for="At" className="card-heading">At:</label>

                    <select name="At" id="At" onChange={(event)=>setAt(event.target.value)} className="border bg-input border-blue-500 rounded py-2 px-3 text-red-500">
                        <option value="atFirst">At First</option>
                        <option value="atIndex">At Index</option>
                        <option value="atLast">At Last</option>
                    </select>
                </div>
                {
                  type == 'insert'
                  ?
                    <div>
                        <label for='input-element' className="card-heading">Element:</label>
                        <input 
                            name="input-element"
                            type="text"
                            id="input-element"
                            onChange={(event)=>setElement(parseInt(event.target.value, 10))}
                            className="bg-input border border-blue-500 rounded py-2 px-3 text-red-500"
                        />
                    </div>
                  :
                    <div></div>
                }
                {
                    at == 'atIndex'?
                        <div>
                            <label for='input-position'>Position:</label>
                            <input 
                                name="input-position"
                                type="text"
                                id="input-position"
                                onChange={(event)=>setPosition(parseInt(event.target.value, 10))}
                            />
                        </div>
                    :
                        <div></div>
                }
                <button
                  type="button"
                  className="bg-input hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleVisualization}
                >
                  Visualize
                </button>

            </div>
            <div className="w-[70%]">
              <div className="w-full min-h-[350px] flex justify-center items-center bg-input p-4 relative">
                <VisualizeLinkedList
                  arrayValues={arrayValues}
                  getMessage={getMessage}
                  element={element}
                  type={type}
                  at={at}
                  position={position}
                  startVis={startVis}
                  setStartVis={setStartVis}
                  setArrayValues = {setArrayValues}
                  setPosition={setPosition}
                />
              </div>
              <Description message={message}/>
            </div>
          </div>
        ) : (
          <div className="mt-24  bg-input w-fit m-auto p-5">
            <h1 className="card-heading text-3xl font-bold mb-4 flex flex-col items-center text-red-500 py-4">
              Linked List Visualization
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
              <div className="flex gap-2 py-4">
                <button
                  type="button"
                  onClick={visualizeBinarySearch}
                  className="bg-input hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Visualize
                </button>
              </div>
            </form>

            <div>
              {/* Display the steps */}
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`border rounded py-2 px-3 mb-2 ${
                    step.found ? "bg-green-200" : ""
                  }`}
                >
                  Index: {step.index}, Value: {step.value}, Found:{" "}
                  {step.found.toString()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedList;
