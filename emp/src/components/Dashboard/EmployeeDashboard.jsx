import React from 'react'
import Header from '../Others/Header'
import TaskNumberList from '../Others/TaskNumberList'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
        
      <Header data={data}/>
      <TaskNumberList data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
