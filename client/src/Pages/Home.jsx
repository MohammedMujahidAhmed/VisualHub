

// // import React, { useState, useEffect } from 'react';
// // import Card from '../Components/Card';
// // import DataStructures from '../images/DATA STRUCTURES.png';
// // import Algorithms from '../images/ALGORITHMS.png';
// // import Machine_Learning from '../images/MachineLearning.png';
// // import Operating_Systems from '../images/Operating systems.png';
// // import Networking from '../images/Networking.png';
// // import { Link } from 'react-router-dom';
// // import '../index.css';
// // import HeadLine from '../Components/HeadLine';
// // import axios from 'axios';

// // export default function Home() {
// //     const Data = { type: "Data Structures", image: DataStructures, path: "/dataStructure" }
// //     const Data1 = { type: "Algorithms", image: Algorithms }
// //     const Data2 = { type: "Machine Learning", image: Machine_Learning }
// //     const Data3 = { type: "Operating Systems", image: Operating_Systems }
// //     const Data4 = { type: "Computer Networking", image: Networking }
// //     const [msg, setMsg] = useState('');
// //     const [showCards, setShowCards] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const cardsSectionTop = document.getElementById('cards-section').offsetTop;
// //             const headerHeight = 50; // Adjust this value based on your header's height
// //             const scrollY = window.scrollY || window.pageYOffset;

// //             if (scrollY >= cardsSectionTop - headerHeight - 300) {
// //                 setShowCards(true);
// //             } else {
// //                 setShowCards(false);
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll);

// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //         };
// //     }, []);

// //     return (
// //         <div className='flex flex-col justify-center items-center m-auto max-w-[1200px] mt-[-60px]'>
// //             <div className='flex flex-col items-center justify-center h-screen relative w-full' style={{
// //                 background: 'linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)',
// //                 WebkitBackgroundClip: 'text',
// //                 WebkitTextFillColor: 'transparent',
// //                 filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
// //             }}>
// //                 <HeadLine content='Welcome To Visual Hub' />
// //                 {/* <div className=' flex flex-col'> */}
// //                     <svg className='absolute left-0 bottom-[30px] z-[-10] opacity-20 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="400px" height="400px"><circle cx="36" cy="20" r="3" fill="#ab47bc"/><circle cx="36" cy="12" r="3" fill="#4a148c"/><circle cx="36" cy="36" r="3" fill="#ab47bc"/><circle cx="36" cy="28" r="3" fill="#4a148c"/><circle cx="28" cy="20" r="3" fill="#4a148c"/><circle cx="28" cy="12" r="3" fill="#ab47bc"/><circle cx="28" cy="36" r="3" fill="#4a148c"/><circle cx="28" cy="28" r="3" fill="#ab47bc"/><circle cx="20" cy="20" r="3" fill="#ab47bc"/><circle cx="20" cy="12" r="3" fill="#4a148c"/><circle cx="20" cy="36" r="3" fill="#ab47bc"/><circle cx="20" cy="28" r="3" fill="#4a148c"/><circle cx="12" cy="20" r="3" fill="#4a148c"/><circle cx="12" cy="12" r="3" fill="#ab47bc"/><circle cx="12" cy="36" r="3" fill="#4a148c"/><circle cx="12" cy="28" r="3" fill="#ab47bc"/></svg>
// //                     <svg className='absolute left-0 top-0 z-[-10] opacity-20 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="400px" height="400px"><circle cx="36" cy="20" r="3" fill="#ab47bc"/><circle cx="36" cy="12" r="3" fill="#4a148c"/><circle cx="36" cy="36" r="3" fill="#ab47bc"/><circle cx="36" cy="28" r="3" fill="#4a148c"/><circle cx="28" cy="20" r="3" fill="#4a148c"/><circle cx="28" cy="12" r="3" fill="#ab47bc"/><circle cx="28" cy="36" r="3" fill="#4a148c"/><circle cx="28" cy="28" r="3" fill="#ab47bc"/><circle cx="20" cy="20" r="3" fill="#ab47bc"/><circle cx="20" cy="12" r="3" fill="#4a148c"/><circle cx="20" cy="36" r="3" fill="#ab47bc"/><circle cx="20" cy="28" r="3" fill="#4a148c"/><circle cx="12" cy="20" r="3" fill="#4a148c"/><circle cx="12" cy="12" r="3" fill="#ab47bc"/><circle cx="12" cy="36" r="3" fill="#4a148c"/><circle cx="12" cy="28" r="3" fill="#ab47bc"/></svg>
// //                 {/* </div> */}
// //                 <div className="absolute mt-[100px] bottom-0 scroll"></div>
// //             </div>

// //             <div id="cards-section" className={`flex justify-center flex-wrap h-[600px] ${showCards ? 'cards-visible' : 'cards-hidden'}  `} style={{ background: '#7925d3', paddingTop: '80px' }}>
// //                 <Link to="/dataStructure" >
// //                     <Card Data={Data} />
// //                 </Link>
// //                 <Link to="/algorithms">
// //                     <Card Data={Data1} />
// //                 </Link>
// //                 <Link to="/algorithms">
// //                     <Card Data={Data2} />
// //                 </Link>
// //                 <Link to="/operatingsystem">
// //                     <Card Data={Data3} />
// //                 </Link>
// //                 <Link to="/algorithms">
// //                     <Card Data={Data4} />
// //                 </Link>
// //             </div>
// //             <div className='h-[50px] flex items-center justify-center w-full'>
// //                 VisualHub @2023 SIH Project
// //             </div>
// //             {/* <div className='flex justify-center flex-wrap h-[300px]' style={{ background: 'linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)' }}></div> */}
// //         </div>
// //     )
// // }



import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import DataStructures from '../images/DATA STRUCTURES.png';
import Algorithms from '../images/ALGORITHMS.png';
import Machine_Learning from '../images/MachineLearning.png';
import Operating_Systems from '../images/Operating systems.png';
import Networking from '../images/Networking.png';
import { Link } from 'react-router-dom';
import '../index.css';
import HeadLine from '../Components/HeadLine';
import axios from 'axios';
import back from '../images/back2.jpg'
import { FaAngleDoubleDown } from "react-icons/fa";


export default function Home() {
    const Data = { type: "Data Structures", image: DataStructures, path: "/dataStructure" }
    const Data1 = { type: "Algorithms", image: Algorithms }
    const Data2 = { type: "Machine Learning", image: Machine_Learning }
    const Data3 = { type: "Operating Systems", image: Operating_Systems }
    const Data4 = { type: "Computer Networking", image: Networking }
    const [msg, setMsg] = useState('');
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const cardsSectionTop = document.getElementById('cards-section').offsetTop;
            const headerHeight = 50; // Adjust this value based on your header's height
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY >= cardsSectionTop - headerHeight) {
                setShowCards(true);
            } else {
                setShowCards(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () =>  {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  
    const fonts = [
        'font-sans',
        'font-serif',
        'font-mono',
        'font-display',
        'font-cursive',
        'font-fantasy',
        'font-extrabold',
        'font-semibold',
        'font-thin',
        'font-light',
        'font-black',
        'font-hairline',
        
      ];
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const header = document.getElementById('changingHeader');
      if (header) {
        header.className = fonts[currentIndex];
        currentIndex = (currentIndex + 1) % fonts.length;
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentIndex]);

    return (
        <div className='flex flex-col justify-center items-center m-auto max-w-[1500px] mt-[-110px]'>
            <div className='flex flex-col items-center justify-center h-screen relative w-full' style={{
                background: 'linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)',
                WebkitBackgroundClip: 'text',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
            }}>
                <div className='absolute z-[-10] rounded-lg overflow-hidden'>
                    <img src={back} width={1500}/>
                </div>

                
                {/* <h1 id="changingHeader" className={`text-6xl text-white ${fonts[currentIndex]} `} >Welcome To Visual Hub</h1>  */}
                <h1 id="changingHeader" className={`text-6xl text-white-500 ${fonts[currentIndex]}`} style={{ fontSize: '6rem' }}>Welcome To Visual Hub</h1>

                <div className="absolute bottom-[60px]">
                    <   FaAngleDoubleDown className='text-[3rem] animate-bounce' />
                </div>
                <svg className='absolute right-[-40px] bottom-[30px] z-[-10] opacity-10 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="400px" height="400px"><circle cx="36" cy="20" r="3" fill="#ab47bc"/><circle cx="36" cy="12" r="3" fill="#4a148c"/><circle cx="36" cy="36" r="3" fill="#ab47bc"/><circle cx="36" cy="28" r="3" fill="#4a148c"/><circle cx="28" cy="20" r="3" fill="#4a148c"/><circle cx="28" cy="12" r="3" fill="#ab47bc"/><circle cx="28" cy="36" r="3" fill="#4a148c"/><circle cx="28" cy="28" r="3" fill="#ab47bc"/><circle cx="20" cy="20" r="3" fill="#ab47bc"/><circle cx="20" cy="12" r="3" fill="#4a148c"/><circle cx="20" cy="36" r="3" fill="#ab47bc"/><circle cx="20" cy="28" r="3" fill="#4a148c"/><circle cx="12" cy="20" r="3" fill="#4a148c"/><circle cx="12" cy="12" r="3" fill="#ab47bc"/><circle cx="12" cy="36" r="3" fill="#4a148c"/><circle cx="12" cy="28" r="3" fill="#ab47bc"/></svg>
                <svg className='absolute left-[-40px] top-0 z-[-10] opacity-10 ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="400px" height="400px"><circle cx="36" cy="20" r="3" fill="#ab47bc"/><circle cx="36" cy="12" r="3" fill="#4a148c"/><circle cx="36" cy="36" r="3" fill="#ab47bc"/><circle cx="36" cy="28" r="3" fill="#4a148c"/><circle cx="28" cy="20" r="3" fill="#4a148c"/><circle cx="28" cy="12" r="3" fill="#ab47bc"/><circle cx="28" cy="36" r="3" fill="#4a148c"/><circle cx="28" cy="28" r="3" fill="#ab47bc"/><circle cx="20" cy="20" r="3" fill="#ab47bc"/><circle cx="20" cy="12" r="3" fill="#4a148c"/><circle cx="20" cy="36" r="3" fill="#ab47bc"/><circle cx="20" cy="28" r="3" fill="#4a148c"/><circle cx="12" cy="20" r="3" fill="#4a148c"/><circle cx="12" cy="12" r="3" fill="#ab47bc"/><circle cx="12" cy="36" r="3" fill="#4a148c"/><circle cx="12" cy="28" r="3" fill="#ab47bc"/></svg>
                
            </div>

            <div id="cards-section" className={` max-w-[1200px] flex justify-center flex-wrap h-[700px] ${showCards ? 'cards-visible' : 'cards-hidden'}  `} style={{ background: 'white', paddingTop: '80px' }}>
                <Link to="/dataStructure" >
                    <Card Data={Data} />
                </Link>
                <Link to="/algorithms">
                    <Card Data={Data1} />
                </Link>
                <Link to="/machineLearning">
                    <Card Data={Data2} />
                </Link>
                <Link to="/algorithms">
                    <Card Data={Data3} />
                </Link>
                <Link to="/algorithms">
                    <Card Data={Data4} />
                </Link>
            </div>
            {/* <div className='flex justify-center flex-wrap h-[300px]' style={{ background: 'linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)' }}></div> */}
        </div>
    )
}





