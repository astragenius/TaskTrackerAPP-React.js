import { useState, useEffect } from "react"
import { useDrop } from "react-dnd"
import AddTask from "./components/AddTask"
import ToDo from "./components/ToDo"



function App() {

  const [taskList, setTaskList] = useState([])
  const [completed, setCompleted] = useState([])
  

  const [{isOver}, drop] = useDrop(() => ({
    accept: 'toDo',
    drop: (item) => addTocompleted(item.id, item.projectName, item.projectDescription, item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addTocompleted = (id, projectName, projectDescription, duration) => {
    const moveTask = taskList.filter((task) => id === task.id)
    setCompleted((completed) => [...completed, {moveTask, id, projectName, projectDescription, duration}])
  }
 
  return (
    <div>
      <h1 className="text-3xl font-bold py-4 pl-6">My Task Tracker</h1>
      <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click</p>
          <AddTask taskList={taskList} setTaskList={setTaskList}/>
          <p className="text-xl">to add a new task</p>
      </div>
      <div className="flex flex-row">

          <section className="w-full">
            <h2 className="bg-slate-300 text-2xl font-semibold uppercase w-3/4 max-w-lg ml-6 my-4 py-2 px-4">To Do:</h2>
            {taskList.map((task, i) =>
              
                <ToDo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} index={i} id={task.id}/>
              
              
            )}
          </section>
          <section className="w-full" ref={drop}>
            <h2 className="bg-slate-300 text-2xl font-semibold uppercase w-3/4 max-w-lg ml-6 my-4 py-2 px-4">Complete:</h2>
            {completed.map((task, i) =>
              
                <ToDo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} index={i} id={task.id}/>
            
            
              )}
                      
          </section>
      </div>
    </div>
  )
  
}

export default App
