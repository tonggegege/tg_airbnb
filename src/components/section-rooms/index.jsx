import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionRoomsWrapper from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {

  const { itemWidth } = props

  const { roomlist } = props

  return (
    <SectionRoomsWrapper>
      {
        roomlist?.slice(0, 8).map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth}/>
        })
      }      
      
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomlist: PropTypes.array,
  itemWidth: PropTypes.number
}

export default SectionRooms