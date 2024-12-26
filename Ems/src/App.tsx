import { RouterProvider } from "react-router-dom"
import { router } from "./main"
import { useContext, useEffect, useState } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import  { AuthContext } from "./context/AuthProvider";
import { Employee, setLocalStorage } from "./utils/LocalStorage";

interface loggedInUser{
  role:string;
  data:Employee;
}

function App():JSX.Element {
 
  const authData=useContext(AuthContext)
  const [user,setUser]=useState<string>('');
  const [loggedInUser,setLoggedInUser]=useState<Employee | null>(null)
  useEffect(()=>{
    setLocalStorage()
    const loggedInUser:loggedInUser | null=JSON.parse(localStorage.getItem('LoggedInUser') || "null")
    if(loggedInUser){
      setUser(loggedInUser.role)
       setLoggedInUser(loggedInUser.data)
    }
  },[])
  const handleUser=(email:string,password:number | string):void=>{
    if(email=="admin@example.com" && password==123){
      setUser('admin');
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
      }
    else if(authData){
      const employee=authData.employee.find((e)=>e.email==email && e.password==password);
      if(employee){
        setUser('employee')
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employee}))
        setLoggedInUser(employee)
      }
    }
    else{
      alert('invalid credentials');
    }
  }

  return (
    <>
     {!user ?<Login handleUser={handleUser} />:''}
  { user ==='admin'?<RouterProvider router={router} />:''}
  { user ==='employee'&& loggedInUser &&<EmployeeDashboard userData={loggedInUser}/>}
    </>
  )
}

export default App