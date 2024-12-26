import { createContext, ReactNode, useEffect, useState } from "react"
import { getLocalStorage} from "../utils/LocalStorage";
import { Employee,Admin } from "../utils/LocalStorage";

interface userData{
    employee:Employee[];
    admin:Admin[]
}

type AuthProviderProps={
    children:ReactNode;
}

export const AuthContext=createContext<userData|null>(null)
const AuthProvider:React.FC<AuthProviderProps> = ({children}):JSX.Element => {
const [userData,setUserData]=useState<userData | null>(null)
    useEffect(()=>{
     const {employee,admin}=getLocalStorage()
     setUserData({employee,admin})
    },[])
  return (
   <><AuthContext.Provider value={userData}>{children}</AuthContext.Provider></>
  )
}

export default AuthProvider