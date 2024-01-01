import React, { useState } from "react";
import "../../index.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HeadLine from '../../Components/HeadLine';
import VisualizeHeader from '../../Components/VisualizeHeader';
import LinearImage0 from '../../TutorialImages/LinearSearch0.png';
import LinearImage1 from '../../TutorialImages/LinearSearch1.jpg'
import LinearImage2 from '../../TutorialImages/LinearSearch2.jpg'
import LinearImage3 from '../../TutorialImages/LinearSearch3.jpg'



export default function LinearSearchTutorial() {
    const [selectedLanguage, setSelectedLanguage] = useState("C");

    const languageText = {
        "C": (
            <SyntaxHighlighter language="c" style={vs}>
                {`
    #include <stdio.h>
    int search(int arr[], int N, int x) {
        for (int i = 0; i < N; i++)
            if (arr[i] == x)
                return i;
        return -1;
    }

    int main(void) {
        int arr[] = {2, 3, 4, 10, 40};
        int x = 10;
        int N = sizeof(arr) / sizeof(arr[0]);

        int result = search(arr, N, x);
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
    #include <bits/stdc++.h> 
    using namespace std; 

    int search(int arr[], int N, int x) { 
        for (int i = 0; i < N; i++) 
            if (arr[i] == x) 
                return i; 
        return -1; 
    } 

    // Driver code 
    int main(void) { 
        int arr[] = { 2, 3, 4, 10, 40 }; 
        int x = 10; 
        int N = sizeof(arr) / sizeof(arr[0]); 

        // Function call 
        int result = search(arr, N, x); 
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
    def search(arr, N, x): 

        for i in range(0, N): 
            if (arr[i] == x): 
                return i 
        return -1

    # Driver Code 
    if __name__ == "__main__": 
        arr = [2, 3, 4, 10, 40] 
        x = 10
        N = len(arr) 

        # Function call 
        result = search(arr, N, x) 
        if(result == -1): 
            print("Element is not present in array") 
        else: 
            print("Element is present at index", result) 
                `}
            </SyntaxHighlighter>
        ),
        "Java": (
            <SyntaxHighlighter language="java" style={vs}>
                {`
    import java.io.*;
    
    class BinarySearch {
        
        // Returns index of x if it is present in arr[].
        int binarySearch(int arr[], int x)
        {
            int l = 0, r = arr.length - 1;
            while (l <= r) {
                int m = l + (r - l) / 2;
            
                // Check if x is present at mid
                if (arr[m] == x)
                    return m;
            
                // If x greater, ignore left half
                if (arr[m] < x)
                    l = m + 1;
            
                // If x is smaller, ignore right half
                else
                    r = m - 1;
            }
            
            // If we reach here, then element was
            // not present
            return -1;
        }
        
        // Driver code
        public static void main(String args[])
        {
            BinarySearch ob = new BinarySearch();
            int arr[] = { 2, 3, 4, 10, 40 };
            int n = arr.length;
            int x = 10;
            int result = ob.binarySearch(arr, x);
            if (result == -1)
                System.out.println(
                    "Element is not present in array");
            else
                System.out.println("Element is present at "
                                    + "index " + result);
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
                <h1 className="card-heading text-[3rem]" >Linear Search Tutorial</h1>
            </div>
            <div className="bg-white text-black max-w-[800px] m-auto mt-10 p-8"  >
                <p><br /><br />
                    <span className="mr-8"></span><b>Linear Search</b> is defined as
                    a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.    
                </p><br />
                    
                <div className="flex flex-col justify-center items-center">
                    <img src={LinearImage0}  alt="" />
                </div>
                <p>
                    <br /><br />
                    <h1 className="text-[20px]"><b>How Does Linear Search Algorithm Work?</b><br /></h1><br />
                    <span className="mr-8"></span>In Linear Search Algorithm, 

    Every element is considered as a potential match for the key and checked for the same.
    If any element is found equal to the key, the search is successful and the index of that element is returned.
    If no element is found equal to the key, the search yields “No match found”.
    <br /><br />
    For example: Consider the array arr[] = (10, 50, 30, 70, 80, 20, 90, 40) and key = 30
        <br /><br />
    Step 1: Start from the first element (index 0) and compare key with each element (arr[i]).

    Comparing key with first element arr[0]. SInce not equal, the iterator moves to the next element as a potential match.
                    <br /><br />
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src={LinearImage1}  alt="" />
                </div>
                <br /><br />
                <p>
                <span className="mr-8"></span>Comparing key with next element arr[1]. SInce not equal, the iterator moves to the next element as a potential match.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <img src={LinearImage2}  alt="" />
                </div>
                <br /><br />
                <p>
                Step 2: Now when comparing arr[2] with key, the value matches. So the Linear Search Algorithm will yield a successful message and return the index of the element when key is found (here 2).
                </p>
                <br /><br />
                <div className="flex flex-col justify-center items-center">
                    <img src={LinearImage3}  alt="" />
                </div>
                <br /><br />
                <b><h1 className="text-[20px]">Implementation of Linear Search Algorithm:</h1></b>
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
                    <h1 className="text-[20px]"><b>Complexity Analysis of Linear Search: </b></h1>
                    <br /><br />
                    <b><h1 className="text-[18px]">Time Complexity:</h1></b>
                    <br />
                    <ul>
                    <li><b>Best Case:</b> In the best case, the key might be present at the first index. So the best case complexity is O(1)</li>
                    
                    <li><b>Worst Case:</b> In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.</li>
                    
                    <li><b>Average Case:</b> O(N)</li>
                    <br /><br />
                    </ul>
                    <b><h1 className="text-[18px]">Space Complexity:</h1></b>
                    <br />
                    <b>Auxiliary Space:</b> O(1) as except for the variable to iterate through the list, no other variable is used. 
                    <br /><br />
                    <h1 className="text-[20px]"><b>Advantages of Linear Search:</b></h1>
                    <br />
                    
                    <ul>
                        <li>Linear search can be used irrespective of whether the array is sorted or not. It can be used on arrays of any data type.</li>
                        <li>Does not require any additional memory.</li>
                        <li>It is a well-suited algorithm for small datasets.</li>
                    </ul><br /><br />
                    <h1 className="text-[20px]"><b>Drawbacks of Linear Search:</b></h1>
                    
                    <ul>
                        <li>Linear search has a time complexity of O(N), which in turn makes it slow for large datasets.</li>
                        <li>Not suitable for large arrays.</li>
                        <li>When to use Linear Search?</li>
                        <li>When we are dealing with a small dataset.</li>
                        <li>When you are searching for a dataset stored in contiguous memory.</li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
    }