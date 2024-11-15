import { createSlice } from "@reduxjs/toolkit";

let list=[ {
    id:crypto.randomUUID(),
    message:'hello world! how are you?',
    reply:false,
    replies:[
    {id:crypto.randomUUID(),
        message:'I am fine. wau?',
        reply:false,
        replies:[]}
     ]
},
]
const messageReducer=createSlice({
    name:'messages',
    initialState:{
        list,
    },
    reducers:{
        addMessage(state,action){
            const {parentId,newData}=action.payload;
            const addReply=(messages)=>{
                
                if(parentId){
                    for(let i=0;i<messages.length;i++){
                        if(messages[i].id===parentId){
                            messages[i].replies.push(newData)
                            return true
                        }
                        else if(messages[i].replies.length>0){
                            const ispushed=addReply(messages[i].replies)
                            if(ispushed){
                                return true
                            }
                        }
                    }
                }
                    else{
                    state.list.push(newData)
                }
                return false
                }
                addReply(state.list)
        },
        deleteMessage(state, action) {
            const { id } = action.payload;
          
            const deleteReply = (messages) => {
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].id === id) {
                  messages.splice(i, 1); 
                  return true; 
                } else if (messages[i].replies.length > 0) {
                  const isDeleted = deleteReply(messages[i].replies);
                  if (isDeleted) {
                    return true;
                  }
                }
              } 
              return false; 
            };
            deleteReply(state.list);
          },
        setReplyState(state,action){
            const {id}=action.payload
            const toggleReply=(message)=>{
                for(let i=0;i< message.length;i++){
                    if(message[i].id===id){
                        message[i].reply=!message[i].reply;
                        return true;
                    }
                    else if(message[i].replies.length>0){
                        const found=toggleReply(message[i].replies)
                        if(found) return true;
                    }
                }
                return false;
            }
         toggleReply(state.list)
        },



    }
}

)

export const {addMessage,setReplyState,deleteMessage}=messageReducer.actions
export  default messageReducer.reducer
