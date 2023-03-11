import React, { memo, useState, useEffect } from 'react'

import HeaderRightWrapper from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'


const HeaderRight = memo(() => {

  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function onProfileClickListener(event) {

      setShowPanel(false)
    }

    window.addEventListener("click", onProfileClickListener, true)

    return () => {
      window.removeEventListener("click", onProfileClickListener)
    }
  }, [])

  function onProfileClick() {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      <div className='btns'>
        <div className='item'>登录</div>
        <div className='item'>注册</div>
        <div className='item icon_global'>
          <IconGlobal />
        </div>
      </div>

      <div className='profile' onClick={onProfileClick}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item'>注册</div>
              <div className='item'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )
        }
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight