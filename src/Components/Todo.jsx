import React, { useState } from 'react';

function Todo({ task, array,setTask, AddTask, DelTask }) {

  return (
    <div className="flex flex-col justify-evenly items-center rounded-[15px] border-2 border-zinc-800 py-[30px] px-[40px]">
      <div className="flex items-center justify-evenly w-[340px] pb-[40px] border-b-2 border-slate-600">
        <input
          type="text"
          className="w-[200px] h-[40px] border-[1px] border-slate-500 rounded-[6px] px-[5px]"
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
            className="w-[300px] flex justify-evenly gap-2 rounded-[5px] items-center my-[20px] border-[1px] py-[20px] border-slate-800"
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
