import { useEffect, useState } from "react";
import { Employee } from "../utils/LocalStorage"

interface headerProps{
  nameData:Employee |null;
  setUser:React.Dispatch<React.SetStateAction<string>>  ;
}

const Header = ({nameData,setUser}:headerProps):JSX.Element => {
  const [isUser,setIsUser]=useState<Employee|string >('')

  useEffect(()=>{
    if(nameData){
      setIsUser(nameData)
    }else{
      setIsUser('Prajwol')
    }
  },[nameData])

   const logOutfunc=():void=>{
     localStorage.setItem('LoggedInUser','');
     setUser('')
   }

  return (
    <div className="flex items-center justify-between px-5 header bg-[#353535] text-white">
        <h1 className="text-[1.5rem]"><span className="text-[1.3rem]">Hello,</span> <br/>{typeof(isUser)=='object'?isUser.firstName:isUser}😃</h1>
        <button onClick={logOutfunc} className="rounded-md bg-red-400 px-3 py-1 cursor-pointer font-medium">Log Out</button>
    </div>
  )
}

export default Header