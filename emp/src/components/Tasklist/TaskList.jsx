import React from 'react'
import AcceptTask from './AcceptTask'


import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailTask from './FailTask'

const TaskList = ({data}) => {
    
    // console.log(data)
    return (
        <div id="tasklist" className='flex justify-start overflow-x-auto items-center gap-5 h-[45%] flex-nowrap w-full mt-15'>
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} />;
                }
                if (e.newTask) {
                    return <NewTask key={idx}  data={e}/>;
                }
                if (e.completed) {
                    return <CompleteTask key={idx} data={e} />;
                }
                if (e.failed) {
                    return <FailTask key={idx} data={e} />;
                }
                return null;
            })}
        </div>
    )
}

export default TaskList

