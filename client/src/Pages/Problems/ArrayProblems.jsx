import React, { useState } from 'react';
import "../../index.css";
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function ArrayProblems() {
    const [activeButton, setActiveButton] = useState(4); // Default to show all
    const [questions, setQuestions] = useState([
        { id: 1, name: 'Kth smallest element', difficulty: 'Medium', solveLink: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1', checked: false },
        { id: 2, name: 'Intersection of Two Arrays', difficulty: 'Easy', solveLink: 'https://leetcode.com/problems/intersection-of-two-arrays/', checked: false },
        { id: 3, name: 'Minimum Number of Operations to Make Arrays Simpler', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/', checked: false },
        { id: 4, name: 'Make Array Empty', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/make-array-empty/', checked: false },
        { id: 5, name: 'Array', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/problem/algorithm/array-1/', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Easy', solveLink: 'https://www.twitter.com', checked: false },
        { id: 6, name: 'Kadanes Algorithm', difficulty: 'Medium', solveLink: 'https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1', checked: false },
        { id: 7, name: 'Minimum Length', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/minimum-length-4-945227e2/', checked: false },
        { id: 8, name: 'Array of Doubled Pairs', difficulty: 'Medium', solveLink: 'https://leetcode.com/problems/array-of-doubled-pairs/', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
        // ... (other questions)
    ]);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const handleCheckboxChange = (questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                if (question.id === questionId) {
                    return { ...question, checked: !question.checked };
                }
                return question;
            })
        );
    };

    const handleSolveClick = (solveLink) => {
        window.open(solveLink, '_blank');
    };

    const filteredQuestions = questions.filter((question) => {
        return activeButton === 4 || question.difficulty.toLowerCase() === ['easy', 'medium', 'hard', ''][activeButton - 1].toLowerCase();
    });
    
    
     

    return (
        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/dataStructures/array/array-problems' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="card-heading text-[3rem] mb-4 pt-10">Array Problems</h1>

                {/* Buttons for changing the page */}
                <menu className="button-menu mb-4">
                    <button
                        className={activeButton === 1 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(1)}
                    >
                        Easy
                    </button>
                    <button
                        className={activeButton === 2 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(2)}
                    >
                        Medium
                    </button>
                    <button
                        className={activeButton === 3 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(3)}
                    >
                        Hard
                    </button>
                    <button
                        className={activeButton === 4 ? "active small-button" : "small-button"}
                        onClick={() => handleButtonClick(4)}
                    >
                        All
                    </button>
                </menu>

                {/* Table to display questions */}
                <table className="questions-table">
                    <thead>
                        <tr>
                            <th className="column text-center">Select</th>
                            <th className="column text-center">Problem Name</th>
                            <th className="column text-center">Difficulty</th>
                            <th className="column text-center">Solve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuestions.map((question) => (
                            <tr key={question.id}>
                                <td className="column text-center">
                                    <input
                                        type="checkbox"
                                        checked={question.checked}
                                        onChange={() => handleCheckboxChange(question.id)}
                                    />
                                </td>
                                <td className="column text-center">{question.name}</td>
                                <td className="column text-center">{question.difficulty}</td>
                                <td className="column text-center">
                                    <a href="#" onClick={() => handleSolveClick(question.solveLink)}>
                                        <u>Solve</u>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
