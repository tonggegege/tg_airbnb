import React, { memo, useRef, useState } from 'react'

import { HeaderWrapper, SearchAreaWrapper } from "./style"
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {

  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  const { isFixed, isAlpha } = headerConfig

  const { scrollY } = useScrollPosition()
  // 记录上一次scrollY的变量
  let prevScroll = useRef(0)
  if(!isSearch) prevScroll.current = scrollY
  if (isSearch && Math.abs(scrollY - prevScroll.current) > 30) {
    setIsSearch(false)
  }


  function onSearchDetail() {
    setIsSearch(true)
  }

  // 过滤cover
  const filiterTopHeaderStatus = isAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ filiterTopHeaderStatus }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={ filiterTopHeaderStatus || isSearch } onSearchDetailListen={onSearchDetail} />
            <HeaderRight />
          </div>

          <SearchAreaWrapper isSearch={ filiterTopHeaderStatus || isSearch } />
        </div>

        { isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header