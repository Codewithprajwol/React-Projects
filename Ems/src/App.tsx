import { RouterProvider } from "react-router-dom"
import { router } from "./main"
import { createContext, useContext, useEffect, useState } from "react"
import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import  { AuthContext, AuthContextType } from "./context/AuthProvider";
import { Employee, setLocalStorage } from "./utils/LocalStorage";

interface loggedInUser{
  role:string;
  data:Employee;
}

export interface passingUserprop{
  setUser:React.Dispatch<React.SetStateAction<string>>;
  setUserData:React.Dispatch<React.SetStateAction<Employee[] | null>>;
}

export const passingUser=createContext<passingUserprop | undefined>(undefined)

function App():JSX.Element {
 
  const context:AuthContextType | null =useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { userData, setUserData } = context;


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
    else if(userData){
      const employee=userData.find((e:Employee)=>e.email==email && e.password==password);
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
  { user ==='admin'?<passingUser.Provider value={{setUser,setUserData}}><RouterProvider router={router} /></passingUser.Provider>:''}
  { user ==='employee'&& loggedInUser &&<EmployeeDashboard setUser={setUser} userData={loggedInUser}/>}
    </>
  )
}

export default App