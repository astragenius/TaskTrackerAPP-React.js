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
    <main className="flex flex-col px-5">
      <div className="bg-slate-300 py-3 mt-3 rounded flex justify-center">
        <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:max-w-lg">
            <h1 className="text-4xl text-center font-bold">My Task Tracker</h1>
            <div className="flex flex-row items-center my-3">
                <p className="text-xl pl-6">Click</p>
                <AddTask taskList={taskList} setTaskList={setTaskList}/>
                <p className="text-xl">to add a new task</p>
            </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 xl:justify-center">

          <section className="w-full xl:max-w-lg">
            <h2 className="bg-slate-300 text-2xl font-semibold uppercase my-4 py-2 px-4 rounded">To Do:</h2>
            {taskList.map((task, i) =>
              
                <ToDo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} index={i} id={task.id}/>
              
              
            )}
          </section>
          <section className="w-full xl:max-w-lg" ref={drop}>
            <h2 className="bg-slate-300 text-2xl font-semibold uppercase my-4 py-2 px-4 rounded">Complete:</h2>
            {completed.map((task, i) =>
              
                <ToDo key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} index={i} id={task.id}/>
            
            
              )}
                      
          </section>
      </div>
    </main>
  )
  
}

export default App
