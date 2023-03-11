import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import SectionFooterWrapper from './style'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props

  const navigate = useNavigate()

  let message = "显示更多房源"

  if(name) {
    message = `显示更多${name}房源`
  } 

  function navigato() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper footerColor={name ? "#00848A": "#000"}>
      <div className='info' onClick={e => navigato()}>
        <span className='title'>{message}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter