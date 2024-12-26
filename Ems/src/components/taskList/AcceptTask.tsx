import { Task } from "../../utils/LocalStorage"

interface AcceptTaskPros{
     data:Task;
}
const AcceptTask = ({data}:AcceptTaskPros) => {
  console.log(data)
  return (
    <>
      <div className="h-full w-[300px] bg-orange-400 rounded-xl flex-shrink-0 px-3 py-5 text-white flex justify-start flex-col gap-5">
            <div className="flex items-center justify-between">
                <button className="rounded-md bg-red-500 px-2 py-1 cursor-pointer font-medium">High</button>
                <h2 className="font-medium text-xl">{data.taskDate}</h2>
            </div>
            <h2 className="font-medium text-xl">{data.taskTitle}</h2>
            <p className="font-light text-sm">{data.taskDescription}</p>
            <div className="flex justify-between items-center">
                <button className="bg-green-500 px-2 py-1 text-sm rounded-md">mark as Completed</button>
                <button className="bg-red-500 px-2 py-1 text-sm rounded-md">mark as Failed</button>
            </div>
        </div>
    </>
  )
}

export default AcceptTask