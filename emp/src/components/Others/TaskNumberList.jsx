import React from 'react'

const TaskNumberList = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-xl px-7 py-9 w-[45%] bg-blue-400'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
                <h2 className='text-2xl font-medium'>New Task</h2>
            </div>
            <div className='rounded-xl px-7 py-9 w-[45%] bg-green-400'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
                <h2 className='text-2xl font-medium'>Completed Task</h2>
            </div>
            <div className='rounded-xl px-7 py-9 w-[45%] bg-yellow-400'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
                <h2 className='text-2xl font-medium'>Accepted Task</h2>
            </div>
            <div className='rounded-xl px-7 py-9 w-[45%] bg-red-400'>
                <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
                <h2 className='text-2xl font-medium'>Failed Task</h2>
            </div>
    </div>
  )
}

export default TaskNumberList
