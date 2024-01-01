import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";


class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
} 

export default function ({ arrayValues, setArrayValues, inputValues, target, getMessage }) {
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
  const [rootNode, setRootNode] = useState(null);
  const [disTotal,setDisTotal] = useState(0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  

  class TreeNode {
    constructor(data, left = null, right = null, color = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.color = color;
    }
}

  useEffect(() => {

    const generatePerceptronTreeData = async(weights) => {
      const treeData = {
        name: 'Perceptron',
        attributes: {
          weights: weights.join(', '), // Convert weights array to string
        },
        children: weights.map((weight, index) => ({
          name: `W = ${Math.round(weight*100)/100}`,
        })),
      };
    
      return [treeData]; // react-d3-tree expects an array of root nodes
    };

    let newArray = [...arrayValues];
    let learningRate = 0.1;

    const quickSortStarter = async() => {
      //getMessage(`Building Binary Tree Representation of Array`);
      //const root = await arrayToBinaryTree(newArray);
      const result = await generatePerceptronTreeData(arrayValues);
      setRootNode(result);
      setFirstIndex(0);
      setLastIndex(newArray.length);
      setOuterIter(newArray.length);

      getMessage(`Calculating the Output`);
      await delay(1000);
      let total = 0;
      setInInd(0);
      for(let i = 0; i < newArray.length; i++) {
        setInInd(i);
        await delay(1000);
        total += newArray[i]*inputValues[i];

        getMessage(`Total upto Weight ${i+1}: ${total}`);
        await delay(1000);
      }
      setInInd(-1);
      if(total < 0)
        total = 0;
      getMessage(`Output after ReLu Activation Function: ${total}`);
      setDisTotal(total);
      setInInd(newArray.length);
      await delay(1000);

      getMessage(`Calculating Weight Differences`);
      await delay(1000);
      for(let i = 0; i < newArray.length; i++) {
        setInInd(i);
        getMessage(`Calculating Weight Delta for Weight ${i+1}`);
        await delay(1000);
        let delta = learningRate*(target-total)*(inputValues[i]);
        getMessage(`Deta for Weight ${i+1}: ${delta}`);
        await delay(1000);
        getMessage(`Updating Weight ${i+1}`);
        newArray[i] = newArray[i] + delta;
        setArrayValues(()=>[...newArray]);
        const result = await generatePerceptronTreeData(newArray);
        setRootNode(result);
        await delay(1000);
      }

      getMessage(`Updated Weights: ${newArray}`);
      setInInd(newArray.length);
      await delay(1000);


      getMessage(`Calculating the Output`);
      await delay(1000);
      total = 0;
      setInInd(0);
      for(let i = 0; i < newArray.length; i++) {
        setInInd(i);
        await delay(1000);
        total += newArray[i]*inputValues[i];

        getMessage(`Total upto Weight ${i+1}: ${total}`);
        await delay(1000);
      }
      setInInd(-1);
      if(total < 0)
        total = 0;
      getMessage(`Output after ReLu Activation Function: ${total}`);
      setInInd(newArray.length);
      await delay(1000);
      



      //await delay(2000);
      //getMessage(`Array has been Sorted`);
      
    }

    
    quickSortStarter();
    
    
  }, []);

  return (
    
    <div className="space-y-4 w-full max-h-[400px]">
      <div className="flex flex-col">

        <div className="flex space-x-4 justify-center">
        
        {inputValues.map((value, index) => (
          <div className="min-w-[60px]">
            <div
              className={`bg-element w-full h-[40px]
                ${
                  index >= firstIndex && index <= lastIndex
                  ? "flex"
                  : "hidden"
                } 
                justify-center items-center p-2 ${
                    index == inIndex
                    ? "animate-bounce bg-yellow-500"
                    : ""
              }`}
              key={index}
            >
              {value}
            </div>

          </div>
        ))}
        {/* {<div className={`${inIndex >= arrayValues.length ? "flex": "hidden"}`}>
          Total: {disTotal}
        </div>} */}
        
        </div>
         
      </div>
      <div className='max-w-[1200px] m-auto'>
      <div className='max-w-[1000px] m-auto border mt-[32px] border-white-500 h-[340px] rounded bg-white'>
        <Tree
          data={rootNode == null ? { name: " " } : rootNode}
          orientation="horizontal"
          zoom={0.65}
          translate={{ x: 450, y: 150 }}
          depthFactor={-300}
          pathFunc="straight"
          separation={{siblings:0.5}}
        />
      </div>
    </div>

      
    </div>
  );
}
 