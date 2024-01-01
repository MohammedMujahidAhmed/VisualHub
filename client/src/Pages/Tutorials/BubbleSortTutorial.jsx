import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import BubbleImage0 from '../../TutorialImages/BubbleImage0.png';
import BubbleImage1 from '../../TutorialImages/BubbleImage1.png';
import BubbleImage2 from '../../TutorialImages/BubbleImage2.png';

export default function BubbleSortTutorial(){


    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdbool.h>
    #include <stdio.h>
     
    void swap(int* xp, int* yp)
    {
        int temp = *xp;
        *xp = *yp;
        *yp = temp;
    }
     
    // An optimized version of Bubble Sort
    void bubbleSort(int arr[], int n)
    {
        int i, j;
        bool swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(&arr[j], &arr[j + 1]);
                    swapped = true;
                }
            }
     
            // If no two elements were swapped by inner loop,
            // then break
            if (swapped == false)
                break;
        }
    }
     
    // Function to print an array
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            printf("%d ", arr[i]);
    }
     
    // Driver program to test above functions
    int main()
    {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int n = sizeof(arr) / sizeof(arr[0]);
        bubbleSort(arr, n);
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
    using namespace std;
 
    // An optimized version of Bubble Sort
    void bubbleSort(int arr[], int n)
    {
        int i, j;
        bool swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr[j], arr[j + 1]);
                    swapped = true;
                }
            }
     
            // If no two elements were swapped
            // by inner loop, then break
            if (swapped == false)
                break;
        }
    }
     
    // Function to print an array
    void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            cout << " " << arr[i];
    }
     
    // Driver program to test above functions
    int main()
    {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int N = sizeof(arr) / sizeof(arr[0]);
        bubbleSort(arr, N);
        cout << "Sorted array: \n";
        printArray(arr, N);
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "Python": (
            <SyntaxHighlighter language="python" style={vs}>
                {`
    def bubbleSort(arr):
    n = len(arr)
     
    # Traverse through all array elements
    for i in range(n):
        swapped = False
 
        # Last i elements are already in place
        for j in range(0, n-i-1):
 
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if (swapped == False):
            break
 
 
# Driver code to test above
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
 
    bubbleSort(arr)
 
    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    import java.io.*;
 
    class GFG {
         
        // An optimized version of Bubble Sort
        static void bubbleSort(int arr[], int n)
        {
            int i, j, temp;
            boolean swapped;
            for (i = 0; i < n - 1; i++) {
                swapped = false;
                for (j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                         
                        // Swap arr[j] and arr[j+1]
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        swapped = true;
                    }
                }
     
                // If no two elements were
                // swapped by inner loop, then break
                if (swapped == false)
                    break;
            }
        }
     
        // Function to print an array
        static void printArray(int arr[], int size)
        {
            int i;
            for (i = 0; i < size; i++)
                System.out.print(arr[i] + " ");
            System.out.println();
        }
     
        // Driver program
        public static void main(String args[])
        {
            int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
            int n = arr.length;
            bubbleSort(arr, n);
            System.out.println("Sorted array: ");
            printArray(arr, n);
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
                <VisualizeHeader routePath='/algorithms/search/linear-search' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Bubble Sort Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8"  >
                <p><br /><br />
                    <span className="mr-8"></span><b>Bubble Sort</b> is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
                </p><br />
                <b>Bubble Sort Algorithm</b>
                <br />
                In Bubble Sort algorithm, 
                <ul>
                <li>traverse from left and compare adjacent elements and the higher one is placed at right side. </li>
                <li>In this way, the largest element is moved to the rightmost end at first.</li> 
                <li>This process is then continued to find the second largest and place it and so on until the data is sorted.</li>
                </ul>
                <br />
                <b><h1 className="text-[20px]">How does Bubble Sort Work?</h1></b>
                <br />
                Let us understand the working of bubble sort with the help of the following illustration:
                <br />
                Input: arr[] = (6, 3, 0, 5)
                <br /><br />
                <p>
                    <h1 className="text-[20px]">First Pass:</h1> <br />
                    The largest element is placed in its correct position, i.e., the end of the array.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src={BubbleImage0} width={700} alt="" />
                </div>
                <p>
                    <h1 className="text-[20px]">Second Pass:</h1> <br />
                    Place the second largest element at correct position
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src={BubbleImage1} width={700} alt="" />
                </div>
                <p>
                    <h1 className="text-[20px]">Third Pass:</h1> <br />
                    Place the remaining two elements at their correct positions.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src={BubbleImage2} width={700} alt="" />

                </div>
                <ul>
                    <li><b>Total no. of passes:</b> n-1</li>
                    <li><b>Total no. of comparisons:</b>n*(n-1)/2</li>
                </ul>
                <h1 className="text-[30px]"><b>Implementation of Bubble Sort</b></h1>
                Below is the implementation of the bubble sort. It can be optimized by stopping the algorithm if the inner loop didn’t cause any swap. 
                <br /><br />
                <div className="flex">
                <button className="lang-button" onClick={() => handleLanguageButtonClick("C")}>C</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("C++")}>C++</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("Python")}>Python</button>
                <button className="lang-button" onClick={() => handleLanguageButtonClick("Java")}>Java</button>
            </div>
                <br /><br />
                {selectedLanguage && (
                <div className="text-box">
                    <div>{languageText[selectedLanguage]}</div>
                </div>
            )}
                <h1 className="text-[20px]"><b>Complexity Analysis of Bubble Sort:</b></h1>
                <ul>
                    <li><b>Time Complexity:</b>O(N2)</li>
                    <li><b>Auxiliary Space:</b>O(1)</li>
                </ul>
                <br />
                <h1 className="text-[20px]"><b>Advantages of Bubble Sort:</b></h1>
                <ul>
                    <li>Bubble sort is easy to understand and implement.</li>
                    <li>It does not require any additional memory space.</li>
                    <li>It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.</li>
                </ul>
                <br />
                <h1 className="text-[20px]"><b>Disadvantages of Bubble Sort:</b></h1>
                <ul>
                    <li>Bubble sort has a time complexity of O(N2) which makes it very slow for large data sets.</li>
                    <li>Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.</li>
                </ul>
            </div>

        </div>
    )
}