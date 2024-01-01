import React, { useState } from "react";
import "../../index.css";
import HeadLine from '../../Components/HeadLine';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import VisualizeHeader from '../../Components/VisualizeHeader';
import BinaryImage0 from '../../TutorialImages/BinaryImage0.jpg';
import BinaryImage1 from '../../TutorialImages/BinaryImage1.jpg'
import BinaryImage2 from '../../TutorialImages/BinaryImage2.jpg'
import BinaryImage3 from '../../TutorialImages/BinaryImage3.jpg'
import BinaryImage4 from '../../TutorialImages/BinaryImage4.jpg'


export default function BinarySearchTutorial() {
    
    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdio.h>
 
    // A recursive binary search function. It returns
    // location of x in given array arr[l..r] is present,
    // otherwise -1
    int binarySearch(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;
     
            // If the element is present at the middle
            // itself
            if (arr[mid] == x)
                return mid;
     
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
     
            // Else the element can only be present
            // in right subarray
            return binarySearch(arr, mid + 1, r, x);
        }
     
        // We reach here when element is not
        // present in array
        return -1;
    }
     
    // Driver code
    int main()
    {
        int arr[] = { 2, 3, 4, 10, 40 };
        int n = sizeof(arr) / sizeof(arr[0]);
        int x = 10;
        int result = binarySearch(arr, 0, n - 1, x);
        (result == -1)
            ? printf("Element is not present in array")
            : printf("Element is present at index %d", result);
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "C++": (
            <SyntaxHighlighter language="cpp" style={vs}>
                {`
    using namespace std;
 
    // A recursive binary search function. It returns
    // location of x in given array arr[l..r] is present,
    // otherwise -1
    int binarySearch(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;
     
            // If the element is present at the middle
            // itself
            if (arr[mid] == x)
                return mid;
     
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
     
            // Else the element can only be present
            // in right subarray
            return binarySearch(arr, mid + 1, r, x);
        }
     
        // We reach here when element is not
        // present in array
        return -1;
    }
     
    // Driver code
    int main()
    {
        int arr[] = { 2, 3, 4, 10, 40 };
        int x = 10;
        int n = sizeof(arr) / sizeof(arr[0]);
        int result = binarySearch(arr, 0, n - 1, x);
        (result == -1)
            ? cout << "Element is not present in array"
            : cout << "Element is present at index " << result;
        return 0;
    }
                `}
            </SyntaxHighlighter>
        ),
        "Python": (
            <SyntaxHighlighter language="python" style={vs}>
                {`
    def binarySearch(arr, l, r, x):
 
    # Check base case
    if r >= l:
 
        mid = l + (r - l) // 2
 
        # If element is present at the middle itself
        if arr[mid] == x:
            return mid
 
        # If element is smaller than mid, then it
        # can only be present in left subarray
        elif arr[mid] > x:
            return binarySearch(arr, l, mid-1, x)
 
        # Else the element can only be present
        # in right subarray
        else:
            return binarySearch(arr, mid + 1, r, x)
 
    # Element is not present in the array
    else:
        return -1
 
 
    # Driver Code
    if __name__ == '__main__':
        arr = [2, 3, 4, 10, 40]
        x = 10
        
        # Function call
        result = binarySearch(arr, 0, len(arr)-1, x)
        
        if result != -1:
            print("Element is present at index", result)
        else:
            print("Element is not present in array")
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    class BinarySearch {
 
        // Returns index of x if it is present in arr[l..
        // r], else return -1
        int binarySearch(int arr[], int l, int r, int x)
        {
            if (r >= l) {
                int mid = l + (r - l) / 2;
     
                // If the element is present at the
                // middle itself
                if (arr[mid] == x)
                    return mid;
     
                // If element is smaller than mid, then
                // it can only be present in left subarray
                if (arr[mid] > x)
                    return binarySearch(arr, l, mid - 1, x);
     
                // Else the element can only be present
                // in right subarray
                return binarySearch(arr, mid + 1, r, x);
            }
     
            // We reach here when element is not present
            // in array
            return -1;
        }
     
        // Driver code
        public static void main(String args[])
        {
            BinarySearch ob = new BinarySearch();
            int arr[] = { 2, 3, 4, 10, 40 };
            int n = arr.length;
            int x = 10;
            int result = ob.binarySearch(arr, 0, n - 1, x);
            if (result == -1)
                System.out.println(
                    "Element is not present in array");
            else
                System.out.println(
                    "Element is present at index " + result);
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
                <VisualizeHeader routePath='/algorithms/search/binary-search' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                {/* <HeadLine content='Linear Search Tutorial'/> */}
                <h1 className="card-heading text-[3rem]" >Binary Search Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8"  >
                
                    <br /><br />
                    <span className="mr-8"></span><b>Binary Search</b> is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).
                    <br /><br />
                    <div className="flex flex-col justify-center items-center">
                    <img src={BinaryImage0} width={700} alt="" />
                    </div>
                    <br /><br />
                    <p>
                    <h1 className="text-[20px]"><b>Conditions for when to apply Binary Search in a Data Structure:</b></h1> <br />
                    
                    <ul>
                        <li>The data structure must be sorted. </li>
                        <li>Access to any element of the data structure takes constant time.</li>
                    </ul>
                    <br /><br />
                    <h1 className="text-[20px]"><b>Binary Search Algorithm:</b></h1><br /><br />
                    In this algorithm, 
                    <br />
                    Divide the search space into two halves by finding the middle index “mid”. 

                    </p>
                    <div className="flex  justify-center items-center w-full">
                    <img src={BinaryImage1} width={500}  alt="" />
                    </div>
                    <p>
                        <ul>
                        <li>Compare the middle element of the search space with the key. </li>
                        <li>If the key is found at middle element, the process is terminated.</li>
                        <li>If the key is not found at middle element, choose which half will be used as the next search space.</li>
                        <li>If the key is smaller than the middle element, then the left side is used for next search.</li>
                        <li>If the key is larger than the middle element, then the right side is used for next search.</li>
                        <li>This process is continued until the key is found or the total search space is exhausted.</li>
                        </ul>
                    </p>
                    <br /><br />
                    <p>
                    <h1 className="text-[20px]">How does Binary Search work?</h1><br />
                        To understand the working of binary search, consider the following illustration: <br /><br />

                        Consider an array arr[] = (2, 5, 8, 12, 16, 23, 38, 56, 72, 91), and the target = 23.
                        <br /><br />
                        First Step: Calculate the mid and compare the mid element with the key. If the key is less than mid element, move to left and if it is greater than the mid then move search space to the right.
                        
                        Key (i.e., 23) is greater than current mid element (i.e., 16). The search space moves to the right.

                    </p>
                    <br /><br />
                    <div className="flex  justify-center items-center w-full">
                    <img src={BinaryImage2} width={500}  alt="" />
                    </div>
                    <br /><br />
                    <p>
                    Key is less than the current mid 56. The search space moves to the left.
                    </p>
                    <br /><br />
                    <div className="flex  justify-center items-center w-full">
                        <img src={BinaryImage3} width={500}  alt="" />
                    </div>
                    <br /><br />
                    <p>
                    Second Step: If the key matches the value of the mid element, the element is found and stop search.
                    </p>
                    <br /><br />
                    <div className="flex  justify-center items-center w-full">
                        <img src={BinaryImage4} width={500} alt="" />
                    </div>
                    <p>
                    How to Implement Binary Search?<br />
                    The Binary Search Algorithm can be implemented in the following two ways: <br />
                    <ul>
                    <li>Iterative Binary Search Algorithm</li>
                    <li>Recursive Binary Search Algorithm</li>
                    </ul>
                    <br />
                    Given below are the pseudocodes for the approaches.
                    </p>
                
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
                <p>
                <h1 className="text-[20px]"><b>Complexity Analysis of Binary Search: </b></h1><br />
                <h1 className="text-[18px]"><b>Time Complexity:</b></h1> <br />
                <ul>
                <li><b>Best Case:</b> O(1)</li>
                <li><b>Average Case:</b> O(log N)</li>
                <li><b>Worst Case:</b> O(log N)</li>
                </ul>
                <br /><br />
                <h1 className="text-[18px]"><b>Space Complexity:</b></h1> <br />
                <b>Auxiliary Space:</b> O(1), If the recursive call stack is considered then the auxiliary space will be O(logN). <br /><br />
                <h1 className="text-[20px]"><b>Advantages of Binary Search: </b></h1>
                <br />
                <ul>
                <li>Binary search is faster than linear search, especially for large arrays.</li>
                <li>More efficient than other searching algorithms with a similar time complexity, such as interpolation search or exponential search.</li>
                <li>Binary search is well-suited for searching large datasets that are stored in external memory, such as on a hard drive or in the cloud.</li>
                </ul>
                <br />
                <h1 className="text-[20px]"><b>Drawbacks of Binary Search:</b></h1>
                <ul>
                <li>The array should be sorted.</li>
                <li>Binary search requires that the data structure being searched be stored in contiguous memory locations. </li>
                <li>Binary search requires that the elements of the array be comparable, meaning that they must be able to be ordered.</li>
                </ul>
                <br />
                <h1 className="text-[20px]"><b>Applications of Binary Search:</b></h1>
                <ul>
                <li>Binary search can be used as a building block for more complex algorithms used in machine learning, such as algorithms for training neural networks or finding the optimal hyperparameters for a model.</li>
                <li>It can be used for searching in computer graphics such as algorithms for ray tracing or texture mapping.</li>
                <li>It can be used for searching a database.</li>
                </ul>
                </p>
            </div>
            
            
            
        </div>
    )
    }