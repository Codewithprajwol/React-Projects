import { Employee } from "../../utils/LocalStorage"
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";


interface TaskListProps{
    taskData:Employee | null;
}

function TaskList({taskData}:TaskListProps):JSX.Element{
    console.log(taskData)
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