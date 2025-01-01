import { createContext, ReactNode, useEffect, useState } from "react"
import { getLocalStorage} from "../utils/LocalStorage";
import {Employee} from "../utils/LocalStorage";



export interface AuthContextType {
    userData: Employee[] | null;
    setUserData: React.Dispatch<React.SetStateAction<Employee[] | null>>;
}

type AuthProviderProps={
    children:ReactNode;
}

export const AuthContext=createContext<AuthContextType|null>({
    userData: null,
    setUserData: () => {},
  })
const AuthProvider:React.FC<AuthProviderProps> = ({children}):JSX.Element => {
const [userData,setUserData]=useState<Employee[] | null>(null)
    useEffect(()=>{
     const {employee}=getLocalStorage()
     setUserData(employee)
    },[])
  return (
   <><AuthContext.Provider value={{userData,setUserData}}>{children}</AuthContext.Provider></>
  )
}

export default AuthProvider