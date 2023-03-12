import React, { useEffect, useState } from 'react'
import { MdPlayCircleOutline, MdStop, MdRestartAlt } from "react-icons/md";


const Stopwatch = ({taskList, task}) => {
    const [time, setTime] = useState(task.duration)
    const [running, setRunning] = useState(false);


    useEffect(() => {
        let interval;
        if(running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);

        }else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    }, [running])
    

  return (
    <div className='w-full flex flex-col items-center xl:flex-row xl:justify-between'>
        <div className='w-full flex text-xl font-semibold py-4 justify-center'>
            <span>{('0' + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className=''>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='w-full flex flex-row justify-around gap-4 xl:justify-end xl:w-3/6'>
            {running ? 
            (<button
            onClick={() => setRunning(false)}
            className='flex gap-1.5 py-1 px-2 items-center rounded bg-red-500 text-white'
            >
            <MdStop/>
            Stop</button>) : 
            (<button
            onClick={() => setRunning(true)}
            className='flex gap-1.5 py-1 px-2 items-center rounded bg-green-500 text-white'
            >
            <MdPlayCircleOutline/>
            Start</button>)}
           
            
            <button
            className='flex gap-1.5 py-1 px-2 items-center rounded bg-blue-300 text-white'
            onClick={() => setTime(0)}
            >
            <MdRestartAlt/>
            Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch