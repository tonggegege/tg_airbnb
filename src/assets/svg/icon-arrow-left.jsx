import PropTypes from 'prop-types'

import React, { memo } from 'react'
import styleStrToObj from './utils'

const IconArrowLeft = memo((props) => {
  const { size, color } = props

  return (
    <svg 
      viewBox="0 0 18 18" 
      role="img" 
      aria-hidden="false" 
      aria-label="previous" 
      focusable="false" 
      style={styleStrToObj(`height: ${size ? size : "12"}px; width: ${size ? size : "12"}px; display: block; fill: currentcolor; color: ${color};`)}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
    ) 
})

IconArrowLeft.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export default IconArrowLeft