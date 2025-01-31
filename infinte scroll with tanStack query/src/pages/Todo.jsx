import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
const Axios=axios.create({
    baseURL:'https://dummyjson.com'
})
const Todo = () => {
    const [pageCount,setPageCount]=useState(0)
    const FetchTodos=async()=>{
        const response=await Axios.get(`/todos?limit=3&skip=${pageCount*3}`)
        return response.data
    }
   const {isError,isLoading,data}= useQuery({queryKey:['todos',pageCount],queryFn:FetchTodos,placeholderData:keepPreviousData})
   
   const deleteTodo=async(id)=>{
    await Axios.delete(`/todos/${id}`)
   }
   useMutation({mutationFn:(id)=>deleteTodo(id)})

     
  return (
    <>
    <div className='w-full text-center text-white text-xl py-7 space-y-4'>Todo Lists</div>
    {isError && <div>some Errror Occured</div>}
    {isLoading && <div>Loading...</div>}

    {/* {data && <div>{JSON.stringify(data,2,null)}</div>} */}
    {data?.todos?.map((todo)=>(
        <div key={todo.id} className="flex items-center m-auto justify-center min-h-32 gap-2 p-3 flex-col bg-blue-300 text-white shadow-2xl mb-4 max-w-2xl rounded-lg hover:ring-2 hover:ring-amber-200 ">
            <div className="font-bold">Todo no: {todo.id}</div>
            <div className="font-bold text-xl">{todo.todo}</div>
            <div className="font-bold">completed: {JSON.stringify(todo.completed)}</div>
            <button onClick={()=>deleteTodo(todo.id)} className='px-4 py-2 bg-green-700 rounded-lg cursor-pointer'>delete</button>
        </div>
    ))}
    <div className="flex items-center justify-center gap-2">
        <button disabled={pageCount===0} onClick={()=>setPageCount((prevCount)=>prevCount-1)} className='px-4 py-2 text-white rounded-xl bg-green-900 cursor-pointer hover:bg-green-500 transition-all duration-300 '>previous</button>
        <p>{pageCount+1}</p>
        <button onClick={()=>setPageCount((prevCount)=>prevCount+1)} className='px-4 py-2 text-white rounded-xl bg-green-900  cursor-pointer hover:bg-green-500 transition-all duration-300'>next</button>
    </div>
    </>

  )
}

export default Todo