import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import SectionTabWrapper from './style'

const SectionTab = memo((props) => {

  const { tabNames, tabClickCallback } = props
  const [ tabIndex, setTabIndex ] = useState(0)

  function tabClick(index, item) {
    setTabIndex(index)
    tabClickCallback(item)
  }

  return (
    <SectionTabWrapper>
      <div className='scroll-content' >
        <ScrollView>
          {
            tabNames.map((item, index) => {
              return (
                <div 
                  key={item} 
                  className={classNames("item", {active: index === tabIndex})}
                  onClick={e => tabClick(index, item)}
                >
                  {item}
                </div>
              )
            })
          }
        </ScrollView>
      </div>
    </SectionTabWrapper>
  )
})

SectionTab.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTab