import * as actionsTypes from "./index"

const initialState = {
  roomPage: 0,
  roomList: [],
  roomTotal: 0,
  isLoading: true
}

export function reducer(state = initialState, actions) {
  switch(actions.type) {
    case actionsTypes.CHANGE_ROOM_PAGE: 
      return { ...state, roomPage: actions.roomPage }

    case actionsTypes.CHANGE_ROOM_LIST: 
      return { ...state, roomList: actions.roomList }

    case actionsTypes.CHANGE_ROOM_TOTAL:
      return { ...state, roomTotal: actions.roomTotal }

    case actionsTypes.CHANGE_ISLOADING: 
      return { ...state, isLoading: actions.isLoading }
      
    default: 
      return { ...state }
  }
}