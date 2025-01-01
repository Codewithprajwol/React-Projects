import { useContext } from "react";
import { Employee } from "../../utils/LocalStorage"
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";


interface TaskListProps{
    taskData:Employee | null;
}



function TaskList({taskData}:TaskListProps):JSX.Element{

   const data=useContext(AuthContext)
   console.log(data)
  return (
    <div className="px-5 mt-10 w-full min-h-[30%] flex gap-5 overflow-x-auto tasklist-container">
      {taskData?.tasks.map((task,index)=>{
        if(task.active){
            return <AcceptTask key={index} data={task}/>
        }
        if(task.newTask){
          return <NewTask key={index} data={task} />
        }
        if(task.completed){
          return <CompleteTask key={index} data={task}/>
        }
        if(task.failed){
          return <FailedTask key={index}  data={task}/>
        }
      })}
    </div>
  )
}

export default TaskList