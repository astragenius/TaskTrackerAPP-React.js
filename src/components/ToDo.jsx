import React from 'react'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'
import Stopwatch from './Stopwatch'

const ToDo = ({key, task, taskList, setTaskList, index, id}) => {
  return (
    <>  
        <section className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>

          <div className='w-full flex flex-row justify-between'>
              <p className='text-xl font-semibold'>{task.projectName}</p>
              <EditTask task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>

          </div>
         
              <p className='text-lg py-2'>{task.projectDescription}</p>
           <div>
            <Stopwatch/>
           </div>

          <div className='w-full flex justify-center'>

              <DeleteTask id={id} taskList={taskList} setTaskList={setTaskList}/>
          </div>


        </section>
    </>
  )
}

export default ToDo