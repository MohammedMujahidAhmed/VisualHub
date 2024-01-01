import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import HeapImage0 from '../../TutorialImages/HeapImage0.png'
import HeapImage1 from '../../TutorialImages/HeapImage1.png'
import HeapImage2 from '../../TutorialImages/HeapImage2.png'
import HeapImage3 from '../../TutorialImages/HeapImage3.png'
import HeapImage4 from '../../TutorialImages/HeapImage4.png'
import HeapImage5 from '../../TutorialImages/HeapImage5.png'



export default function HeapSortTutorial() {


    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdio.h>
 
    void swap(int *xp, int *yp)
    {
        int temp = *xp;
        *xp = *yp;
        *yp = temp;
    }
     
    void selectionSort(int arr[], int n)
    {
        int i, j, min_idx;
     
        // One by one move boundary of unsorted subarray
        for (i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            min_idx = i;
            for (j = i+1; j < n; j++)
              if (arr[j] < arr[min_idx])
                min_idx = j;
     
            // Swap the found minimum element with the first element
               if(min_idx != i)
                swap(&arr[min_idx], &arr[i]);
        }
    }
     
    /* Function to print an array */
    void printArray(int arr[], int size)
    {
        int i;
        for (i=0; i < size; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }
     
    // Driver program to test above functions
    int main()
    {
        int arr[] = {64, 25, 12, 22, 11};
        int n = sizeof(arr)/sizeof(arr[0]);
        selectionSort(arr, n);
        printf("Sorted array: \n");
        printArray(arr, n);
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "C++": (
            <SyntaxHighlighter language="cpp" style={vs}>
                {`
    #include <bits/stdc++.h>
    using namespace std;
     
    // Function for Selection sort
    void selectionSort(int arr[], int n)
    {
        int i, j, min_idx;
     
        // One by one move boundary of
        // unsorted subarray
        for (i = 0; i < n - 1; i++) {
     
            // Find the minimum element in
            // unsorted array
            min_idx = i;
            for (j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            }
     
            // Swap the found minimum element
            // with the first element
            if (min_idx != i)
                swap(arr[min_idx], arr[i]);
        }
    }
     
    // Function to print an array
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++) {
            cout << arr[i] << " ";
            cout << endl;
        }
    }
     
    // Driver program
    int main()
    {
        int arr[] = { 64, 25, 12, 22, 11 };
        int n = sizeof(arr) / sizeof(arr[0]);
     
        // Function Call
        selectionSort(arr, n);
        cout << "Sorted array: \n";
        printArray(arr, n);
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "Python": (
            <SyntaxHighlighter language="python" style={vs}>
                {`
    import sys
    A = [64, 25, 12, 22, 11]
     
    # Traverse through all array elements
    for i in range(len(A)):
         
        # Find the minimum element in remaining 
        # unsorted array
        min_idx = i
        for j in range(i+1, len(A)):
            if A[min_idx] > A[j]:
                min_idx = j
                 
        # Swap the found minimum element with 
        # the first element        
        A[i], A[min_idx] = A[min_idx], A[i]
     
    # Driver code to test above
    print ("Sorted array")
    for i in range(len(A)):
        print("%d" %A[i],end=" , ") 
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    import java.io.*;
    public class SelectionSort
    {
        void sort(int arr[])
        {
            int n = arr.length;
     
            // One by one move boundary of unsorted subarray
            for (int i = 0; i < n-1; i++)
            {
                // Find the minimum element in unsorted array
                int min_idx = i;
                for (int j = i+1; j < n; j++)
                    if (arr[j] < arr[min_idx])
                        min_idx = j;
     
                // Swap the found minimum element with the first
                // element
                int temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
        }
     
        // Prints the array
        void printArray(int arr[])
        {
            int n = arr.length;
            for (int i=0; i<n; ++i)
                System.out.print(arr[i]+" ");
            System.out.println();
        }
     
        // Driver code to test above
        public static void main(String args[])
        {
            SelectionSort ob = new SelectionSort();
            int arr[] = {64,25,12,22,11};
            ob.sort(arr);
            System.out.println("Sorted array");
            ob.printArray(arr);
        }
    }
                `}
            </SyntaxHighlighter>
        ),
    };

    const handleLanguageButtonClick = (language) => {
        // Set the selected language when a button is clicked
        setSelectedLanguage(language);
        console.log(`Selected language: ${language}`);
        // Add your logic here
    };


    return (

        
        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/selection-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Heap Sort Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br /><br />
            <span className="mr-8"></span><b>Heap sort</b> is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.
            <br />
            <br />
            <h1 className="text-[20px]"><b>Heap Sort Algorithm</b></h1>
            <br />
            To solve the problem follow the below idea:
            <br /><br />
            <span className="mr-8"></span>First convert the array into heap data structure using heapify, then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap.
            <br />
            <span className="mr-8"></span>Repeat this process until size of heap is greater than 1.
            <br />
            <ul>
                <li>Build a heap from the given input array.</li>
                <li>
                    Build a heap from the given input array.
                    <ul style={{ marginLeft: '20px' }}>
                        <li>Swap the root element of the heap (which is the largest element) with the last element of the heap.</li>
                        <li>Remove the last element of the heap (which is now in the correct position).</li>
                        <li>Heapify the remaining elements of the heap.</li>
                    </ul>
                </li>
                <li>The sorted array is obtained by reversing the order of the elements in the input array.</li>
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Detailed Working of Heap Sort</b></h1>
            <br />
            To understand heap sort more clearly, let’s take an unsorted array and try to sort it using heap sort.
            Consider the array: arr[] = (4, 10, 3, 5, 1).
            <br />
            <br />
            <b>Build Complete Binary Tree:</b> Build a complete binary tree from the array.
            <br /><br />
            <div className="flex  justify-center items-center w-full">
                <img src={HeapImage0} width={500}  alt="" />
            </div>
            <br />
            <b>Transform into max heap:</b> After that, the task is to construct a tree from that unsorted array and try to convert it into max heap.
            <br />
            <ul>
                <li>To transform a heap into a max-heap, the parent node should always be greater than or equal to the child nodes
                    <ul style={{ marginLeft: '20px' }}>
                        <li>Here, in this example, as the parent node 4 is smaller than the child node 10, thus, swap them to build a max-heap.</li>
                    </ul>
                </li>
                <li>Now, 4 as a parent is smaller than the child 5, thus swap both of these again and the resulted heap and array should be like this:</li>
            </ul>
            <br />
            <div className="flex  justify-center items-center w-full">
                <img src={HeapImage1} width={500}  alt="" />
            </div>
            <br />
            <b>Perform heap sort:</b> Remove the maximum element in each step (i.e., move it to the end position and remove that) and then consider the remaining elements and transform it into a max heap.
            <ul>
                <li>Delete the root element (10) from the max heap. In order to delete this node, try to swap it with the last node, i.e. (1). After removing the root element, again heapify it to convert it into max heap.</li>
                <ul style={{ marginLeft: '20px' }}>
                        <li>Resulted heap and array should look like this:</li>
                        <br />
                        <div className="flex  justify-center items-center w-full">
                            <img src={HeapImage2} width={500}  alt="" />
                        </div>
                        <br />
                        <li>Repeat the above steps and it will look like the following:</li>
                        <br />
                        <div className="flex  justify-center items-center w-full">
                            <img src={HeapImage3} width={500}  alt="" />
                        </div>
                        <br />
                        <li>Now remove the root (i.e. 3) again and perform heapify.</li>
                        <br />
                        <div className="flex  justify-center items-center w-full">
                            <img src={HeapImage4} width={500}  alt="" />
                        </div>
                        <br />
                        <li>Now when the root is removed once again it is sorted. and the sorted array will be like arr[] = (1, 3, 4, 5, 10).</li>
                        <br />
                        <div className="flex  justify-center items-center w-full">
                            <img src={HeapImage5} width={500}  alt="" />
                        </div>
                </ul>
            
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Implementation of Heap Sort</b></h1>
            <br />

            <div className="flex">
                <button className="lang-button" onClick={() => handleLanguageButtonClick("C")}>C</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("C++")}>C++</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("Python")}>Python</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("Java")}>Java</button>
            </div>
            <br />
            {selectedLanguage && (
                <div className="text-box">
                    <div>{languageText[selectedLanguage]}</div>
                </div>
            )}
            <br />
            
            <div>
            <h1 className="text-[20px]"><b>Complexity Analysis of Heap Sort</b></h1>
            <br />
            <b>Time Complexity:</b> O(N log N)
            <br />
            <b>Auxiliary Space:</b> O(log n), due to the recursive call stack. However, auxiliary space can be O(1) for iterative implementation.
            <br /><br />
            <h1 className="text-[20px]"><b>Important points about Heap Sort:</b></h1>
            <br />
            <ul>
                <li>Heap sort is an in-place algorithm. </li>
                <li>Its typical implementation is not stable but can be made stable</li>
                <li>Typically 2-3 times slower than well-implemented QuickSort.  The reason for slowness is a lack of locality of reference.</li>
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Advantages of Heap Sort:</b></h1>
            <br />
            <ul>
                <li><b>Efficient Time Complexity:</b> Heap Sort has a time complexity of O(n log n) in all cases. This makes it efficient for sorting large datasets. The log n factor comes from the height of the binary heap, and it ensures that the algorithm maintains good performance even with a large number of elements.</li>
                <li><b>Memory Usage –</b>Memory usage can be minimal because apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work</li>
                <li><b>Simplicity –</b>  It is simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion.</li>
            
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Disadvantages of Heap Sort:</b></h1>
            <br />
            <ul>
                <li><b>Costly:</b> Heap sort is costly.</li>
                <li><b>Unstable:</b>Heap sort is unstable. It might rearrange the relative order.</li>
                <li><b>Efficient:</b>Heap Sort is not very efficient when working with highly complex data.</li>
            </ul>
            </div>
            </div>

        </div>
    )
}