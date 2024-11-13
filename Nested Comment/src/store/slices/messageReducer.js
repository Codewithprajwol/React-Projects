import { createSlice } from "@reduxjs/toolkit";

let list=[ {
    id:crypto.randomUUID(),
    message:'love',
    reply:false
},
{
    id:crypto.randomUUID(),
    message:'you',
    reply:false

},
{
    id:crypto.randomUUID(),
    message:'lot',
    reply:false

},]
const messageReducer=createSlice({
    name:'messages',
    initialState:{
        list,
        // reply:false,
    },
    reducers:{
        addMessage(state,action){
            state.list.push(action.payload)
        },
        deleteMessage(state,action){
            const index = state.list.findIndex((message) => message.id === action.payload.id);
            state.list.splice(index,1);
        },
        setReplyState(state,action){
            const index = state.list.findIndex((message) => message.id === action.payload.id);

            if (index !== -1) {
                // Update the specific message to include the `reply: true` property
                state.list[index] = {
                    ...state.list[index],
                    reply: !state.list[index].reply,
                };
            }
            console.log(JSON.parse(JSON.stringify(state)))
        },



    }
}

)

export const {addMessage,setReplyState,deleteMessage}=messageReducer.actions
export  default messageReducer.reducer
