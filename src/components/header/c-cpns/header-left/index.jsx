import React, { memo } from 'react'

import HeaderLeftWrapper from './style'
import IconLogo from '@/assets/svg/icon_logo'


const HeaderLeft = memo(() => {

  

  return (
    <HeaderLeftWrapper>
      <div className='icon_logo'>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft