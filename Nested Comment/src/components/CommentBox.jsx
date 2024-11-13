import React from 'react'
import account from '../Assets/account.svg'
import style from './commentBox.module.css'
import { addMessage, deleteMessage, setReplyState } from '../store/slices/messageReducer'
import { useDispatch } from 'react-redux'

function CommentBox({id,message,reply,inputedData,setInputedData,handleSubmit}) {
  const dispatch=useDispatch()
  console.log(handleSubmit)
  
  return (
    <div className={style['comment-container']}>
        <div className={style.logo}><img src={account} alt="logo" /></div>
        <div className={style.message_container}>
            <h2 className={style.message}>{message}</h2>
            <div className={style.data_query}>
              {!reply ?( <button onClick={()=>{
                  dispatch(setReplyState({id}))
                }}>reply</button>):(<div className={style['edit-container']}>
                  <input type="text" autoFocus  />
                  <button onClick={handleSubmit}>add</button>
                  <button onClick={()=>{dispatch(setReplyState({id}))}}>cancel</button>
                </div>)}
               
                <button onClick={()=>{
                  dispatch(deleteMessage({id}))
                }}>delete</button>
            </div>
        </div> 
    </div>
  )
}

export default CommentBox