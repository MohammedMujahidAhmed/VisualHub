import React, { useEffect, useState } from "react";

const VisualizePageReplacement = ({
    arrayValues,
    getMessage,
    type,
    setArrayValues,
    frameSize 
}) => {

    const [size, setSize] = useState(frameSize);
    const [miss, setMiss] = useState(0);
    const [hit, setHit] = useState(0);
    let arr = new Array();
    let arrc = new Array();
    const [showArray, setShowArray] = useState([]);
    const [k, setK] = useState(0);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    function searchIt(p) {
        for (let i = 0; i < size; i++) {
            if (arr[i] == p) {
                return i;
            }
        }
        return -1;
    }

    function findMin() {
        let min = 10000;
        let index;
        for (let i = 0; i < size; i++) {
            if (arrc[i] < min) {
                min = arrc[i];
                index = i;
            }
        }
        return index;
    }

    function decArrc(index) {
        for (let i = 0; i < size; i++) {
            if (i == index) {
                continue;
            }
            else {
                arrc[i] = arrc[i] - 1;
            }
        }
    }

    function makeArrcZero() {
        for (let i = 0; i < size; i++) {
            arrc[i] = 0;
        }
    }


    function getIndexLru() {
        let count = 0;
        let j;
        for (let i = arrayValues.length - 1; i >= 0; i--) {
            if (searchIt(arrayValues[i]) != -1) {
                j = searchIt(arrayValues[i]);
                if (arrc[j] == 0) {
                    count++;
                    arrc[j] = count;
                }
            }
            if (count == size) {
                return j;
            }
        }
    }

    async function fifo() {
        let m = 0;
        let h = 0;
        let i = 0;
        let j = 0;
        await delay(1000);
        while (1) {
            if (j == size || i >= arrayValues.length) {
                break;
            }
            if ((searchIt(arrayValues[i])) == -1) {
                arr[j] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                m = m + 1;
                console.log(newArray);
                await delay(1000);
                arrc[j] = j + 1;
                j = j + 1;
            }
            else {
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                console.log(newArray);
                await delay(1000);
            }
            console.log(i);
            i = i + 1;
            setK(i);
            setHit(h);
            setMiss(m);
        }
        for (; i < arrayValues.length; i++) {
            if ((searchIt(arrayValues[i])) == -1) {
                let index = findMin();
                arr[index] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
                arrc[index] = size;
                decArrc(index);
                m = m + 1
            }
            else {
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
                console.log(newArray);
            }
            console.log(i);
            setK(i);
            setMiss(m);
            setHit(h);
        }
    }

    function getIndexOptimal(bw){
        let count = size;
        let j;
        for(let i=bw+1;i<n;i++){
            if(searchIt(arrayValues[i]) != -1){
                j = searchIt(arrayValues[i]);
                if(arrc[j] == 0){
                    arrc[j] = count;
                    count--;
                }
            }
            if(count == -1){
                return j;
            }
        }
        let min=INT_MAX;
        let index;
        for(let i=0;i<size;i++){
            if(arrc[i] < min){
                min = arrc[i];
                index = i;
            }
        }
        return index;
    }


    async function lru() {
        let h = 0;
        let m = 0;
        let i = 0;
        let j = 0;
        while (1) {
            if (j == size || i >= arrayValues.length) {
                break;
            }
            if (searchIt(arrayValues[i]) == -1) {
                arr[j] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                m = m + 1;
                j++;
                await delay(1000);
            }
            else {
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
            }
            i = i + 1;
            setK(i);
            setMiss(m);
            setHit(h);
        }
        for (; i < arrayValues.length; i = i + 1) {
            makeArrcZero();
            if (searchIt(arrayValues[i]) == -1) {
                let index = getIndexLru(i);
                arr[index] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                m = m + 1;
                await delay(1000);
            }
            else {
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
            }
            setK(i);
            setMiss(m);
            setHit(h);
        }
    }

    async function optimal() {
        let h = 0;
        let m = 0;
        let i = 0;
        let j = 0;
        while(1){
            if(j == size || i>=arrayValues.length){ 
                break;
            }
            if(searchIt(arrayValues[i]) == -1){
                arr[j] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                m = m + 1;
                j = j + 1;
                await delay(1000);
            }
            else{
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
            }
            i = i + 1;
            setK(i);
            setMiss(m);
            setHit(h);
        }
        for(;i<n;i++){
            makeArrcZero();
            if(searchIt(arrayValues[i]) == -1){
                let index = getIndexOptimal(pro,i,n);
                arr[index] = arrayValues[i];
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                m = m + 1;
                await delay(1000);
            }
            else{
                h = h + 1;
                await delay(1000);
                let newArray = [...arr];
                setShowArray(() => [...newArray])
                await delay(1000);
            }
            setK(i);
            setMiss(m);
            setHit(h);
        }
    }

    useEffect(() => {
        console.log(arrayValues);
        console.log(size);
        if (type == "fifo") {
            fifo();
        } else if (type == "lru") {
            lru();
        } else if (type == "optimal") {
            optimal();
        }
    }, []);

    return (
        <div className="flex flex-col justify-between items-center space-y-10 h-full">
            {/* First space */}
            <div className="flex flex-col border bg-element w-fit p-4 ">
                {
                    showArray.map((val, index) => (
                        <div className="border border-white w-full h-[40px] flex justify-center items-center p-2" key={index}>
                            {val}
                        </div>
                    ))
                }
            </div>
            {/* second space */}
            <div className="flex flex-col">
                {/*second first space */}
                <div className="flex space-x-4">
                    {
                        arrayValues.map((value, index) => (
                            <div className="min-w-[40px]">
                                <div
                                    className={`bg-element w-full h-[40px] flex justify-center items-center p-2 
                                        ${index == k ? 'bg-red-500' : ''}
                                    `}
                                    key={index}
                                >
                                    <span>{value}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/*second second space */}
                {/* <div className="flex justify-between items-center">
                    <div>
                        hit: {hit}
                    </div>
                    <div>
                        miss: {miss}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default VisualizePageReplacement;
