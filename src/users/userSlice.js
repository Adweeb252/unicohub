import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersData } from "./userApi";

const initialState = {
    user: null,
    status: "idle",
    error: null,
  };

  export const usersDataAsync = createAsyncThunk("users/usersData", async () => {
    const response = await usersData();
    return response.data;
  });
  
  const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      getUser: (state) => {
        console.table(state.user);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(usersDataAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(usersDataAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.status = "idle";
        })
        .addCase(usersDataAsync.fulfilled, (state, action) => {
          state.status = "idle";
          state.user = action.payload;
        });
    },
  });
  export const { getUser } = userSlice.actions;
  export const selectUsersInfo = (state) => state.users.user;
  export default userSlice.reducer;  