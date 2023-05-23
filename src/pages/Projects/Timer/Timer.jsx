import React, { useEffect, useState } from "react";

function Timer () {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div id='layout-container'className='bg-gradient-to-b from-slate-300 dark:from-slate-800 dark:to-slate-600'>
            <div className='p-10 h-screen'>
                <div className='font-mono flex items-center flex-col p-10'>
                    <h1 className='text-2xl font-semibold  text-indigo-700 dark:text-indigo-500 pb-2'>Stopwatch</h1>
                    <div className='text-2xl font-semibold  text-gray-600 dark:text-gray-300 py-5'>
                        <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
                        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
                        <span>{("0"+((time/10)%100)).slice(-2)}</span>
                    </div>
                    <div className='w-1/4 max-w-sm flex flex-row gap-1 justify-evenly text-gray-600 dark:text-gray-200'>
                        {running ? (
                        <button className='border border-slate-800 dark:border-slate-200 rounder-lg py-1 px-2'
                            onClick={() => {setRunning(false)}}
                        >
                            Pause
                        </button>
                        ) : (
                        <button className='border  border-slate-800 dark:border-slate-200 rounder-lg py-1 px-2'
                            onClick={() => {setRunning(true)}}
                        >
                            Start
                        </button>
                        )}
                        
                        <button className='border  border-slate-800 dark:border-slate-200 rounder-lg py-1 px-2'
                            onClick={() => {setTime(0)}}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer;