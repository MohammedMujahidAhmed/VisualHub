import React, { useState } from 'react';
import axios from 'axios';
import HeadLine from './Components/HeadLine';
import { toast } from 'react-toastify';

export default function Usage() {
    const [statistics, setStatistics] = useState({});
    const [loading, setLoading] = useState(false);

    async function UsageHandler(ev) {
        ev.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post("/statistics");
            setStatistics(res.data.algCount);
        } catch (error) {
            console.error("Error fetching statistics:", error);
            toast.error("Error fetching statistics");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center m-auto max-w-[1200px] mt-[-60px] space-x-6 space-y-10'> 
            <div className='items-center justify-center'>
                <div className='flex items-center justify-center w-full m-3'>
                    <HeadLine content={"My Statistics"}></HeadLine>
                </div>
                <div>
                    <button className="justify-between items-center" onClick={UsageHandler} disabled={loading}>
                        {loading ? "Loading..." : "Check Statistics"}
                    </button>
                </div>
                {Object.keys(statistics).length > 0 && (
                    <div className="mt-4">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-black">Algorithm Name</th>
                                    <th className="border border-gray-300 px-4 py-2 text-black">Visited</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(statistics).map(([algorithm, count]) => (
                                    count > 0 && (
                                        <tr key={algorithm}>
                                            <td className="border border-gray-300 justify-between px-4 py-2 text-black">{algorithm}</td>
                                            <td className="border border-gray-300 justify-between px-4 py-2 text-black">{count}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}


