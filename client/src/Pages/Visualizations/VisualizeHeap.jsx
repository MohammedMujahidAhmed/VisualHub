import React, { useEffect, useState } from "react";
import Test from "../../Components/Test";
import Tree from "react-d3-tree";

class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
}

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
  const [rootNode, setRootNode] = useState(null);

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
    let newArray = [...arrayValues];

    async function arrayToBinaryTree(arr, index = 0, depth = 0, outIndex = -1, inIndex = -1) {
      if (index >= arr.length || arr[index] === null) {
          return null;
      }
  
      let color = null;
  
      // Add conditions to determine the color based on your requirements
      if (index === outIndex || index === inIndex) {
          color = 'yellow'; // Highlight swapping nodes with yellow color
      }
  
      const root = new TreeNode(arr[index], null, null, color);
      //console.log(root.color);
      root.left = await arrayToBinaryTree(arr, 2 * index + 1, depth + 1, outIndex, inIndex);
      root.right = await arrayToBinaryTree(arr, 2 * index + 2, depth + 1, outIndex, inIndex);
  
      return root;
  }

    async function heapify(N, i) {
      let largest = i;
      let left = (2*i + 1), right = (2*i + 2);

      if(left < N && newArray[left] > newArray[largest])
        largest = left;

      if(right < N && newArray[right] > newArray[largest])
        largest = right;

      if(largest != i) {
        let root = await arrayToBinaryTree(newArray, 0, 0, i, largest);
        getMessage(`Swapping Node: ${newArray[largest]} and Node: ${newArray[i]}`);
        setRootNode(root);
        
        setOutIndSwap(largest);
        setInIndSwap(i);
        await delay(2000);
        
        let temp = newArray[i];
        newArray[i] = newArray[largest];
        newArray[largest] = temp;
        setArrayValues(() => [...newArray]);
        root = await arrayToBinaryTree(newArray, 0, 0, -1, -1);
        setRootNode(root);
        setOutIndSwap(-1);
        setInIndSwap(-1);
        await delay(2000);
        
        
        
        await delay(2000);
        await heapify(N, largest);
      }
    }

    async function heapSort(N) {
      getMessage(`Building Max Heap`);
      await delay(2000);
      for(let i=Math.floor(N/2); i>=0; i--){
        await heapify(N, i);
        await delay(2000);
      }
      getMessage(`Max Heap Built`);
      await delay(2000);
      for(let i=N-1; i>=0; i--){
        let root = await arrayToBinaryTree(newArray, 0, 0, i, 0);
        getMessage(`Swapping Node: ${newArray[i]} and Node: ${newArray[0]}`);
        setRootNode(root);
        
        setOutIndSwap(i);
        setInIndSwap(0);
        await delay(2000);
        let temp = newArray[i];
        newArray[i] = newArray[0];
        newArray[0] = temp;
        setArrayValues(() => [...newArray]);
        root = await arrayToBinaryTree(newArray, 0, 0, -1, -1);
        setRootNode(root);
        setOutIndSwap(-1);
        setInIndSwap(-1);
        await delay(2000);
        
        
        setOuterIter(i);
        
        await delay(2000);
        

        getMessage(`Building Max Heap`);
        await delay(2000);
        await heapify(i, 0);
        getMessage(`Max Heap Built`);
        await delay(2000);
      }
    }

    const quickSortStarter = async() => {
      getMessage(`Building Binary Tree Representation of Array`);
      const root = await arrayToBinaryTree(newArray);
      setOuterIter(newArray.length);
      setRootNode(root);
      setFirstIndex(-1);
      setLastIndex(newArray.length);
      await delay(2000);
      await heapSort(newArray.length);
      await delay(2000);
      getMessage(`Array has been Sorted`);
      
    }

    quickSortStarter();
    
  }, []);

  return (
    
    <div className="space-y-4 w-full max-h-[400px]">
      <div className="flex flex-col">

        <div className="flex space-x-4 justify-center">
        
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
                    index >= outerIter
                    ? "bg-green-500"
                    :  index == inIndexSwap
                    ? "animate-bounce bg-yellow-500"
                    : index == outIndexSwap
                    ? "animate-bounce bg-yellow-500"
                    : ""
              }`}
              key={index}
            >
              {value}
            </div> 
            <div className={`w-full text-[12px] text-center pt-2`}>{index}</div>
          </div>
        ))}
        
        </div>
         
      </div>
      <Test rootNode={rootNode}/>

      
    </div>
  );
}
 