import React, { useState, useEffect, useRef } from 'react';
import VisualizeHeader from '../../../../Components/VisualizeHeader';
import VisualizeLinear from '../../../Visualizations/VisualizeLinear';
import '../../../../index.css';
import Description from '../../../../Components/Description';
import Drop from '../../../../Components/Dropdown';
import { useLocation } from 'react-router-dom';


const LinearSearch = () => {
  const [array, setArray] = useState('1 2 3 4 5');
  const [searchElement, setSearchElement] = useState('3');
  const [steps, setSteps] = useState([]);
  const [inVisualize, setInVisualize] = useState(false);
  const [arrayValues, setArrayValues] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState('Integer');

  const location = useLocation();

  useEffect(() => {
   
    const params = new URLSearchParams(location.search);
    const algorithmName = params.get('algorithmName');
    const data = params.get('data');
    const type = params.get('datatype');
    const target = params.get('target');

    

    
    if (algorithmName && algorithmName.toLowerCase() === 'linear search') {

      setSelectedValue(type);
     
      const dataArray = data.replace(/[,\[\]]/g, ' ');
      
      setArray(dataArray);
      setSearchElement(target);
  }

  }, [location.search]);

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };

  const handleArrayChange = (event) => {
    const sanitizedArray = event.target.value.replace(/[,\[\]]/g, ' ');
    setArray(sanitizedArray);
  };

  const handleSearchElementChange = (event) => {
    setSearchElement(event.target.value);
  };

  const visualizeLinearSearch = () => {
    const arrayValues = array.split(/[,\s]+/).map(formatValues);

    if (arrayValues[arrayValues.length - 1] === 0) {
      arrayValues.pop();
    }

    setArrayValues(arrayValues);
    
    const searchElementValue = formatValues(searchElement);
    setSearchElement(searchElementValue);
    const searchSteps = [];

    for (let i = 0; i < arrayValues.length; i++) {
      searchSteps.push({
        index: i,
        value: arrayValues[i],
        found: arrayValues[i] === searchElementValue,
      });

      if (arrayValues[i] === searchElementValue) {
        break;
      }
    }

    setSteps(searchSteps);
    setInVisualize(true);
  };

  const formatValues = (value) => {
    switch (selectedValue) {
      case 'Integer':
        return Number.parseInt(value, 10);
      case 'Float':
        return parseFloat(value);
      case 'Character':
        return value[0];
      case 'String' :
        return value
      default:
        return value;
    }
  };

  function getMessage(message) {
    setMessage(message);
  }

  return (
    <div className='bg-color h-screen'>
      <div className='max-w-[1200px] m-auto h-full'>
        <VisualizeHeader routePath='/algorithms/search/linear-search' setInVisualize={setInVisualize} />

        {inVisualize ? (
          <div className='flex justify-around items-center h-[80%]'>
            <div className='border bg-input p-4'>
              <div>
                Array : <span>{array}</span>
              </div>
              <div>
                Size : <span>{arrayValues.length}</span>
              </div>
              <div>
                Target : <span>{searchElement}</span>
              </div>
              <div>
                Data Type : <span>{selectedValue}</span>
              </div>
            </div>
            <div className='w-[70%]'>
              <div className='w-full min-h-[350px] flex justify-center items-center bg-input p-4'>
                <VisualizeLinear arrayValues={arrayValues} searchElement={searchElement} getMessage={getMessage} />
              </div>
              <Description message={message} />
            </div>
          </div>
        ) : (
          <div className='mt-24 bg-input w-fit m-auto p-5'>
            <h1 className='card-heading text-3xl font-bold mb-4 flex flex-col items-center text-red-500 py-4'>
              Linear Search Visualization
            </h1>
            <form className='mb-8 flex justify-center items-center flex-col space-y-4'>
              <div className='flex items-center space-x-2 '>
                <label className='min-w-[170px] text-blue-500 card-heading'>Enter Array:</label>
                <input
                  type='text'
                  value={array}
                  onChange={handleArrayChange}
                  className='bg-input border border-blue-500 rounded py-2 px-3 text-red-500'
                />
              </div>
              <div className='flex items-center space-x-2'>
                <label className='min-w-[170px] text-blue-500 card-heading'>Enter Search Element:</label>
                <input
                  type='text'
                  value={searchElement}
                  onChange={handleSearchElementChange}
                  className='border bg-input border-blue-500 rounded py-2 px-3 text-red-500'
                />
              </div>

              <div className='flex items-center space-x-2'>
                <label htmlFor='dropdown' className='min-w-[170px] text-blue-500 card-heading'>
                  Select Data Type:
                </label>
                <select
                  id='dropdown'
                  onChange={handleDropdownChange}
                  value={selectedValue}
                  className='border bg-input border-blue-500 rounded py-2 px-3 text-red-500'
                >
                  <option value='Integer'>Integer</option>
                  <option value='Float'>Float</option>
                  <option value='Character'>Character</option>
                  <option value='String'>String</option>
                </select>
              </div>

              <div className='flex gap-2 py-4'>
                <button
                  type='button'
                  onClick={visualizeLinearSearch}
                  className='bg-input hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'
                >
                  Visualize
                </button>
              </div>
            </form>

            <div>
              {/* Display the steps
              {steps.map((step, index) => (
                <div key={index} className={`border rounded py-2 px-3 mb-2 ${step.found ? 'bg-green-200' : ''}`}>
                  Index: {step.index}, Value: {step.value}, Found: {step.found.toString()}
                </div>
              ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinearSearch;
