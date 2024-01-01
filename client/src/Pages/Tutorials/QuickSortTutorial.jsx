import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import QuickImage0 from '../../TutorialImages/QuickImage0.png';
import QuickImage1 from '../../TutorialImages/QuickImage1.png';
import QuickImage2 from '../../TutorialImages/QuickImage2.png';
import QuickImage3 from '../../TutorialImages/QuickImage3.png';
import QuickImage4 from '../../TutorialImages/QuickImage4.png';
import QuickImage5 from '../../TutorialImages/QuickImage5.png';
import QuickImage6 from '../../TutorialImages/QuickImage6.png';
import QuickImage7 from '../../TutorialImages/QuickImage7.png';
export default function QuickSortTutorial() {

    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdio.h>  
  
    // Function to swap two elements  
    void swap(int* a, int* b) {  
        int t = *a;  
        *a = *b;  
        *b = t;  
    }  
    int partition(int arr[], int low, int high) {  
        int pivot = arr[high];  
        int i = (low - 1);  
      
        for (int j = low; j <= high - 1; j++) {  
            if (arr[j] < pivot) {  
                i++;  
                swap(&arr[i], &arr[j]);  
            }  
        }  
        swap(&arr[i + 1], &arr[high]);  
        return (i + 1);  
    }  
    void quickSort(int arr[], int low, int high) {  
        if (low < high) {  
            int pi = partition(arr, low, high);  
            quickSort(arr, low, pi - 1);  
            quickSort(arr, pi + 1, high);  
        }  
    }  
      
    // Function to print the array  
    void printArray(int arr[], int size) {  
        int i;  
        for (i = 0; i < size; i++)  
            printf("%d ", arr[i]);  
        printf("\n");  
    }  
      
    int main() {  
        int arr[] = { 12, 17, 6, 25, 1, 5 };  
        int n = sizeof(arr) / sizeof(arr[0]);  
        quickSort(arr, 0, n - 1);  
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
     
    int partition(int arr[],int low,int high)
    {
      //choose the pivot
       
      int pivot=arr[high];
      //Index of smaller element and Indicate
      //the right position of pivot found so far
      int i=(low-1);
       
      for(int j=low;j<=high;j++)
      {
        //If current element is smaller than the pivot
        if(arr[j]<pivot)
        {
          //Increment index of smaller element
          i++;
          swap(arr[i],arr[j]);
        }
      }
      swap(arr[i+1],arr[high]);
      return (i+1);
    }
     
    // The Quicksort function Implement
                
    void quickSort(int arr[],int low,int high)
    {
      // when low is less than high
      if(low<high)
      {
        // pi is the partition return index of pivot
         
        int pi=partition(arr,low,high);
         
        //Recursion Call
        //smaller element than pivot goes left and
        //higher element goes right
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
      }
    }
                  
      
    int main() {
      int arr[]={10,7,8,9,1,5};
      int n=sizeof(arr)/sizeof(arr[0]);
      // Function call
      quickSort(arr,0,n-1);
      //Print the sorted array
      cout<<"Sorted Array\n";
      for(int i=0;i<n;i++)
      {
        cout<<arr[i]<<" ";
      }
      return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "Python": (
            <SyntaxHighlighter language="python" style={vs}>
                {`
    def partition(array, low, high):
 
    # Choose the rightmost element as pivot
    pivot = array[high]
 
    # Pointer for greater element
    i = low - 1
 
    # Traverse through all elements
    # compare each element with pivot
    for j in range(low, high):
        if array[j] <= pivot:
 
            # If element smaller than pivot is found
            # swap it with the greater element pointed by i
            i = i + 1
 
            # Swapping element at i with element at j
            (array[i], array[j]) = (array[j], array[i])
 
    # Swap the pivot element with
    # the greater element specified by i
    (array[i + 1], array[high]) = (array[high], array[i + 1])
 
    # Return the position from where partition is done
    return i + 1
 
 
# Function to perform quicksort
def quicksort(array, low, high):
    if low < high:
 
        # Find pivot element such that
        # element smaller than pivot are on the left
        # element greater than pivot are on the right
        pi = partition(array, low, high)
 
        # Recursive call on the left of pivot
        quicksort(array, low, pi - 1)
 
        # Recursive call on the right of pivot
        quicksort(array, pi + 1, high)
 
 
# Driver code
if __name__ == '__main__':
    array = [10, 7, 8, 9, 1, 5]
    N = len(array)
 
    # Function call
    quicksort(array, 0, N - 1)
    print('Sorted array:')
    for x in array:
        print(x, end=" ")
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    import java.io.*;
 
    class GFG {
     
        // A utility function to swap two elements
        static void swap(int[] arr, int i, int j)
        {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
     
        // This function takes last element as pivot,
        // places the pivot element at its correct position
        // in sorted array, and places all smaller to left
        // of pivot and all greater elements to right of pivot
        static int partition(int[] arr, int low, int high)
        {
            // Choosing the pivot
            int pivot = arr[high];
     
            // Index of smaller element and indicates
            // the right position of pivot found so far
            int i = (low - 1);
     
            for (int j = low; j <= high - 1; j++) {
     
                // If current element is smaller than the pivot
                if (arr[j] < pivot) {
     
                    // Increment index of smaller element
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return (i + 1);
        }
     
        // The main function that implements QuickSort
        // arr[] --> Array to be sorted,
        // low --> Starting index,
        // high --> Ending index
        static void quickSort(int[] arr, int low, int high)
        {
            if (low < high) {
     
                // pi is partitioning index, arr[p]
                // is now at right place
                int pi = partition(arr, low, high);
     
                // Separately sort elements before
                // partition and after partition
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        // To print sorted array
        public static void printArr(int[] arr)
        {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
        }
     
        // Driver Code
        public static void main(String[] args)
        {
            int[] arr = { 10, 7, 8, 9, 1, 5 };
            int N = arr.length;
     
            // Function call
            quickSort(arr, 0, N - 1);
            System.out.println("Sorted array:");
            printArr(arr);
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
                <h1 className="card-heading text-[3rem]" >Quick Sort Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br />
            <span className="mr-8"></span><b>QuickSort</b> is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
            <br /><br />
            <h1 className="text-[20px]"><b>How does QuickSort work?</b></h1>
            <span className="mr-8"></span>The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.
            <br />
            <span className="mr-8"></span>Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.
            <br /><br />
            <div className="flex  justify-center items-center w-full">
                <img src={QuickImage0} width={500}  alt="" />
            </div>
            <h1 className="text-[18px]"><b>Choice of Pivot:</b></h1>
            
            There are many different choices for picking pivots. 
            <ul>
                <li>Always pick the first element as a pivot.</li>
                <li>Always pick the last element as a pivot.</li>
                <li>Pick a random element as a pivot.</li>
                <li>Pick the middle as the pivot.</li>
            </ul>
            <br />
            <h1 className="text-[18px]"><b>Partition Algorithm:</b></h1>
            <span className="mr-8"></span>The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element.
            <br /><br />
            <span className="mr-8"></span>Let us understand the working of partition and the Quick Sort algorithm with the help of the following example:
            <br />
            Consider: arr[] = (10, 80, 30, 90, 40).
            <br /><br />
            <ul>
                <li>Compare 10 with the pivot and as it is less than pivot arrange it accrodingly.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage1} width={500}  alt="" />
                </div>
                <br />
                <li>Compare 80 with the pivot. It is greater than pivot.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage2} width={500}  alt="" />
                </div>
                <br />
                <li>Compare 30 with pivot. It is less than pivot so arrange it accordingly.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage3} width={500}  alt="" />
                </div>
                <br />
                <li>Compare 90 with the pivot. It is greater than the pivot.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage4} width={500}  alt="" />
                </div>
                <br />
                <li>Arrange the pivot in its correct position.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage5} width={500}  alt="" />
                </div>
            </ul>
            <br />
            <h1 className="text-[18px]"><b>Illustration of Quicksort:</b></h1>
            <br />
            <span className="mr-8"></span>As the partition process is done recursively, it keeps on putting the pivot in its actual position in the sorted array. Repeatedly putting pivots in their actual position makes the array sorted.
            <span className="mr-8"></span>Follow the below images to understand how the recursive implementation of the partition algorithm helps to sort the array.
            <br />
            <ul>
                <li>Initial partition on the main array:</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage6} width={500}  alt="" />
                </div>
                <br />
                <li>Partitioning of the subarrays:</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={QuickImage7} width={500}  alt="" />
                </div>
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Implementation of Quick Sort</b></h1>
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
            <h1 className="text-[18px]"><b>Time Complexity:</b></h1>
            <br />
            <ul>
                <li><b>Best Case: Ω (N log (N))</b></li>
                The best-case scenario for quicksort occur when the pivot chosen at the each step divides the array into roughly equal halves.
In this case, the algorithm will make balanced partitions, leading to efficient Sorting.
                <li><b>Average Case: θ ( N log (N))</b></li>
                Quicksort’s average-case performance is usually very good in practice, making it one of the fastest sorting Algorithm.
                <li><b>Worst Case: O(N2)</b></li>
                The worst-case Scenario for Quicksort occur when the pivot at each step consistently results in highly unbalanced partitions. When the array is already sorted and the pivot is always chosen as the smallest or largest element. To mitigate the worst-case Scenario, various techniques are used such as choosing a good pivot (e.g., median of three) and using Randomized algorithm (Randomized Quicksort ) to shuffle the element before sorting.

            </ul>
            <br /><br />
            <h1 className="text-[18px]"><b>Space Complexity:</b></h1>
            <br />
            <ul>
                <li><b>Auxiliary Space: O(1)</b></li>
                If we don’t consider the recursive stack space. If we consider the recursive stack space then, in the worst case quicksort could make O(N).
            </ul>
            <br /><br />
            <h1 className="text-[20px]"><b>Advantages of Quick Sort:</b></h1>
            <br />
            <ul>
                <li>It is a divide-and-conquer algorithm that makes it easier to solve problems.</li>
                <li>It is efficient on large data sets.</li>
                <li>It has a low overhead, as it only requires a small amount of memory to function.</li>
                
            </ul>
            <br />
            <h1 className="text-[20px]"><b>Disadvantages of Quick Sort:</b></h1>
            <br />
            <ul>
                <li>It has a worst-case time complexity of O(N2), which occurs when the pivot is chosen poorly.</li>
                <li>It is not a good choice for small data sets.</li>
                <li>It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).</li>
            </ul>
            </div>
        </div>
    )
}