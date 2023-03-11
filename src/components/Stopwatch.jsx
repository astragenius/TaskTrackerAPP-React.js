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
    const getDuration = () => {
        setRunning(false)
        let taskIndex = taskList.indexOf(task)
        taskList.splice(taskIndex, 1, {
            id: task.id,
            projectName: task.projectName,
            projectDescription: task.projectDescription,
            duration: time
        })
        localStorage.setItem('taskList', JSON.stringify(taskList))
        window.location.reload()
    }
    const resetDuration = () => {
        let taskIndex = taskList.indexOf(task)
        taskList.splice(taskIndex, 1, {
            id: task.id,
            projectName: task.projectName,
            projectDescription: task.projectDescription,
            duration: 0
        })
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }

  return (
    <div className='w-full flex flex-row items-center justify-evenly'>
        <div className='w-1/4 text-xl font-semibold py-4'>
            <span>{('0' + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className=''>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='w-1/3 max-w-sm flex flex-row justify-evenly gap-4'>
            {running ? 
            (<button
            onClick={getDuration}
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
            onClick={resetDuration}
            >
            <MdRestartAlt/>
            Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch