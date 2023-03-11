import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { 
  fetchHomeGoodPriceInfo, 
  fetchHomeHighScoreInfo, 
  fetchHomeDiscountInfo, 
  fetchHomeHotreCommenddest, 
  fetchHomePlusInfo,
  fetchHomeLongForInfo
 } from "@/services"

export const fetchHomeGoodPriceInfoAction = createAsyncThunk("fetchdata", (extraInfo, { dispatch, getState }) => {
  fetchHomeGoodPriceInfo().then(res => {
    dispatch(changeGoodPriceInfo(res))
  })

  fetchHomeHighScoreInfo().then(res => {
    dispatch(changeHighScoreInfo(res))
  })

  fetchHomeDiscountInfo().then(res => {
    dispatch(changeDiscountInfo(res))
  })

  fetchHomeHotreCommenddest().then(res => {
    dispatch(changeHotRecommendInfo(res))
  })

  fetchHomePlusInfo().then(res => {
    dispatch(changePlusInfo(res))
  })

  fetchHomeLongForInfo().then(res => {
    dispatch(changeLongForInfo(res))
  })
  
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    plusInfo: {},
    longForInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload
    },
    changeLongForInfo(state, { payload }) {
      state.longForInfo = payload
    }
  } 
})

export const { 
  changeGoodPriceInfo, 
  changeHighScoreInfo, 
  changeDiscountInfo, 
  changeHotRecommendInfo, 
  changePlusInfo,
  changeLongForInfo
 } = homeSlice.actions

export default homeSlice.reducer