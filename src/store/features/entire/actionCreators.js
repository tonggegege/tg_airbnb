import { fetchEntireData } from "@/services"
import * as actionTypes from "./index"

export const changeRoomPageAction = (roomPage) => ({
  type: actionTypes.CHANGE_ROOM_PAGE,
  roomPage
}) 

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeRoomTotalAction = (roomTotal) => ({
  type: actionTypes.CHANGE_ROOM_TOTAL,
  roomTotal
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_ISLOADING,
  isLoading
})

export const fetchRoomDataAction = (page) => {
  return function(dispatch, getState) {
    const offset = page * 20
    dispatch(changeRoomPageAction(page))
    dispatch(changeIsLoadingAction(true))
    
    fetchEntireData(offset).then(res => {
      dispatch(changeRoomListAction(res.list))
      dispatch(changeRoomTotalAction(res.totalCount))
      dispatch(changeIsLoadingAction(false))
    })
  }
}