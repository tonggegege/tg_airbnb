import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tab'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import HomeSectionV2Wrapper from './style'

const HomeSectionV2 = memo((props) => {
  // useState只会渲染一次（组件刷新也只会渲染一次）
  const { infoData } = props
  const tabNames = infoData.dest_address.map(item => item.name)
  const name = tabNames[0]
  const [tabName, setTabName] = useState(name)
  
  const tabClickHandle = useCallback(function (item) {
    setTabName(item)
  }, [])

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <SectionTab tabNames={tabNames} tabClickCallback={tabClickHandle}/>
      <SectionRooms roomlist={infoData.dest_list[tabName]} itemWidth={33.33333}/>
      <SectionFooter name={tabName}/>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2