import { RouterProvider } from "react-router-dom"
import { router } from "./main"
import { useState } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";

function App():JSX.Element {

  const [user,setUser]=useState<string>('');
  const handleUser=(email:string,password:number | string):void=>{
    if(email=='admin@gmail.com' && password==123){
      setUser('admin');
    }
    else if(email=='user@gmail.com' && password==456){
      setUser('employee')
    }
    else{
      alert('invalid credentials');
    }
  }
  
  return (
    <>
     {!user ?<Login handleUser={handleUser} />:''}
  { user ==='admin'?<RouterProvider router={router} />:''}
  { user ==='employee'?<EmployeeDashboard/>:''}
    </>
  )
}

export default App