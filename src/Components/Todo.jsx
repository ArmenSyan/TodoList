// import React, { useState } from 'react'

// function Todo() {
//   const [array, setArray] = useState([])
//   const [task, setTask] = useState("")

//   const AddTask = () => {
//     if (task.trim()) {
//       setArray([
//         ...array,
//          {
//           text:"task",
//           // how to add id to my array`s elements
//         }])
//       setTask("")
//     }
//   }
//   console.log(array);

//   return (
//     <div className='flex flex-col justify-evenly items-center border-[1px] border-zinc-800 py-[30px] px-[40px]'>
//       <div className='flex items-center justify-evenly w-[340px]'> 
//           <input type='text' className='w-[200px] h-[40px]' placeholder='Enter text' value={task} onChange={(e) => setTask(e.target.value)} />
//           <button onClick={AddTask} className=' px-[30px] py-[10px] rounded-[10px] text-white bg-blue-800'>Add</button>
//       </div>
//       <div>
//         {array.map((el, i) => (
//           <div key={i} className='w-[300px] flex justify-evenly gap-2 items-center my-[20px]'>
//             {el}
//             <button className='rounded-[5px] px-[10px] py-[5px] bg-lime-400'>Completed</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Todo

import React, { useState } from 'react';

function Todo() {
  const [array, setArray] = useState([]);
  const [task, setTask] = useState("");
  const [Done, setDone] = useState([]);

  const AddTask = () => {
    if (task.trim()) {
      setArray([...array, task,]);
      setTask("");
    }
  };

  const DelTask = (elem, index) => {
    setDone([...Done, elem])
    setArray(array.filter((_el, i) => i !== index))
  }
  console.log(Done)
  return (
    <div className="flex flex-col justify-evenly items-center border-[1px] border-zinc-800 py-[30px] px-[40px]">
      <div className="flex items-center justify-evenly w-[340px]">
        <input
          type="text"
          className="w-[200px] h-[40px]"
          placeholder="Enter text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={AddTask}
          className="px-[30px] py-[10px] rounded-[10px] text-white bg-blue-800"
        >
          Add
        </button>
      </div>
      <div>
        {array.map((el, i) => (
          <div
            key={i}
            className="w-[300px] flex justify-evenly gap-2 items-center my-[20px]"
          >
            {el}
            <button
              onClick={() => DelTask(el, i)}
              className="rounded-[5px] px-[10px] py-[5px] bg-lime-400">
              Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
