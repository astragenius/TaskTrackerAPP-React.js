import React from 'react'

const DeleteTask = ({id, taskList, setTaskList, completed, setCompleted}) => {

    const delTask = () => {
        
        let newTasklist = taskList.filter((task) => {
            return task.id !== id;
        })

        let newTaskList2 = completed.filter((task) => {
          return task.id !== id;
        })
        
        setTaskList(
          [...newTasklist]
        )
        setCompleted(
          [...newTaskList2]
        )
      
    }

  return (
    <>
        <button className='bg-red-500 text-white text-sm uppercase font-semibold py-1 px-4 rounded-lg mt-6 mb-1'
        onClick={delTask}
        >Delete</button>
    </>
  )
}

export default DeleteTask