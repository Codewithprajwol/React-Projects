import { Employee } from "../utils/LocalStorage"

interface TaskLIstNumbersProps{
  empData:Employee | null;
}
function TasksListNumbers({empData}:TaskLIstNumbersProps):JSX.Element {
  return (
    <div className="flex items-center justify-around px-5 gap-5 pt-7">
    <div className="w-[45%] bg-pink-400 rounded-md py-3 px-4 ">
      <h2 className="text-3xl font-semibold">{empData?.taskCount.newTask}</h2>
      <h3 className="text-xl font-semibold">New Task</h3>
    </div>
    <div className="w-[45%] bg-blue-400 rounded-md py-3 px-4 ">
      <h2 className="text-3xl font-semibold">{empData?.taskCount.active}</h2>
      <h3 className="text-xl font-semibold">Active Task</h3>
    </div>
   
    <div className="w-[45%] bg-yellow-400 rounded-md py-3 px-4 ">
      <h2 className="text-3xl font-semibold">{empData?.taskCount.completed}</h2>
      <h3 className="text-xl font-semibold">completed Task</h3>
    </div>
    <div className="w-[45%] bg-purple-400 rounded-md py-3 px-4 ">
      <h2 className="text-3xl font-semibold">{empData?.taskCount.failed}</h2>
      <h3 className="text-xl font-semibold">Failed Task</h3>
    </div>
    </div>
  )
}

export default TasksListNumbers