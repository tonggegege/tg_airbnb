import React, { memo, useEffect, useRef} from 'react'

import PaginationScrollWrapper from './style'

const PaginationScroll = memo((props) => {

  const { selectIndex } = props

  const contentRef = useRef()

  useEffect(() => {
    const contentEl = contentRef.current
    const itemEl = contentRef.current.children[selectIndex]

    const itemWidth = itemEl.clientWidth
    const itemOffsetLeft = itemEl.offsetLeft

    const contentWidth = contentEl.clientWidth
    const contentScrollWidth = contentEl.scrollWidth

    let distance = itemWidth * 0.5 + itemOffsetLeft - contentWidth * 0.5

    // 左边界
    if (distance < 0) distance = 0
    // 右边界 详看笔记图片
    const totalDistance = contentScrollWidth - contentWidth
    if (distance > totalDistance) distance = totalDistance

    contentEl.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <PaginationScrollWrapper>
      <div className='content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </PaginationScrollWrapper>
  )
})


export default PaginationScroll