import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      isAlpha: false
    }
  },
  reducers: {
    changeHeaderfig(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderfig } = mainSlice.actions
export default mainSlice.reducer
