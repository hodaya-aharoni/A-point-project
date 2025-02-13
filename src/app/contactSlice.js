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
            state.currentContact = action.payload;
        }
        ,
        statusStar: (state, action) => {
            state.currentContact = action.payload;
            state.currentContact = {
                ...action.payload,    
                isMain: 1-action.payload.isMain      
            };

                state.arr = state.arr.map(item =>
                    item.id === action.payload.id ? state.currentContact : item
                );
            


        }

    }
})

export const { statusStar, updateContact, insert, addContactToArr, setCurrentContact } = contactSlice.actions;
export default contactSlice.reducer;