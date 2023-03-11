import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import EntireContentWrapper from './style'

const EntireContent = memo((props) => {
  const {  roomTotal, roomsList, isLoading } = props
  
  return (
    <EntireContentWrapper>
      <div className='title'>{roomTotal}多处住所</div>

      <div className='list'>
        {
          roomsList.map(item => {
            return (
              <RoomItem key={item._id} itemData={item} itemWidth={20}></RoomItem>
            )
          })
        }
      </div>

      { isLoading && <div className='cover'></div> }
    </EntireContentWrapper>
  )
})


EntireContent.propTypes = {
  roomsList: PropTypes.array,
  roomTotal: PropTypes.number,
}

export default EntireContent