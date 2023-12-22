import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        showLoading : (state) =>{
            state.user = action.payload;
        },
        
    }
});

export const { setUser } = userSlice.actions;
