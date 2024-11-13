import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useAxiosPublic from '../../hooks/useAxiosPublic';


// Async thunk for getUserChats
export const getUserChats = createAsyncThunk(
    'chat/getUserChats',
    async (userId, { getState, rejectWithValue }) => {
        try {
            // const loginInfo = getState().login.loginInfo;
            const axiosPublic = useAxiosPublic();
            const response = await axiosPublic.get(`/chats/${userId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occurred'); // Return error message if request fails
        }
    }
);
export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        userChats: [],
    },
    reducers: {
        setUserChats: (state, action) => {
            state.userChats = action.payload;
            // localStorage.setItem("User", JSON.stringify(action.payload));
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserChats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserChats.fulfilled, (state, action) => {
                state.loading = false;
                state.userChats = action.payload;
            })
            .addCase(getUserChats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Error message from failed login
            });
    }
})

// Action creators are generated for each case reducer function
export const { setUserChats } = chatSlice.actions

export default chatSlice.reducer