import React from 'react'

const AcceptTask = () => {
  return (
    <div className= 'flex-shrink-0 bg-red-400 h-full p-5 w-[360px] rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='text-sm px-3 py-1 bg-red-400 rounded'>High</h3>
                <h4>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make A youtube video</h2>
            <p className='mt-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, praesentium cupiditate! Impedit corporis deleniti dolores.
            </p>
            <div className='flex justify-between items-center mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
