import AddTask from "./components/AddTask"



function App() {
 
  return (
    <div>
      <h1 className="text-3xl font-bold py-4 pl-6">My Task Tracker</h1>
      <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click</p>
          <AddTask/>
          <p className="text-xl">to add a new task</p>
      </div>
    </div>
  )
  
}

export default App
