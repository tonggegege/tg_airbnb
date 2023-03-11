import { fetchRoomDataAction } from '@/store/features/entire/actionCreators'
import { changeHeaderfig } from '@/store/features/main'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import EntireCategory from './c-cpns/entire-category'
import EntireContent from './c-cpns/entire-content'
import EntirePagination from './c-cpns/entire-pagination'
import EntireWrapper from './style'

const Entire = memo((props) => {

  const dispatch = useDispatch()

  const { roomTotal, roomList, isLoading } = useSelector((state) => ({
    roomTotal: state.entire.roomTotal,
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchRoomDataAction(0))
    dispatch(changeHeaderfig({ isFixed: true }))

    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireCategory></EntireCategory>
      { roomList && <EntireContent roomTotal={roomTotal} roomsList={roomList} isLoading={isLoading}></EntireContent> }
      <EntirePagination roomTotal={roomTotal}/>
    </EntireWrapper>
  )
})


export default Entire