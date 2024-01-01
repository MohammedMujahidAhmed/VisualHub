import React, { useState } from "react";
import VisualizeHeader from "../../../Components/VisualizeHeader";
import Description from "../../../Components/Description";
import VisualizePerceptron from "../../Visualizations/VisualizePerceptron";

export default function Perceptron() { 
    
    const [array, setArray] = useState("0.2 0.4 0.3 0.5 0.7 0.8");
    const [inputArray, setInputArray] = useState("1 0 1 0 1 2")
    const [inVisualize, setInVisualize] = useState(false);
    const [arrayValues, setArrayValues] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedValue, setSelectedValue] = useState('Float');
    const [inputValues, setInputValues] = useState([]);
    const [target, setTarget] = useState("0.2");


    const handleArrayChange = (event) => {
        setArray(event.target.value);
    };

    const formatValues = (value) => { 
      switch(selectedValue){
      case "Integer" : 
                    return Number.parseInt(value, 10);
      case "Float" : 
                    return parseFloat(value);
      case "Character": 
                    return value[0];
      default: 
              return value;
      }
  }

    function getMessage(message){
        setMessage(message);
    }

    const visualizeBinarySearch = () => {
        const arrayValues = array.split(" ").map(formatValues);
        const inputArrayValues = inputArray.split(" ").map(formatValues);
        if (arrayValues[arrayValues.length - 1] === 0) arrayValues.pop(-1);
        if (inputArrayValues[arrayValues.length - 1] === 0) inputArrayValues.pop(-1);
        setArrayValues(arrayValues);
        setInputValues(inputArrayValues);
        setTarget(formatValues(target));
        if(arrayValues.length == inputArrayValues.length){
            setInVisualize(true);
        }
        else{
            toast("Check Inputs");
        }
        
    };

  return (
    <div className="bg-color h-screen">
      <div className='max-w-[1200px] m-auto h-full'>
        <VisualizeHeader
          routePath="/machineLearning/perceptron"
          setInVisualize={setInVisualize}
        />

        {inVisualize ? (
          <div className="flex justify-around items-center h-[80%]">
            <div className="border bg-input p-4">
              <div>
                Inputs : <span>{inputArray}</span>
              </div>
              <div>
                Weights : <span>{array}</span>
              </div>
              <div>
                Size : <span>{arrayValues.length}</span>
              </div>
              <div>
                Target : <span>{target}</span>
              </div>
              
            </div>
            <div className="w-[70%]">
              <div className='w-full min-h-[500px] flex justify-center items-center bg-input p-4 mt-16'>
                <VisualizePerceptron
                  arrayValues={arrayValues}
                  setArrayValues={setArrayValues}
                  inputValues={inputValues}
                  target={target}
                  getMessage={getMessage}
                />
              </div>
              <Description message={message}/>
            </div>
      
            
            
          </div>
        ) : (
          <div className="mt-24  bg-input w-fit m-auto p-5">
            <h1 className="card-heading text-3xl font-bold mb-4 flex flex-col items-center text-red-500 py-4">
              Perceptron Visualization
            </h1>
            <form className="mb-8 flex justify-center items-center flex-col space-y-4">
                <div className="flex items-center space-x-2">
                <label className="min-w-[170px] text-blue-500 card-heading">
                  Enter Inputs:
                </label>
                <input
                  type="text"
                  value={inputArray}
                  onChange={(ev) => {setInputArray(ev.target.value)}}
                  className="bg-input border border-blue-500 rounded py-2 px-3 text-red-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="min-w-[170px] text-blue-500 card-heading">
                  Enter Target:
                </label>
                <input
                  type="text"
                  value={target}
                  onChange={(ev)=>{setTarget(ev.target.value)}}
                  className="bg-input border border-blue-500 rounded py-2 px-3 text-red-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="min-w-[170px] text-blue-500 card-heading">
                  Enter Weights:
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
          </div>
        )}
      </div>
    </div>
    )
}