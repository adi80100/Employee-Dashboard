import React from 'react'

const FailTask = ({data}) => {
  return (
    <div className= 'flex-shrink-0 bg-yellow-400 h-full p-5 w-[360px] rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm px-3 py-1 bg-red-600 rounded'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='mt-3'>
                {data.taskDescription}
            </p>
            <div className='mt-4'>
                <button className='w-full bg-red-500 rounded'>Failed</button>
            </div>
        </div>
  )
}

export default FailTask
