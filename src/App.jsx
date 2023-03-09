import { useState } from "react"
import AddTask from "./components/AddTask"



function App() {

  const [taskList, setTaskList] = useState([])
  console.log(taskList)

 
  return (
    <div>
      <h1 className="text-3xl font-bold py-4 pl-6">My Task Tracker</h1>
      <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click</p>
          <AddTask taskList={taskList} setTaskList={setTaskList}/>
          <p className="text-xl">to add a new task</p>
      </div>
      {taskList.map((task, i) =>
        <>
          
          <p>{task.projectName}</p>
          <p>{task.projectDescription}</p>
        </>
      )}
    </div>
  )
  
}

export default App
