import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import SelectionImage0 from '../../TutorialImages/SelectionImage0.png';
import SelectionImage1 from '../../TutorialImages/SelectionImage1.png';
import SelectionImage2 from '../../TutorialImages/SelectionImage2.png';
import SelectionImage3 from '../../TutorialImages/SelectionImage3.png';
import SelectionImage4 from '../../TutorialImages/SelectionImage4.png';

export default function SelectionSortTutorial() {


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
                <h1 className="card-heading text-[3rem]" >Selection Sort Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br />
            <span className="mr-8"></span><b>Selection sort</b> is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
            <br /><br />
            <span className="mr-8"></span>The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted. 
            <br /><br />
            <h1 className="text-[20px]"><b>How does Selection Sort Algorithm work?</b></h1>
            <br /><br />
            <span className="mr-8"></span>Lets consider the following array as an example: arr[] = (64, 25, 12, 22, 11)
            <br />
            First pass:
            <br />
            <ul>
                <li>For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.</li>
                <li>Thus, replace 64 with 11. After one iteration 11, which happens to be the least value in the array, tends to appear in the first position of the sorted list.</li>
            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={SelectionImage0} width={500}  alt="" />
            </div>
            <br />
            Second Pass:
            <br />
            <ul>
                <li>For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.</li>
                <li>After traversing, we found that 12 is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.</li>
            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={SelectionImage1} width={500}  alt="" />
            </div>
            <br />
            Third Pass:
            <br />
            <ul>
                <li>Now, for third place, where 25 is present again traverse the rest of the array and find the third least value present in the array.</li>
                <li>While traversing, 22 came out to be the third least value and it should appear at the third place in the array, thus swap 22 with element present at third position.</li>

            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={SelectionImage2} width={500}  alt="" />
            </div>
            <br />
            Fourth Pass:
            <br />
            <ul>
                <li>Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array </li>
                <li>As 25 is the 4th lowest value hence, it will place at the fourth position.</li>
            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={SelectionImage3} width={500}  alt="" />
            </div>
            <br />
            Fifth Pass:
            <br />
            <ul>
                <li>At last the largest value present in the array automatically get placed at the last position in the array</li>
                <li>The resulted array is the sorted array.</li>
            </ul>
            <div className="flex  justify-center items-center w-full">
                <img src={SelectionImage4} width={500}  alt="" />
            </div>
            <h1 className="text-[20px]"><b>Implementation of Selection Sort</b></h1>
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

            <h1 className="text-[20px]"><b>Complexity Analysis of Selection Sort</b></h1>
            <br />
            <b>Time Complexity:</b>The time complexity of Selection Sort is O(N2) as there are two nested loops:
            <ul>
                <li>One loop to select an element of Array one by one = O(N)</li>
                <li>Another loop to compare that element with every other Array element = O(N)</li>
                <li>Therefore overall complexity = O(N) * O(N) = O(N*N) = O(N2)</li>

            </ul>
            <br />
            <b>Auxiliary Space:</b>O(1) as the only extra memory used is for temporary variables while swapping two values in Array. The selection sort never makes more than O(N) swaps and can be useful when memory writing is costly. 
            <br /><br />
            <h1 className="text-[20px]"><b>Advantages of Selection Sort Algorithm</b></h1>
            <ul>
                <li>Simple and easy to understand.</li>
                <li>Works well with small datasets.</li>
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Advantages of Selection Sort Algorithm</b></h1>
            <ul>
                <li>Selection sort has a time complexity of O(n^2) in the worst and average case.</li>
                <li>Does not work well on large datasets.</li>
                <li>Does not preserve the relative order of items with equal keys which means it is not stable.</li>

            </ul>
            
            
            
            </div>

            

        </div>
    )
}