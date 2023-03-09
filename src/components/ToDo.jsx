import React from 'react'

const ToDo = ({task}) => {
  return (
    <>  
        <section className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>
            <p className='text-xl font-semibold'>{task.projectName}</p>
            <p className='text-lg py-2'>{task.projectDescription}</p>

            <button>Delete</button>
        </section>
    </>
  )
}

export default ToDo