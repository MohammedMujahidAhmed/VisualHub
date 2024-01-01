import React, { useState } from 'react';
import "../../index.css";
import VisualizeHeader from '../../Components/VisualizeHeader';

export default function LinearSearchProblems() {
    const [activeButton, setActiveButton] = useState(4); // Default to show all
    const [questions, setQuestions] = useState([
        { id: 1, name: 'Find Mex', difficulty: 'Easy', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/find-mex-62916c25/', checked: false },
        { id: 2, name: 'Equal Strings', difficulty: 'Medium', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/equal-strings-79789662-4dbd707c/', checked: false },
        { id: 3, name: 'Guess Permutation', difficulty: 'Hard', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/permutation-swaps-2-01766245/', checked: false },
        { id: 4, name: 'AND subsequence', difficulty: 'Medium', solveLink: 'https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/and-subsequence-9682a719/', checked: false },
        { id: 5, name: 'Search and element in array', difficulty: 'Easy', solveLink: 'https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
    //     { id: 2, name: 'Problem 2', difficulty: 'Medium', solveLink: 'https://www.twitter.com', checked: false },
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
                <VisualizeHeader routePath='/algorithms/search/linear-search' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="card-heading text-[3rem] mb-4 pt-10">Linear Search Problems</h1>

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
