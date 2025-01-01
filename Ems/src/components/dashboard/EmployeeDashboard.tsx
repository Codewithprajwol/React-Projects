import Header from "../../others/Header"
import TasksListNumbers from "../../others/TasksListNumbers"
import TaskList from "../taskList/TaskList"
import { Employee } from "../../utils/LocalStorage"

interface EmployeeDashboardProps{
   userData:Employee | null;
   setUser:React.Dispatch<React.SetStateAction<string>> | (()=>void) ;
}
function EmployeeDashboard({userData,setUser}:EmployeeDashboardProps):JSX.Element {
  return (
    <div className="bg-[#333333] h-screen w-screen">
        <Header nameData={userData} setUser={setUser} />
        <TasksListNumbers empData={userData} />
        <TaskList taskData={userData}/>
    </div>
  )
}
export default EmployeeDashboard