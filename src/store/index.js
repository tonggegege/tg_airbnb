import { configureStore } from "@reduxjs/toolkit"

import mainReducer from "./features/main"
import homeReducer from "./features/home"
import entireReducer from "./features/entire"
import detailReducer from "./features/detail"

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store