import {createSlice} from "@reduxjs/toolkit"
const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            if(state.message.length===9){
                state.message.shift() // shift method will delete the message from top
            }
            state.message.push(action.payload) // add new element to end of array
            // state.message.unshift(action.payload) // add new element to start of array
        }
    }
})
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;