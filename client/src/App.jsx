
import './App.css';
import { Route,Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import LinearSearch from './Pages/FrontPages/Algorithm/Searches/LinearSearch.jsx';
import BinarySearch from './Pages/FrontPages/Algorithm/Searches/BinarySearch.jsx';
import Home from './Pages/Home.jsx';
import { Algorithm } from './Pages/FrontPages/Algorithm/Algorithm.jsx';
import DataStructure from './Pages/FrontPages/DataStructure/DataStructure.jsx';
import BubbleSort from './Pages/FrontPages/Algorithm/Sorting/BubbleSort.jsx';
import SelectionSort from './Pages/FrontPages/Algorithm/Sorting/SelectionSort.jsx';
import SearchPage from './Pages/FrontPages/Algorithm/Searches/SearchPage.jsx';
import SortPage from './Pages/FrontPages/Algorithm/Sorting/SortPage.jsx';
import { UserContextProvider } from './UserContext.jsx';
import ProfilePage from "./Pages/ProfilePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Usage from './Usage.jsx';
import axios from "axios";
import ChatAi from "./ChatAi.jsx";
import MergeSort from './Pages/FrontPages/Algorithm/Sorting/MergeSort.jsx';
import QuickSort from './Pages/FrontPages/Algorithm/Sorting/QuickSort.jsx';
import LinearSearchTutorial from "./Pages/Tutorials/LinearSearchTutorial.jsx"
import BinarySearchTutorial from "./Pages/Tutorials/BinarySearchTutorial.jsx"
import BubbleSortTutorial from "./Pages/Tutorials/BubbleSortTutorial.jsx"
import SelectionSortTutorial from "./Pages/Tutorials/SelectionSortTutorial.jsx"
import MergeSortTutorial from "./Pages/Tutorials/MergeSortTutorial.jsx"
import QuickSortTutorial from './Pages/Tutorials/QuickSortTutorial.jsx';
import LinearSearchProblems from './Pages/Problems/LinearSearchProblems.jsx';
import BinarySearchProblems from './Pages/Problems/BinarySearchProblems.jsx';
import BubbleSortProblems from './Pages/Problems/BubbleSortProblems.jsx';
import SelectionSortProblems from './Pages/Problems/SelectionSortProblems.jsx';
import QuickSortProblems from './Pages/Problems/QuickSortProblems.jsx';
import MergeSortProblems from './Pages/Problems/MergeSortProblems.jsx';
import LinkedList from './Pages/FrontPages/DataStructure/LinkedList/LinkedList.jsx';
import StackData from './Pages/FrontPages/DataStructure/StackData/StackData.jsx';
import QueueData from './Pages/FrontPages/DataStructure/QueueData/QueueData.jsx';
import PageReplacement from './Pages/FrontPages/OperatingSystem/PageReplacement.jsx/PageReplacement.jsx';
import OperatingSystem from './Pages/FrontPages/OperatingSystem/OperatingSystem.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeapSort from './Pages/FrontPages/Algorithm/Sorting/HeapSort.jsx';
// import Array from './Pages/FrontPages/DataStructure/Array.jsx';
// import ArrayProblems from './Pages/Problems/ArrayProblems.jsx';
//import LinkedList from './Pages/FrontPages/DataStructure/LinkedList.jsx';
import LinkedListProblems from './Pages/Problems/LinkedListProblems.jsx';
//import Stack from './Pages/FrontPages/DataStructure/Stack.jsx';
import StackProblems from './Pages/Problems/StackProblems.jsx';
//import Queue from './Pages/FrontPages/DataStructure/Queue.jsx';
//import HeapSort from './Pages/FrontPages/Algorithm/Sorting/HeapSort.jsx';
import HeapSortTutorial from './Pages/Tutorials/HeapSortTutorial.jsx';
import ArraysTutorial from './Pages/Tutorials/ArraysTutorial.jsx';
import LinkedListTutorial from './Pages/Tutorials/LinkedListTutorial.jsx';
import StackTutorial from './Pages/Tutorials/StackTutorial.jsx';
import QueueTutorial from './Pages/Tutorials/QueueTutorial.jsx';
import InsertionSort from './Pages/FrontPages/Algorithm/Sorting/InsertionSort.jsx';
import Perceptron from './Pages/FrontPages/MachineLearning/Perceptron.jsx';
import MachineLearning from './Pages/FrontPages/MachineLearning/MachineLearning.jsx';

axios.defaults.baseURL="http://127.0.0.1:5000";
axios.defaults.withCredentials= true;
axios.defaults.headers['SameSite'] = 'None';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path='/chatai' element={<ChatAi/>}/>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/usage" element={<Usage/>}/>
            <Route index element={<Home/>} />
            <Route path="/dataStructure" element={<DataStructure />} />
            <Route path="/algorithms" element={<Algorithm/>} />
            <Route path="/algorithms/search" element={<SearchPage/>} />
            <Route path="/algorithms/sort" element={<SortPage/>} />
            <Route path="/operatingSystem" element={<OperatingSystem/>}/>
          <Route path='/machineLearning' element={<MachineLearning/>}/>
            
          </Route>
          <Route path='/algorithms/search/linear-search' element={<LinearSearch/>}></Route>
          <Route path='/algorithms/sort/bubble-sort' element={<BubbleSort/>}></Route>
          <Route path='/algorithms/sort/selection-sort' element={<SelectionSort/>}></Route>
          <Route path='/algorithms/sort/quick-sort' element={<QuickSort/>}></Route>
          <Route path='/algorithms/sort/merge-sort' element={<MergeSort/>}></Route>
          <Route path='/algorithms/search/binary-search' element={<BinarySearch/>}></Route> 
          <Route path='algorithms/search/binary-search/tutorial' element={<BinarySearchTutorial/>}></Route>
          <Route path='algorithms/search/linear-search/tutorial' element={<LinearSearchTutorial/>}></Route>
          <Route path='algorithms/sort/bubble-sort/tutorial' element={<BubbleSortTutorial/>}></Route>
          <Route path='algorithms/sort/selection-sort/tutorial' element={<SelectionSortTutorial/>}></Route>
          <Route path='algorithms/sort/merge-sort/tutorial' element={<MergeSortTutorial/>}></Route>
          <Route path='algorithms/sort/quick-sort/tutorial' element={<QuickSortTutorial/>}></Route>
          <Route path='algorithms/search/linear-search/problems' element={<LinearSearchProblems/>}></Route>
          <Route path='algorithms/search/binary-search/problems' element={<BinarySearchProblems/>}></Route>
          <Route path='algorithms/sort/bubble-sort/problems' element={<BubbleSortProblems/>}></Route>
          <Route path='algorithms/sort/merge-sort/problems' element={<MergeSortProblems/>}></Route>  
          <Route path='algorithms/sort/quick-sort/problems' element={<QuickSortProblems/>}></Route>
          <Route path='algorithms/sort/selection-sort/problems' element={<SelectionSortProblems/>}></Route>
          <Route path='/dataStructure/linkedList' element={<LinkedList/>}/>
          <Route path='/dataStructure/stack' element={<StackData/>}/>
          <Route path='/dataStructure/queue' element={<QueueData/>}/>
          <Route path='/operatingSystem/page-replacement' element={<PageReplacement/>}/>
          <Route path='algorithms/sort/quick-sort' element={<QuickSort/>}></Route>
          <Route path='/algorithms/sort/merge-sort' element={<MergeSort/>}></Route>
          <Route path='/algorithms/sort/heap-sort' element={<HeapSort/>}></Route>
          {/* <Route path='dataStructure/array' element={<Array/>}></Route>
          <Route path='dataStructure/array/array-problems' element={<ArrayProblems/>}></Route> */}
          {/* <Route path='dataStructure/linked-list' element={<LinkedList/>}></Route> */}
          <Route path='dataStructure/linked-list/linked-list-problems' element={<LinkedListProblems/>}></Route>
          <Route path='dataStructure/stack/stack-problems' element={<StackProblems/>}></Route>
          {/* <Route path='dataStructure/stack' element={<Stack/>}></Route>
          <Route path='dataStructure/queue' element={<Queue/>}></Route> */}
          <Route path='algorithms/sort/heap-sort' element={<HeapSort/>}></Route>
          <Route path='algorithms/sort/heap-sort/tutorial' element={<HeapSortTutorial/>}></Route>
          <Route path='dataStructure/array/tutorial' element={<ArraysTutorial/>}></Route>
          <Route path='dataStructure/linked-list/tutorial' element={<LinkedListTutorial/>}></Route>
          <Route path='dataStructure/stack/tutorial' element={<StackTutorial/>}></Route>
          <Route path='dataStructure/queue/tutorial' element={<QueueTutorial/>}></Route>
          <Route path='algorithms/sort/insertion-sort' element={<InsertionSort/>}></Route>
          <Route path='algorithms/sort/insertion-sort' element={<InsertionSort/>}></Route>
          <Route path='machineLearning/perceptron' element={<Perceptron/>}/>
          
        </Routes> 
        </UserContextProvider>
        <ToastContainer />
    </div>
  );
}

export default App;