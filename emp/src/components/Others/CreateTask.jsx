import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc,setTaskDesc] = useState('')
    const [taskDate,setTaskDate] = useState('')
    const [assignTo,setAssignTo] = useState('')
    const [category,setCategory] = useState('')


    const [newTask,setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        setNewTask({taskTitle,taskDesc,taskDate,category,active:false,newTask:true,completed:false,failed:false})

        const data = userData
        

        data.forEach(function(e){
            // console.log(e.firstName)
            if(assignTo == e.firstName){
                // console.log(e.tasks)
                e.tasks.push(newTask)
                console.log(e)
                e.taskCounts.newTask = e.taskCounts.newTask+1
            }
        })
     


        // console.log(taskTitle,taskDesc,taskDate,assignTo,category)

        setUserData(data)
        console.log(data)
        setTaskTitle('')
        setTaskDesc('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
        
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-wrap w-full items-start justify-between  ' >
            <div className='w-1/2 '>
                <div className='mb-2' 
                >
                    <h3 className='text-xl text-gray-300 mb-0.5 '>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                </div>
                <div 
                className='mb-2'>
                    <h3 className='text-xl text-gray-300 mb-0.5 '>Date</h3>
                    <input
                    value={taskDate}
                        onChange={(e)=>{ 
                        setTaskDate(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>
                <div 
                className='mb-2'>
                    <h3 className='text-xl text-gray-300 mb-0.5 '>Assign to</h3>
                    <input
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employe name' />
                </div>
                <div 
                className='mb-2'>
                    <h3 className='text-xl text-gray-300 mb-0.5 '>Category</h3>
                    <input
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 h-9 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Development,etc...' />
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-xl text-gray-300 mb-0.5 '>Description</h3>
                <textarea 
                value={taskDesc}
                onChange={(e)=>{
                    setTaskDesc(e.target.value)
                }}
                className='text-sm py-2 px-4  w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="11"></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-l mt-4 w-full'>Create Task</button>
            </div>


            
            
        </form>
      </div>
  )
}

export default CreateTask
