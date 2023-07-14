import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
  name: "CountSlice",
  initialState: { num: 5 },
  reducers: {
    inc: (state, param, third) => {
      console.log("inc...", state)
      console.log(param)
      console.log(">>>>>3 ",third)
      return { num: state.num + param.payload }

    },
    dec: (state, param) => {
      console.log("dec...", state)
      console.log(param)
      return { num: state.num - param.payload }
    }
  }
})

export const { inc, dec } = countSlice.actions

export default countSlice.reducer