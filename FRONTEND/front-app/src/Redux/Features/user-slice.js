import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin:(state, action) => {
            state.user = action.payload
        }
    }
})

export const { setLogin } = userSlice.actions;
export default userSlice.reducer