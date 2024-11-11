import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const axiosPublic = useAxiosPublic();

// Async thunk for registering user
export const registerUser = createAsyncThunk(
    'users/register',
    async (_, { getState, rejectWithValue }) => {
        try {
            const registerInfo = getState().register.registerInfo;// Adjusted path 
            console.log(registerInfo)
            const response = await axiosPublic.post('/users/register', registerInfo);
            return response.data; // Assuming the API returns the newly created user data
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occurred'); // Return error message if request fails
        }
    }
);

// Slice for managing user registration state
export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        registerInfo: {
            name: "",
            email: "",
            password: ""
        },
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        updateRegisterInfo: (state, action) => {
            state.registerInfo = { ...state.registerInfo, ...action.payload };
        },
        clearRegisterInfo: (state) => {

            state.registerInfo = { name: "", email: "", password: "" };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // User data from successful registration
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Error message from failed registration
            });
    }
});

// Action creators are generated for each case reducer function
export const { updateRegisterInfo, clearRegisterInfo } = registerSlice.actions;

// Exporting the reducer
export const registerReducer = registerSlice.reducer;
