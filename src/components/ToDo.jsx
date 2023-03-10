import React from 'react'
import EditTask from './EditTask'

const ToDo = ({task, taskList, setTaskList, index}) => {
  return (
    <>  
        <section className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>

          <div className='w-full flex flex-row justify-between'>
              <p className='text-xl font-semibold'>{task.projectName}</p>
              <EditTask task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>

          </div>
         
              <p className='text-lg py-2'>{task.projectDescription}</p>
           

          <div className='w-full flex justify-center'>

              <button className='bg-red-500 text-white text-sm uppercase font-semibold py-1 px-4 rounded-lg mt-6 mb-1'>Delete</button>
          </div>


        </section>
    </>
  )
}

export default ToDo