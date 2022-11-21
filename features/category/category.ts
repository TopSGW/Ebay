import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { subcategory } from "./SubMenu_Info";
import { subCategoryList } from "./SubMenu_Info";

const initialState:subcategory= {
    title:'init',
    subMenuinfo:[]
}

export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers:{
        findCategory:(state, action:PayloadAction<string>) =>{
            let subinfo:subcategory | undefined = subCategoryList.find((m)=>m.title == action.payload);
            if(typeof subinfo != "undefined"){
                state = subinfo;
                return state;
            }else{
                state = initialState;
                return state;
            }
        },
        findFinish:(state)=>{
            state = initialState;
            return state;
        }
    }
})
export const {findCategory,findFinish} = CategorySlice.actions;
export default CategorySlice.reducer