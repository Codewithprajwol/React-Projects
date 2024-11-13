import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './slices/messageReducer'


const store=configureStore({
    reducer:{
        message:messageReducer
    }
})

export default store