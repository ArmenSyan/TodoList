import { useState } from 'react'
import './App.css'
import Todo from './Components/Todo'
import Testing from './Components/Testing'
import Done from './Components/Done'

function App() {
  const [array, setArray] = useState([]);
  const [task, setTask] = useState("");
  const [TaskTesting,setTaskTesting] = useState([])

  const AddTask = () => {
    if (task.trim()) {
      setArray([...array, task,]);
      setTask("");
    }
  };
  
  const DelTask = (elem, index) => {
    setTaskTesting([...TaskTesting, elem])
    setArray(array.filter((_el, i) => i !== index))
  }
  console.log(TaskTesting)

  return (
    <div className='flex justify-evenly items-start text-[#333333] mt-[100px]'>
    <Todo task={task} array={array} setTask={setTask} AddTask={AddTask} DelTask={DelTask}/>
    <Testing  TaskTesting={TaskTesting}/>
    <Done />
    </div>
  )
}

export default App
