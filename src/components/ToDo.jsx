import React from 'react'
import { useDrag } from 'react-dnd'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'
import Stopwatch from './Stopwatch'

const ToDo = ({key, task, taskList, setTaskList, index, id}) => {

    const [{isDragging}, drag] = useDrag(() => ({
      type: 'toDo',
      item: {
        id: index,
        projectName: task.projectName,
        projectDescription: task.projectDescription,
        duration: task.duration
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      })
    }))

  return (
    <>  
        <section className='flex flex-col bg-white my-4 py-4 px-6' ref={drag}>

          <div className='w-full flex flex-row justify-between'>
              <p className='text-xl font-semibold'>{task.projectName}</p>
              <EditTask task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>

          </div>
         
              <p className='text-lg py-2'>{task.projectDescription}</p>
           <div className='w-full flex flex-col items-center justify-center'>
            <Stopwatch task={task} taskList={taskList}/>
           </div>

          <div className='w-full flex justify-center'>

              <DeleteTask id={id} taskList={taskList} setTaskList={setTaskList}/>
          </div>


        </section>
    </>
  )
}

export default ToDo