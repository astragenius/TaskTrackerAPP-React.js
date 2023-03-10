import React from 'react'

const DeleteTask = ({id, task, taskList, setTaskList}) => {

    const delTask = () => {
        
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
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