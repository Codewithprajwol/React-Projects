import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage, deleteMessage, setReplyState } from "../store/slices/messageReducer";


  function useCommentAction(){
    const [data,setData]=useState('')
    const dispatch=useDispatch()

  const handleChange = (e) => {
    setData(e.target.value);
  };

    const handleSubmit=(parentId)=>{
        const newData={
            id:crypto.randomUUID(),
            message:data,
            reply:false,
            replies:[]
        }
        if(newData.message){
            dispatch(addMessage({parentId,newData}))
        }
        setData('');

    }
    const handleReplyState=(id)=>{
        dispatch(setReplyState({id}))
    }
    const deleteMsg=(id,replies)=>{
        dispatch(deleteMessage({id,replies}))
    }
     
    return {
        handleSubmit,
        handleReplyState,
        deleteMsg,
        handleChange,
        data
    }
}
export default useCommentAction;