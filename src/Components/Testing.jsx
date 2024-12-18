import React from 'react'

function Testing({ TaskTesting }) {


  return (
    <div className="flex flex-col justify-evenly items-center rounded-[15px] border-2 w-[400px] border-zinc-800 py-[30px] px-[40px]">
      <strong><p className='text-[30px] flex items-center justify-evenly w-[340px] pb-[40px] border-b-2 border-slate-600'
      >Testing Tasks</p></strong>
      {TaskTesting.map((el, i) => {
        return (
          <div
            className='w-[300px] flex justify-evenly gap-2 items-center my-[20px] rounded-[5px] border-[1px] py-[20px] border-slate-800'
            key={i}>
            <p>{el}</p>
            <button className="rounded-[5px] px-[10px] py-[5px] bg-red-400">Done</button>
          </div>
        )
      })}
    </div>
  )
}

export default Testing