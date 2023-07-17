import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCart, postCart } from "../api/memberAPI";

const initState = {
  items: [],
  loading: false,
}

export const addCartThunk = createAsyncThunk("addCartThunk", async (item) => {
  return postCart(item)
})

export const getCartThunk = createAsyncThunk('getCartThunk', async (email) => {
  return getCart(email)
})

const cartSlice = createSlice({

  name: "cartSlice",
  
  initialState: initState,

  extraReducers: (builder) => {
    builder
      .addCase(addCartThunk.fulfilled, (state, action) => {

        console.log(action.payload)

        state.items = action.payload

      })
      .addCase(getCartThunk.fulfilled, (state, action) => {

        console.log("getCartThunk fulfilled...")
        console.log(action.payload)

        state.items = action.payload

      })

  }

})

export default cartSlice.reducer