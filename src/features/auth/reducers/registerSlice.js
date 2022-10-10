import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singUp } from "../actions/auth";
import { useRouter } from "next/router";
const initialState = {
  status: "idle",
  data: {},
  error: null,
};

export const signUp = createAsyncThunk("registers",singUp);
const registerSlice = createSlice({
  name:"registers",
  initialState,
  reducers: {},
  extraReducers(builder) {

    builder.addCase(signUp.pending,(state,{payload})=>{
      state.status = "loanding"
  })
  builder.addCase(signUp.fulfilled,(state,{payload})=>{
      state.status = "succeeded"
      console.log(payload)
      state.error = null
  })
  builder.addCase(signUp.rejected,(state,{payload})=>{
      state.status = "failed"
      state.error = "error"
      console.log("error")
  })
  },
});
export const registerSelector = (state) => state.register;
export default registerSlice.reducer;
