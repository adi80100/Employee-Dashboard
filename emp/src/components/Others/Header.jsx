import React, { useState } from 'react'

const Header = () => {
    // console.log(data)

    // const [username, setUsername] = useState('')
    // if(!data){
    //   setUsername('Admin')
    // }
    // else{
    //   setUsername(data.firstName)
    // }

    const logOutUser =()=>{
      localStorage.setItem('loggedInUser','')
      window.location.reload()
    }

  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username </span></h1>
        <button onClick={logOutUser} className='bg-red-500 py-4 px-8 text-lg font-medium text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
