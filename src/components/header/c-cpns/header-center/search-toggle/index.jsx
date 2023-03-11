import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import SearchToggleWrapper from './style'


const SearchToggle = memo((props) => {
  const { searchTitles } = props

  const [ currentTitleIndex, setCurrentTitleIndex ] = useState(0)

  function changeCurrentTitleIndex(index) {
    setCurrentTitleIndex(index)
  }

  const length = searchTitles[currentTitleIndex].searchInfos.length

  return (
    <SearchToggleWrapper>
      <div className='search-toggle'>
          {
            searchTitles.map((item, index) => {
              return (
                <div className='item' key={index} onClick={e => changeCurrentTitleIndex(index)}> 
                  <span className={classNames("title", { active: index === currentTitleIndex })} >{item["title"]}</span> 
                </div>
              )
            })
          }

          <div className='search-options'>
            <div className='content'> 
              {
                searchTitles[currentTitleIndex].searchInfos.map((item, index) => {
                  return (
                    <div className='o-item' key={index}>
                      <div className={classNames('info', { active: index !== length - 1 })} >
                        <div className='title'>{item.title}</div>
                        <div className='desc'>{item.desc}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          
        </div>
    </SearchToggleWrapper>
  )
})

SearchToggle.propTypes = {
  searchTitles: PropTypes.array
}

export default SearchToggle