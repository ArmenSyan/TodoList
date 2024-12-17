import { useState } from 'react'
import './App.css'
import Todo from './Components/Todo'
import Testing from './Components/Testing'
import Done from './Components/Done'

function App() {

  return (
    <div className='flex justify-evenly items-start text-[#333333] mt-[100px]'>
    <Todo />
    <Testing />
    <Done />
    </div>
  )
}

export default App
