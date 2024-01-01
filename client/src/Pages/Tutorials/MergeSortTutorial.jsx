import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import MergeImage0 from '../../TutorialImages/MergeImage0.png';
import MergeImage1 from '../../TutorialImages/MergeImage1.png'
import MergeImage2 from '../../TutorialImages/MergeImage2.png'
import MergeImage3 from '../../TutorialImages/MergeImage3.png'
import MergeImage4 from '../../TutorialImages/MergeImage4.png'

export default function MergeSortTutorial() {

    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdio.h>
    #include <stdlib.h>
     
    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int arr[], int l, int m, int r)
    {
        int i, j, k;
        int n1 = m - l + 1;
        int n2 = r - m;
     
        // Create temp arrays
        int L[n1], R[n2];
     
        // Copy data to temp arrays L[] and R[]
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
     
        // Merge the temp arrays back into arr[l..r
        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
     
        // Copy the remaining elements of L[],
        // if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
     
        // Copy the remaining elements of R[],
        // if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
     
    // l is for left index and r is right index of the
    // sub-array of arr to be sorted
    void mergeSort(int arr[], int l, int r)
    {
        if (l < r) {
            int m = l + (r - l) / 2;
     
            // Sort first and second halves
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
     
            merge(arr, l, m, r);
        }
    }
     
    // Function to print an array
    void printArray(int A[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            printf("%d ", A[i]);
        printf("\n");
    }
     
    // Driver code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int arr_size = sizeof(arr) / sizeof(arr[0]);
     
        printf("Given array is \n");
        printArray(arr, arr_size);
     
        mergeSort(arr, 0, arr_size - 1);
     
        printf("\nSorted array is \n");
        printArray(arr, arr_size);
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
     
    // Merges two subarrays of array[].
    // First subarray is arr[begin..mid]
    // Second subarray is arr[mid+1..end]
    void merge(int array[], int const left, int const mid,
               int const right)
    {
        int const subArrayOne = mid - left + 1;
        int const subArrayTwo = right - mid;
     
        // Create temp arrays
        auto *leftArray = new int[subArrayOne],
             *rightArray = new int[subArrayTwo];
     
        // Copy data to temp arrays leftArray[] and rightArray[]
        for (auto i = 0; i < subArrayOne; i++)
            leftArray[i] = array[left + i];
        for (auto j = 0; j < subArrayTwo; j++)
            rightArray[j] = array[mid + 1 + j];
     
        auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
        int indexOfMergedArray = left;
     
        // Merge the temp arrays back into array[left..right]
        while (indexOfSubArrayOne < subArrayOne
               && indexOfSubArrayTwo < subArrayTwo) {
            if (leftArray[indexOfSubArrayOne]
                <= rightArray[indexOfSubArrayTwo]) {
                array[indexOfMergedArray]
                    = leftArray[indexOfSubArrayOne];
                indexOfSubArrayOne++;
            }
            else {
                array[indexOfMergedArray]
                    = rightArray[indexOfSubArrayTwo];
                indexOfSubArrayTwo++;
            }
            indexOfMergedArray++;
        }
     
        // Copy the remaining elements of
        // left[], if there are any
        while (indexOfSubArrayOne < subArrayOne) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
            indexOfMergedArray++;
        }
     
        // Copy the remaining elements of
        // right[], if there are any
        while (indexOfSubArrayTwo < subArrayTwo) {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
            indexOfMergedArray++;
        }
        delete[] leftArray;
        delete[] rightArray;
    }
     
    // begin is for left index and end is right index
    // of the sub-array of arr to be sorted
    void mergeSort(int array[], int const begin, int const end)
    {
        if (begin >= end)
            return;
     
        int mid = begin + (end - begin) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array, mid + 1, end);
        merge(array, begin, mid, end);
    }
     
    // UTILITY FUNCTIONS
    // Function to print an array
    void printArray(int A[], int size)
    {
        for (int i = 0; i < size; i++)
            cout << A[i] << " ";
        cout << endl;
    }
     
    // Driver code
    int main()
    {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        int arr_size = sizeof(arr) / sizeof(arr[0]);
     
        cout << "Given array is \n";
        printArray(arr, arr_size);
     
        mergeSort(arr, 0, arr_size - 1);
     
        cout << "\nSorted array is \n";
        printArray(arr, arr_size);
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "Python": (
            <SyntaxHighlighter language="python" style={vs}>
                {`
    def mergeSort(arr):
    if len(arr) > 1:
 
         # Finding the mid of the array
        mid = len(arr)//2
 
        # Dividing the array elements
        L = arr[:mid]
 
        # Into 2 halves
        R = arr[mid:]
 
        # Sorting the first half
        mergeSort(L)
 
        # Sorting the second half
        mergeSort(R)
 
        i = j = k = 0
 
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
 
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
 
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
 
 
# Code to print the list
def printList(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()
 
 
# Driver Code
if __name__ == '__main__':
    arr = [12, 11, 13, 5, 6, 7]
    print("Given array is")
    printList(arr)
    mergeSort(arr)
    print("\nSorted array is ")
    printList(arr) 
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    import java.io.*;
 
    class MergeSort {
     
        // Merges two subarrays of arr[].
        // First subarray is arr[l..m]
        // Second subarray is arr[m+1..r]
        void merge(int arr[], int l, int m, int r)
        {
            // Find sizes of two subarrays to be merged
            int n1 = m - l + 1;
            int n2 = r - m;
     
            // Create temp arrays
            int L[] = new int[n1];
            int R[] = new int[n2];
     
            // Copy data to temp arrays
            for (int i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];
     
            // Merge the temp arrays
     
            // Initial indices of first and second subarrays
            int i = 0, j = 0;
     
            // Initial index of merged subarray array
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                }
                else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
     
            // Copy remaining elements of L[] if any
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
     
            // Copy remaining elements of R[] if any
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
     
        // Main function that sorts arr[l..r] using
        // merge()
        void sort(int arr[], int l, int r)
        {
            if (l < r) {
     
                // Find the middle point
                int m = l + (r - l) / 2;
     
                // Sort first and second halves
                sort(arr, l, m);
                sort(arr, m + 1, r);
     
                // Merge the sorted halves
                merge(arr, l, m, r);
            }
        }
     
        // A utility function to print array of size n
        static void printArray(int arr[])
        {
            int n = arr.length;
            for (int i = 0; i < n; ++i)
                System.out.print(arr[i] + " ");
            System.out.println();
        }
     
        // Driver code
        public static void main(String args[])
        {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
     
            System.out.println("Given array is");
            printArray(arr);
     
            MergeSort ob = new MergeSort();
            ob.sort(arr, 0, arr.length - 1);
     
            System.out.println("\nSorted array is");
            printArray(arr);
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
                <VisualizeHeader routePath='/algorithms/search/merge-sort' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Merge Sort Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8 pl-20 pr-15"  >
            <br />
            <span className="mr-8"></span><b>Merge sort</b> is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
            <br /><br />
            <span className="mr-8"></span>In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.
            <br />
            <div className="flex  justify-center items-center w-full">
                <img src={MergeImage0} width={500}  alt="" />
            </div>
            <h1 className="text-[20px]"><b>How does Merge Sort work?</b></h1>
            <br />
            <span className="mr-8"></span>Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided i.e., the array has only one element left (an array with one element is always sorted). Then the sorted subarrays are merged into one sorted array.
            <br />
            See the below illustration to understand the working of merge sort.
            <br />
            <h1 className="text-[18px]"><b>Illustration:</b></h1>
            <br />
            Lets consider an array <b>arr[] = (38, 27, 43, 10)</b>
            <br />
            <ul>
                <li>Initially divide the array into two equal halves:</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={MergeImage1} width={500}  alt="" />
                </div>
                <br />
                <li>These subarrays are further divided into two halves. Now they become array of unit length that can no longer be divided and array of unit length are always sorted.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={MergeImage2} width={500}  alt="" />
                </div>
                <br />
                <li>These sorted subarrays are merged together, and we get bigger sorted subarrays.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={MergeImage3} width={500}  alt="" />
                </div>
                <br />
                <li>This merging process is continued until the sorted array is built from the smaller subarrays.</li>
                <br />
                <div className="flex  justify-center items-center w-full">
                    <img src={MergeImage4} width={500}  alt="" />
                </div>
                <br />
                <li>The above diagram shows the complete merge sort process for an example array (38, 27, 43, 10). </li>

            </ul>
            <h1 className="text-[20px]"><b>Implementation of Merge Sort</b></h1>
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
            <h1 className="text-[20px]"><b>Complexity Analysis of Merge Sort</b></h1>
            <br />
            <b>Time Complexity:</b>O(N log(N)),  Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
             <br />
            <div className="flex justify-center items-center w-full">T(n) = 2T(n/2) + θ(n)</div>
            <br />
            <span className="mr-8"></span>The above recurrence can be solved either using the Recurrence Tree method or the Master method. It falls in case II of the Master Method and the solution of the recurrence is θ(Nlog(N)). The time complexity of Merge Sort isθ(Nlog(N)) in all 3 cases (worst, average, and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.
            <br /><br />
            <b>Auxiliary Space:</b>O(N), In merge sort all elements are copied into an auxiliary array. So N auxiliary space is required for merge sort.
            <br /><br /><br />
            <h1 className="text-[20px]"><b>Applications of Merge Sort:</b></h1>
            <br />
            <ul>
                <li><b>Sorting large datasets:</b> Merge sort is particularly well-suited for sorting large datasets due to its guaranteed worst-case time complexity of O(n log n).</li>
                <li><b>External sorting:</b> Merge sort is commonly used in external sorting, where the data to be sorted is too large to fit into memory.</li>
                <li><b>Custom sorting:</b>Merge sort can be adapted to handle different input distributions, such as partially sorted, nearly sorted, or completely unsorted data.</li>
            
            </ul>
            <br /><br />
            <h1 className="text-[20px]"><b>Advantages of Merge Sort:</b></h1>
            <br />
            <ul>
                <li><b>Stability:</b>Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.</li>
                <li><b>Guaranteed worst-case performance:</b>Merge sort has a worst-case time complexity of O(N logN), which means it performs well even on large datasets.</li>
                <li><b>Parallelizable:</b>Merge sort is a naturally parallelizable algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads.</li>
            </ul>
            <br /><br />
            <h1 className="text-[20px]"><b>Drawbacks of Merge Sort:</b></h1>
            <br />
            <ul>
                <li><b>Space complexity:</b>Merge sort requires additional memory to store the merged sub-arrays during the sorting process. </li>
                <li><b>Not in-place:</b>Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.</li>
                <li><b>Not always optimal for small datasets:</b>For small datasets, Merge sort has a higher time complexity than some other sorting algorithms, such as insertion sort. This can result in slower performance for very small datasets.</li>
            
            </ul>
            </div>
        </div>
    )
} 