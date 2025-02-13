import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    arr: [],
    currentContact: null
}

const contactSlice = createSlice({

    name: "contact",
    initialState,
    reducers: {
        addContactToArr: (state, action) => {
            let newID = { ...action.payload, id: state.arr[state.arr.length - 1].id + 1 }
            state.arr.push(action.payload)
        },
        updateContact: (state, action) => {
            const index = state.arr.findIndex(c => c.id === action.payload.id);
            if (index !== -1)
                state.arr[index] = { ...state.arr[index], ...action.payload };
        }
        ,
        insert: (state, action) => {
            state.arr = action.payload;
        },
        setCurrentContact: (state, action) => { 
            state.currentContact = action.payload; }  
        
    }
})

export const {updateContact,insert,addContactToArr,setCurrentContact} = contactSlice.actions;
export default contactSlice.reducer;