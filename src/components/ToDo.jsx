import React from 'react'

const ToDo = ({task}) => {
  return (
    <>  
        <section className='flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>

          <div className='w-full flex flex-row justify-between'>
              <p className='text-xl font-semibold'>{task.projectName}</p>
              <button className='bg-blue-300 text-white text-sm uppercase py-1 px-2 rounded'>Edit</button>

          </div>
         
              <p className='text-lg py-2'>{task.projectDescription}</p>
           

          <div className='w-full flex justify-center'>

              <button className='bg-red-500 text-white text-sm uppercase font-semibold py-1 px-4 rounded-lg'>Delete</button>
          </div>


        </section>
    </>
  )
}

export default ToDo