import React, { useState, useEffect } from 'react'

const EditTask = ({taskList, setTaskList, task, index}) => {
  const [editModal, setEditModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const getInput = e => {
    e.preventDefault();
    const {name, value} = e.target
    if(name === 'projectName') setProjectName(value) 
    if(name === 'description') setProjectDescription(value)

    
  }

  useEffect(() => {
    setProjectName(task.projectName)
    setProjectDescription(task.projectDescription)
  },[])

  const setUpdate = (e) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task)
    taskList.splice(taskIndex, 1)
    setTaskList(
      [...taskList, {id: task.id, projectName, projectDescription, duration:task.duration}]
    )

    setEditModal(false)
  }

  return (
    <>
        <button 
        className='bg-blue-300 text-white text-sm uppercase py-1 px-2 rounded'
        onClick={() => setEditModal(true)}
        >
           
            
            Edit
            
        </button>

        {editModal ? (
            <>

                <div className='
                  flex items-center justify-center
                  overflow-x-hidden overflow-y-auto 
                  fixed inset-0 z-100'>
                    <div className='bg-white rounded-lg shadow-md relative flex flex-col mx-5 md:w-9/12 md:max-w-lg'>

                        <div className='flex flex-row justify-between p-5 border-b border-slate-200 rounded-t'>

                            <h3 className='bg-white text-3xl font-semibold'>Edit Task</h3>

                            <button className='text-gray text-3xl px-1 font-semibold block'
                            onClick={() => setEditModal(false)}
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
                              name='projectName'
                              value={projectName}
                              onChange={getInput}
                              required

                                
                              />
                          </div>
                          <div>
                            <label htmlFor="task-description"
                            className='track-wide uppercase text-gray-700 text-xs font-semibold'
                            >Project Description</label>
                            <textarea 
                            className='w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                            name="description" 
                            id="task-description" 
                            rows="5"
                            placeholder='Task description'
                            value={projectDescription}
                            onChange={getInput}

                            ></textarea>
                          </div>
                        </form>
                          <div className='flex justify-end p-6 border-t border-slate 200 rounded-b'>
                            <button className='bg-green-500 text-white font-semibold text-sm uppercase px-6 py-3 rounded hover:opacity-70'
                              onClick={setUpdate}>
                                Update
                            </button>
                          </div>
                    </div>

                    
                  </div>
            
            </>
        )
        :null}
    </>
  )
}

export default EditTask