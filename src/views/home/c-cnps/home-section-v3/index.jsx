import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import HomeSectionV3Wrapper from './style'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <div className='content'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem key={item.id} itemData={item} itemWidth={20} descColor={"#914669"}></RoomItem>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name={"plus"}/>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3