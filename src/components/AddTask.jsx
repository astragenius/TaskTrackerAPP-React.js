
import React, { useState } from 'react'

const AddTask = () => {


  const [addModal, setAddModal] = useState(false)



  return (
    <>

            <button className='bg-green-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
            type='button'
            onClick={() => setAddModal(true)}
            >

              + New</button>
            
            {addModal ? (
              <>

                  <div className='
                  flex items-center justify-center
                  overflow-x-hidden overflow-y-auto 
                  fixed inset-0 z-100'>
                    <div className='w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col'>

                        <div className='flex flex-row justify-between p-5'>

                            <h3 className='bg-white text-3xl font-semibold'>Add New Task</h3>

                            <button className='text-gray text-3xl px-1 font-semibold block'
                            onClick={() => setAddModal(false)}
                            >
                              x
                            </button>


                        </div>
                        <form className='p-6'>
                          <div>

                              <label htmlFor='project-name' className='track-wide uppercase text-gray-700 text-xs font-semibold'>Project Name</label>
                              <input
                              className='w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                              id='project-name'
                              type="text"
                              placeholder='Project Name'
                              name='project name'
                              required

                                
                              />
                          </div>
                          <div>
                            <label htmlFor="task-description"
                            className='track-wide uppercase text-gray-700 text-xs font-semibold'
                            >Project Description</label>
                            <textarea 
                            className='w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                            name="" 
                            id="task-description" 
                            cols="3"
                            placeholder='Task description'

                            ></textarea>
                          </div>
                        </form>
                          <div className='flex justify-end p-6 border-t border-slate 200 rounded-b'>
                            <button className='bg-green-500 text-white font-semibold text-sm uppercase px-6 py-3 rounded hover:opacity-70'>
                                Add Task
                            </button>
                          </div>
                    </div>

                    
                  </div>
              </>
            ):null }
    
    
    </>
  )
}

export default AddTask