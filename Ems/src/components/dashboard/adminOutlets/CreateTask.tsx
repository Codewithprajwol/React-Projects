import { useContext, useState } from "react"
import { Employee } from "../../../utils/LocalStorage"
import { passingUser, passingUserprop } from "../../../App"
interface taskprops{
  taskTitle:string,
  taskDescription:string,
  taskDate:string,
  category:string,
  active:boolean,
  newTask:boolean,
  completed:boolean,
  failed:boolean
}

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState<string>("")
  const [taskDescription, setTaskDescription] = useState<string>("")
  const [taskDate, setTaskDate] = useState<string>("")
  const [assignTo, setAssignTo] = useState<string>("")
  const [category, setCategory] = useState<string>("")

  const data:passingUserprop | undefined=useContext(passingUser)
   
if (!data) {
  // Handle case where context is not provided
  throw new Error("passingUser context must be within a provider");
}

const { setUserData } = data;

  const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const newTask:taskprops | null={taskTitle,taskDescription,taskDate,category,active:false,newTask:true,completed:false,failed:false}
    
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
      if (!assignTo.trim()) {
    alert("Please assign the task to an employee.");
    return;
  }


    const employee=(localStorage.getItem('employee'));
    if(employee){
      const allEmployee=JSON.parse(employee)
      allEmployee.forEach((emp:Employee)=>{
       if(emp.firstName===assignTo){
         if(newTask){
          emp.tasks.push(newTask)
          emp.taskCount.newTask+=1;
          localStorage.setItem('employee',JSON.stringify(allEmployee))
          setUserData(allEmployee)
        }
      }
      })
    }
  }



 

  return (
    <form className="p-5" onSubmit={submitHandler}>
      <h2>Create Tasks</h2>
      <div className="flex items-center justify-between gap-5 pt-5">
      <label htmlFor="taskName">TaskName</label>
      <input onChange={(e)=>setTaskTitle(e.target.value)} value={taskTitle}type="text" id="taskName" placeholder="enter the tasks" className="w-full rounded-md placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5 ">
      <label htmlFor="date">Date</label>
      <input onChange={(e)=>setTaskDate(e.target.value)} value={taskDate} type="date" id="date" className="w-full rounded-md pl-3 placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5">
      <label htmlFor="asingto" className="flex-shrink-0">Asign to</label>
      <input onChange={(e)=>setAssignTo(e.target.value)} value={assignTo} type="text" id= "asignto" placeholder="employee name" className="w-full rounded-md  placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-center justify-between gap-5 pt-5 ">
      <label htmlFor="category">Category</label>
      <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" id= "category" placeholder="category" className="w-full rounded-md placeholder:pl-3 border-2" />
      </div>
      <div className="flex items-start justify-between gap-5 pt-5 pb-3">
      <label htmlFor="description">Description</label>
      <textarea onChange={(e)=>setTaskDescription(e.target.value)} value={taskDescription} name="description" id="description" className="w-full h-32 p-1 border-2"></textarea>
      </div>
      <button  type="submit" className="py-2 px-2 bg-sky-500 rounded-md ">create Task</button>
    </form>
  )
}

export default CreateTask