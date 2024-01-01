import React, { useState } from 'react';
import "../../index.css";
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function BinarySearchProblems() {
    const [activeButton, setActiveButton] = useState(4); // Default to show all
    const [questions, setQuestions] = useState([
        { id: 1, name: 'Binary Search', difficulty: 'Easy', solveLink: 'https://www.geeksforgeeks.org/problems/binary-search-1587115620/1', checked: false },
        { id: 2, name: 'X Subarrays', difficulty: 'Medium', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/x-subarrays-2-6179b2c0/', checked: false },
        { id: 3, name: 'Median of Two Sorted Arrays', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', checked: false },
        { id: 4, name: 'Find Minimum in Rotated Sorted Array II', difficulty: 'Hard', solveLink: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/', checked: false },
        { id: 5, name: 'Remove Interval', difficulty: 'Medium', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/remove-interval-2-36e0b00d/', checked: false },
        { id: 6, name: 'Search in Rotated Sorted Array', difficulty: 'Medium', solveLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', checked: false },
        { id: 7, name: 'Binary Search-basic', difficulty: 'Easy', solveLink: 'https://www.hackerrank.com/contests/launchpad-1-winter-challenge/challenges/binary-search-basic', checked: false },
        { id: 8, name: 'Maze maximum', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/maze-maximum-8f0fa284/', checked: false },
        // { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
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
        return activeButton === 4 || question.difficulty.toLowerCase() === ['easy', 'medium', 'hard'][activeButton - 1].toLowerCase();
    });
     

    return (
        <div className='bg-color pb-10'>
            <div className='max-w-[1200px] m-auto'>
                <VisualizeHeader routePath='/algorithms/search/binary-search' />
            </div>
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 className="card-heading text-[3rem] mb-4">Binary Search Problems</h1>

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
