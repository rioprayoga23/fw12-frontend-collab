import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  registerEmployeAction,
  registerRecruiterAction,
} from "../actions/auth";

const initialState = {
  token: null,
  role: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.role = payload.role;
    });
    build.addCase(registerEmployeAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.role = payload.role;
    });
    build.addCase(registerRecruiterAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.role = payload.role;
    });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
