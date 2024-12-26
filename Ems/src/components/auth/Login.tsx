import { useState } from "react"

interface handler{
     handleUser:(email:string,password:number |string)=>void;
}

function Login({handleUser}:handler):JSX.Element {
  const [user,setUser]=useState<string>('')
  const [password,setPassword]=useState<string | number>('')
  const onSubmitHandler=(e: React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    handleUser(user,password);
    setUser("")
    setPassword("")
  }

  return (
    <>
      <div className="flex  items-center justify-center w-full h-screen bg-[#080710] overflow-hidden">
        <div className="background">
        <div className="shape1 absolute h-[200px] w-[200px] rounded-full bg-red-500 left-[-20%] top-[-30%]"></div>
        <div className="shape2 absolute h-[200px] w-[200px] rounded-full bg-blue-500 bottom-[-30%] right-[-20%]"></div>
        </div>
        <form onSubmit={onSubmitHandler} action="" className="flex formData flex-col gap-4 text-white ">
           <h3 className="self-center text-[1.5rem] text-white mb-3">Login Here</h3>
           <div>
           <label className="block mb-2 " htmlFor="user">Username</label>
           <input value={user} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setUser(e.target.value)}} type="text" className="block w-[100%] h-[3.5rem] text-black pl-2 rounded-md text-p" id="user" placeholder="Email" />
           </div>
           <div>
           <label className="block mb-2" htmlFor="pwd">Password</label>
           <input value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}} type="Password" className="block w-[100%] h-[3.5rem] text-black pl-2 rounded-md" id="pwd" placeholder="Password" />
           </div>
            <button className="text-center text-[1.2rem] font-light w-full h-[3rem] mt-3 rounded-md bg-white text-black"><b>Log In</b></button>
        </form>
      </div>
  </>
  )
}

export default Login