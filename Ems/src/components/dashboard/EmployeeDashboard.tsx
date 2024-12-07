import Header from "../../others/Header"
import TasksListNumbers from "../../others/TasksListNumbers"
import TaskList from "../taskList/TaskList"

function EmployeeDashboard():JSX.Element {
  return (
    <div className="bg-[#333333] h-screen w-screen">
        <Header />
        <TasksListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard