import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface menuState{
    is_Selected:boolean[],
    currentState:boolean
}
const initialState:menuState = {
    is_Selected:[false,false,false,false,false,false,false,false],
    currentState:false
}
export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        handle_Out:(state)=>{
            state.currentState = false;
            for(let i=0;i < 8 ; i++)state.is_Selected[i] = false;
        },
        handle_Select: (state, action: PayloadAction<number>)=>{
            for(let j = 0 ; j < 8 ; j ++)
            {
                if(j != action.payload){
                    state.is_Selected[j] = false;
                }
            }
            state.is_Selected[action.payload] = true;
            state.currentState = true; 
        }
    }
})

export const {handle_Out, handle_Select} = menuSlice.actions

export default menuSlice.reducer