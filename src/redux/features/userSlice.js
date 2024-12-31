import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
        state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        },
        updateUser: (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        state.users[index] = action.payload;
        },
    },
    });

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;