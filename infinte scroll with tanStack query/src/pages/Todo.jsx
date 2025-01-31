import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
const Axios=axios.create({
    baseURL:'https://dummyjson.com/todos'
})
const Todo = () => {
    const FetchTodos=async()=>{
        const response=await Axios.get('/')
        return response.data
    }
   const {isError,isLoading,data}= useQuery({queryKey:['todos'],queryFn:FetchTodos})
   console.log(data)
     
  return (
    <>
    <div className='w-full text-center text-white text-xl py-7 space-y-4'>Todo Lists</div>
    {isError && <div>some Errro Occured</div>}
    {isLoading && <div>Loading...</div>}

    {/* {data && <div>{JSON.stringify(data,2,null)}</div>} */}
    {data?.todos?.map((todo)=>(
        <div key={todo.id} className="flex items-center m-auto justify-center gap-2 p-3 flex-col bg-blue-300 text-white shadow-2xl mb-4 max-w-2xl rounded-lg hover:ring-2 hover:ring-amber-200 ">
            <div className="font-bold">Title:{todo.id}</div>
            <div className="font-bold text-xl">To Memorize:{todo.todo}</div>
            <div className="font-bold">completed:{JSON.stringify(todo.completed)}</div>
        </div>
    ))}
    </>

  )
}

export default Todo