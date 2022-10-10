import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/auth";
import { useRouter } from "next/router";
const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const Login = createAsyncThunk("loginr",login);
const loginSlice = createSlice({
  name:"loginr",
  initialState,
  reducers: {},
  extraReducers(builder) {

    builder.addCase(Login.pending,(state,{payload})=>{
      state.status = "loanding"
  })
  builder.addCase(Login.fulfilled,(state,{payload})=>{
      state.status = "succeeded"
      console.log(payload)
      state.error = null
  })
  builder.addCase(Login.rejected,(state,{payload})=>{
      state.status = "failed"
      state.error = "error"
      console.log("error")
  })
  },
});
export const loginSelector = (state) => state.login;
export default loginSlice.reducer;
