import React, { memo } from 'react'
import { CSSTransition } from "react-transition-group"

import HeaderCenterWrapper from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import searchTitles from "@/assets/data/search_titles"
import SearchToggle from './search-toggle'

const HeaderCenter = memo((props) => {

  const { isSearch, onSearchDetailListen } = props

  function onSearchDetail() {
    if(!onSearchDetailListen) return
    onSearchDetailListen()
  }

  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={onSearchDetail}>
            <div className='text'>搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar />
            </div>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-detail'>
          <SearchToggle searchTitles={searchTitles} />
        </div>
      </CSSTransition>

    </HeaderCenterWrapper>
  )
})

export default HeaderCenter