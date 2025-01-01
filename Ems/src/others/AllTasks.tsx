import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Employee } from "../utils/LocalStorage";


function AllTasks() {
  const data=useContext(AuthContext)
  return (
    <>
  {/* Header Section */}
  <div className="flex justify-center items-center p-3">
    <div className="text-white w-full p-3 bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 grid grid-cols-5 gap-6 justify-items-center items-center rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Employee Name</h2>
      <h2 className="text-xl font-semibold">Accept Task</h2>
      <h2 className="text-xl font-semibold">New Task</h2>
      <h2 className="text-xl font-semibold">Completed Task</h2>
      <h2 className="text-xl font-semibold">Failed Task</h2>
    </div>
  </div>

  {/* Employee Data Section */}
  <div className="w-full h-auto overflow-y-auto space-y-1 p-4">
    {data?.userData?.map((singleEmp:Employee, index:number) => {
      return (
        <div key={index} className="flex justify-center items-center p-4 cursor-pointer">
          <div className="text-white w-full min-h-20 p-4 bg-gradient-to-r from-indigo-500 via-teal-600 to-pink-600 grid grid-cols-5 gap-6 justify-items-center items-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-lg font-medium">{singleEmp.firstName}</h2>
            <h2 className="text-lg font-medium">{singleEmp.taskCount.active}</h2>
            <h2 className="text-lg font-medium">{singleEmp.taskCount.newTask}</h2>
            <h2 className="text-lg font-medium">{singleEmp.taskCount.completed}</h2>
            <h2 className="text-lg font-medium">{singleEmp.taskCount.failed}</h2>
          </div>
        </div>
      );
    })}
  </div>
</>


  )
}

export default AllTasks