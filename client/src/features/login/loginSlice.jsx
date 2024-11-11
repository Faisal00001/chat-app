
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useAxiosPublic from '../../hooks/useAxiosPublic';

// Async thunk for login user
export const userLogin = createAsyncThunk(
    'users/login',
    async (_, { getState, rejectWithValue }) => {
        try {
            const loginInfo = getState().login.loginInfo;
            const axiosPublic = useAxiosPublic();
            const response = await axiosPublic.post('/users/login', loginInfo);
            return response.data; // Assuming the API returns the user data
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occurred'); // Return error message if request fails
        }
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginInfo: {
            email: "",
            password: ""
        },
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        updateLoginInfo: (state, action) => {
            state.loginInfo = { ...state.loginInfo, ...action.payload };
        },
        clearLoginInfo: (state) => {
            state.loginInfo = { email: "", password: "" };
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("User"); // Clear localStorage on logout
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => { // Changed to userLogin
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => { // Changed to userLogin
                state.loading = false;
                state.user = action.payload; // User data from successful login
            })
            .addCase(userLogin.rejected, (state, action) => { // Changed to userLogin
                state.loading = false;
                state.error = action.payload; // Error message from failed login
            });
    }
});

// Action creators are generated for each case reducer function
export const { updateLoginInfo, clearLoginInfo, logout } = loginSlice.actions;

export default loginSlice.reducer;
