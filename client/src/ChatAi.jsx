// // import React, { useState, useContext, useEffect } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import axios from 'axios';
// // import HeadLine from './Components/HeadLine';
// // import { toast } from 'react-toastify';





// // export default function ChatAi() {
// //   const [msg, setMsg] = useState('');
// //   const navigate = useNavigate();
// //   const [chats,setChats] = useState([]);
// //   async function logError(errorMsg) {
// //     const errorLog = {
// //       error: errorMsg,
// //       time: new Date().toISOString(),
// //     };

// //     try {
// //       const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];
// //       storedErrors.push(errorLog);
// //       localStorage.setItem('errorLogs', JSON.stringify(storedErrors));
// //       console.error(`Error logged: ${errorLog.time}`);
// //     } catch (error) {
// //       console.error(`Error logging to localStorage: ${error.message}`);
// //     }
// //   }

// //   async function inputHandler(ev) {
// //     ev.preventDefault();

// //     try {
// //       const response = await axios.post('/chatai', { msg });
// //       console.log(response.data);
      
// //       const { algorithmName, datatype, data, target } = response.data?response.data.parsedResponse:null;

// //       const chatLink = generateLink(algorithmName, datatype, data, target);

// //       const count_resp = await axios.post("/countAlg",{algorithmName})

// //       console.log(count_resp);

// //       console.log('Get link'+chatLink);

// //       const resp = await axios.post('/UploadChatAi',{chatLink , msg}); 

// //       navigate(generateLink(algorithmName, datatype, data, target));
// //     } catch (error) {
// //       console.error(error);
// //       logError(error.message);
// //       //add it to error file(Error.txt with timestamp)
// //       //create a txt file if it doesnt exist
// //     }
// //   }


// //   useEffect( () => {

// //     async function getChat(){
// //       const resp = await axios.post('/getChats');
// //       console.log(resp.data.chats);
// //       setChats(resp.data.chats);
// //     }
    
// //     getChat();

// //   },[]);

// //   const generateLink = (algorithmName, datatype, data, target) => {
// //     if (algorithmName.toLowerCase() === 'linear search') {
// //       return `/algorithms/search/linear-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
// //     }

// //     else if (algorithmName.toLowerCase() === 'binary search') {
// //       return `/algorithms/search/binary-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'bubble sort') {
// //       return `/algorithms/sort/bubble-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'selection sort') {
// //       return `/algorithms/sort/selection-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'insertion sort') {
// //       return `/algorithms/sort/insertion sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'quick sort') {
// //       return `/algorithms/sort/quick-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'merge sort') {
// //       return `/algorithms/sort/merge-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'page replacement algorithm') {
// //       return `/operatingsystem/page-replacement?algorithmName=${algorithmName}&data=${data}&size=${target}`;
// //     }
// //     else if (algorithmName.toLowerCase() === 'heap sort') {
// //       return `/algorithms/sort/heap-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
// //     }
// //     else{
// //       toast("Enter Valid Message || Given algorithm is not yet implemented");
// //     }
// //   };

// //   return (
// //     <div className='flex flex-col justify-center items-center m-auto max-w-[1200px] mt-[-60px] space-x-6 space-y-10'> 
      
      

// //       <div className='items-center justify-center'>
// //         <div className='flex items-center justify-center w-full m-3'>
// //             <HeadLine content={"Welcome to ChatAI"}></HeadLine>
// //         </div>
// //         <div className='w-[90%] flex items-center justify-center h-[100px]'>
// //           <div className='flex items-center justify-between w-[95%] space-x-16'>
// //             <Link className='flex min-w-[40%]' to={'/algorithms/sort/insertion-sort'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Sort a Nearly Sorted Array</button></Link>
// //             <Link className='flex min-w-[40%]' to={'/operatingSystem/page-replacement'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Visualize Page Replacement</button></Link>
// //           </div>
// //         </div>
// //         <div className='w-[90%] flex items-center justify-center h-[100px]'>
// //           <div className='flex items-center justify-between w-[95%] space-x-16'>
// //             <Link className='flex min-w-[40%]' to={'/dataStructure/stack'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Implement LIFO Structure</button></Link>
// //             <Link className='flex min-w-[40%]' to={'/algorithms/search/binary-search'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Search in a Sorted Array</button></Link>
// //           </div>
// //         </div>
// //         <div className='flex items-center space-y-6 w-full mt-[20px]'>
// //           <form className="flex min-w-full mx-auto justify-around" onSubmit={inputHandler}>
// //             <textarea
// //               type="text"
// //               placeholder='Enter the text'
// //               value={msg}
// //               rows={5}
// //               onChange={(event) => setMsg(event.target.value)}
// //               className='flex max-h-[80px] items-stretch bg-input-home p-4 w-[90%]'
// //             />
// //             <div className='flex max-h-[80px] w-[8%] space-x-2 items-center mt-[10px]'>
// //             <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Go</button>
// //               <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
// //                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
// //                 </svg>
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       <div className='flex items-center justify-center w-full'>
// //           <h1>Chat History</h1>
// //       </div>
// //       <div className='border p-2 rounded-md min-h-[400px] bg-glass'>
// //         {

// //           chats.map((value,index)=>(
// //             <div className='border m-3 cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:card-heading p-2 rounded-md hover:history-heading'>
// //               <div className='' onClick={()=>{navigate(`${value.link}`)}} >{value.text}</div>
// //             </div>
// //           ))
// //         }
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import HeadLine from './Components/HeadLine';
// import { toast } from 'react-toastify';





// export default function ChatAi() {
//   const [msg, setMsg] = useState('');
//   const navigate = useNavigate();
//   const [chats,setChats] = useState([]);
//   const [storedErrors, setStoredErrors] = useState([]);
//   const [showLogs, setShowLogs] = useState(false);

//   async function logError(errorMsg) {
//     const errorLog = {
//       error: errorMsg,
//        time: new Date().toISOString(),
//     };

//     try {
//       const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];
//       storedErrors.push(errorLog);
//       localStorage.setItem('errorLogs', JSON.stringify(storedErrors));
//       console.error(`Error logged: ${errorLog.time}`);
//     } catch (error) {
//       console.error(`Error logging to localStorage: ${error.message}`);
//     }
//   }

//   async function inputHandler(ev) {
//     ev.preventDefault();

//     try {
//       const response = await axios.post('/chatai', { msg });
//       console.log(response.data);
      
//       const { algorithmName, datatype, data, target } = response.data?response.data.parsedResponse:null;

//       const chatLink = generateLink(algorithmName, datatype, data, target);

//       const count_resp = await axios.post("/countAlg",{algorithmName})

//       console.log(count_resp);

//       console.log('Get link'+chatLink);

//       const resp = await axios.post('/UploadChatAi',{chatLink , msg}); 

//       navigate(generateLink(algorithmName, datatype, data, target));
//     } catch (error) {
//       console.error(error);
//       logError(msg);
//       //add it to error file(Error.txt with timestamp)
//       //create a txt file if it doesnt exist
//     }
//   }


//   useEffect( () => {

//     async function getChat(){
//       const resp = await axios.post('/getChats');
//       console.log(resp.data.chats);
//       setChats(resp.data.chats);
//     }
    
//     getChat();
//     const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];
//     setStoredErrors(storedErrors);

//   },[]);

//   const toggleLogs = () => {
//     setShowLogs(!showLogs);
//   };

  // const generateLink = (algorithmName, datatype, data, target) => {
  //   if (algorithmName.toLowerCase() === 'linear search') {
  //     return `/algorithms/search/linear-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
  //   }

  //   else if (algorithmName.toLowerCase() === 'binary search') {
  //     return `/algorithms/search/binary-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'bubble sort') {
  //     return `/algorithms/sort/bubble-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'selection sort') {
  //     return `/algorithms/sort/selection-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'insertion sort') {
  //     return `/algorithms/sort/insertion sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'quick sort') {
  //     return `/algorithms/sort/quick-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'merge sort') {
  //     return `/algorithms/sort/merge-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'page replacement algorithm') {
  //     return `/operatingsystem/page-replacement?algorithmName=${algorithmName}&data=${data}&size=${target}`;
  //   }
  //   else if (algorithmName.toLowerCase() === 'heap sort') {
  //     return `/algorithms/sort/heap-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
  //   }
  //   else{
  //     toast("Enter Valid Message || Given algorithm is not yet implemented");
  //   }
  // };

//   return (
//     <div className='flex flex-col justify-center items-center m-auto max-w-[1200px] mt-[-60px] space-x-6 space-y-10'> 
//      <div className='flex justify-between items-center w-full'>
//         <button className='mr-4' onClick={toggleLogs}>Show Logs</button>
//         {showLogs && (
//           <ul>
//             {storedErrors.map((error, index) => (
//               <li key={index}>
//                 <strong>{error.time}:</strong> {error.error}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
      
      

//       <div className='items-center justify-center'>
//         <div className='flex items-center justify-center w-full m-3'>
//             <HeadLine content={"Welcome to ChatAI"}></HeadLine>
//         </div>
//         <div className='w-[90%] flex items-center justify-center h-[100px]'>
//           <div className='flex items-center justify-between w-[95%] space-x-16'>
//             <Link className='flex min-w-[40%]' to={'/algorithms/sort/insertion-sort'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Sort a Nearly Sorted Array</button></Link>
//             <Link className='flex min-w-[40%]' to={'/operatingSystem/page-replacement'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Visualize Page Replacement</button></Link>
//           </div>
//         </div>
//         <div className='w-[90%] flex items-center justify-center h-[100px]'>
//           <div className='flex items-center justify-between w-[95%] space-x-16'>
//             <Link className='flex min-w-[40%]' to={'/dataStructure/stack'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Implement LIFO Structure</button></Link>
//             <Link className='flex min-w-[40%]' to={'/algorithms/search/binary-search'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Search in a Sorted Array</button></Link>
//           </div>
//         </div>
//         <div className='flex items-center space-y-6 w-full mt-[20px]'>
//           <form className="flex min-w-full mx-auto justify-around" onSubmit={inputHandler}>
//             <textarea
//               type="text"
//               placeholder='Enter the text'
//               value={msg}
//               rows={5}
//               onChange={(event) => setMsg(event.target.value)}
//               className='flex max-h-[80px] items-stretch bg-input-home p-4 w-[90%]'
//             />
//             <div className='flex max-h-[80px] w-[8%] space-x-2 items-center mt-[10px]'>
//             <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Go</button>
//               <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
//                 </svg>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className='flex items-center justify-center w-full'>
//           <h1>Chat History</h1>
//       </div>
//       <div className='border p-2 rounded-md min-h-[400px] bg-glass'>
//         {

//           chats.map((value,index)=>(
//             <div className='border m-3 cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:card-heading p-2 rounded-md hover:history-heading'>
//               <div className='' onClick={()=>{navigate(`${value.link}`)}} >{value.text}</div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import HeadLine from './Components/HeadLine';
import { toast } from 'react-toastify';

export default function ChatAi() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [storedErrors, setStoredErrors] = useState([]);
  const [showLogs, setShowLogs] = useState(false);

  async function logError(errorMsg) {
    const errorLog = {
      error: errorMsg,
      time: new Date().toISOString(),
    };

    try {
      const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];
      storedErrors.push(errorLog);
      localStorage.setItem('errorLogs', JSON.stringify(storedErrors));
      console.error(`Error logged: ${errorLog.time}`);
    } catch (error) {
      console.error(`Error logging to localStorage: ${error.message}`);
    }
  }

  async function inputHandler(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post('/chatai', { msg });
      console.log(response.data);

      const { algorithmName, datatype, data, target } = response.data ? response.data.parsedResponse : null;

      const chatLink = generateLink(algorithmName, datatype, data, target);

      const count_resp = await axios.post("/countAlg", { algorithmName });

      console.log(count_resp);

      console.log('Get link' + chatLink);

      const resp = await axios.post('/UploadChatAi', { chatLink, msg });

      navigate(generateLink(algorithmName, datatype, data, target));
    } catch (error) {
      console.error(error);
      logError(msg);
    }
  }

  useEffect(() => {
    async function getChat() {
      const resp = await axios.post('/getChats');
      console.log(resp.data.chats);
      setChats(resp.data.chats);
    }

    getChat();
    const storedErrors = JSON.parse(localStorage.getItem('errorLogs')) || [];
    setStoredErrors(storedErrors);
  }, []);

  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  const generateLink = (algorithmName, datatype, data, target) => {
    if (algorithmName.toLowerCase() === 'linear search') {
      return `/algorithms/search/linear-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
    }

    else if (algorithmName.toLowerCase() === 'binary search') {
      return `/algorithms/search/binary-search?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}&target=${target}`;
    }
    else if (algorithmName.toLowerCase() === 'bubble sort') {
      return `/algorithms/sort/bubble-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else if (algorithmName.toLowerCase() === 'selection sort') {
      return `/algorithms/sort/selection-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else if (algorithmName.toLowerCase() === 'insertion sort') {
      return `/algorithms/sort/insertion sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else if (algorithmName.toLowerCase() === 'quick sort') {
      return `/algorithms/sort/quick-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else if (algorithmName.toLowerCase() === 'merge sort') {
      return `/algorithms/sort/merge-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else if (algorithmName.toLowerCase() === 'page replacement algorithm') {
      return `/operatingsystem/page-replacement?algorithmName=${algorithmName}&data=${data}&size=${target}`;
    }
    else if (algorithmName.toLowerCase() === 'heap sort') {
      return `/algorithms/sort/heap-sort?algorithmName=${algorithmName}&data=${data}&datatype=${datatype}`;
    }
    else{
      toast("Enter Valid Message || Given algorithm is not yet implemented");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px] mt-[-60px] space-x-6 space-y-10'>
      <div className='flex justify-between items-center w-full'>
        {/* <h2 className="mr-4">Stored Errors</h2> */}
        <button className='mr-4' onClick={toggleLogs}>Show Logs</button>
      {showLogs && (
        <ul>
          {storedErrors.map((error, index) => (
            <li key={index}>
              <strong>{error.time}:</strong> {error.error}
            </li>
          ))}
        </ul>
      )}
      </div>
      
      <div className='items-center justify-center'>
        <div className='flex items-center justify-center w-full m-3'>
            <HeadLine content={"Welcome to ChatAI"}></HeadLine>
        </div>
        <div className='w-[90%] flex items-center justify-center h-[100px]'>
          <div className='flex items-center justify-between w-[95%] space-x-16'>
            <Link className='flex min-w-[40%]' to={'/algorithms/sort/insertion-sort'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Sort a Nearly Sorted Array</button></Link>
            <Link className='flex min-w-[40%]' to={'/operatingSystem/page-replacement'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Visualize Page Replacement</button></Link>
          </div>
        </div>
        <div className='w-[90%] flex items-center justify-center h-[100px]'>
          <div className='flex items-center justify-between w-[95%] space-x-16'>
            <Link className='flex min-w-[40%]' to={'/dataStructure/stack'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Implement LIFO Structure</button></Link>
            <Link className='flex min-w-[40%]' to={'/algorithms/search/binary-search'}><button className='flex min-w-full min-h-[80px] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Search in a Sorted Array</button></Link>
          </div>
        </div>
        <div className='flex items-center space-y-6 w-full mt-[20px]'>
          <form className="flex min-w-full mx-auto justify-around" onSubmit={inputHandler}>
            <textarea
              type="text"
              placeholder='Enter the text'
              value={msg}
              rows={5}
              onChange={(event) => setMsg(event.target.value)}
              className='flex max-h-[80px] items-stretch bg-input-home p-4 w-[90%]'
            />
            <div className='flex max-h-[80px] w-[8%] space-x-2 items-center mt-[10px]'>
            <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'>Go</button>
              <button className='flex max-h-[40px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-input  hover:scale-110 hover:card-heading hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] bg-blue-500 text-white py-2 px-4 rounded'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center w-full'>
          <h1>Chat History</h1>
      </div>
      <div className='border p-2 rounded-md min-h-[400px] bg-glass'>
        {

          chats.map((value,index)=>(
            <div className='border m-3 cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:card-heading p-2 rounded-md hover:history-heading'>
              <div className='' onClick={()=>{navigate(`${value.link}`)}} >{value.text}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}


