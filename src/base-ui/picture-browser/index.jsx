import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group"

import PictureBrowserWrapper from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import PaginationScroll from '../pagination-scroll'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {

  const { 
    pictureList, 
    onClickCloseListener,
    pageIndex
  } = props

  const [currentIndex, setCurrentIndex] = useState(pageIndex)
  const [isRight, setisRight] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = `hidden`

    return function() {
      document.body.style.overflow = `auto`
    }
  })

  function onCloseBtnClick() {
    if (!onClickCloseListener) return
    onClickCloseListener()
  }

  function onHandleClick(isNext) {    
    let index = isNext ? currentIndex + 1: currentIndex - 1
    let length = pictureList.length
    if (index < 0) {
      index = length - 1
    } else if (index === length) {
      index = 0
    }

    setisRight(isNext)
    setCurrentIndex(index)
  }

  function onToggleClick() {
    setIsHidden(!isHidden)
  }

  function onListImageClick(index) {
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isRight} isHidden={isHidden}>
      <div className='browser-wrapper'>
        <div className='browser-header'>
          <div className='close-btn' onClick={e => onCloseBtnClick()}>
            <IconClose />
          </div>
        </div>
        <div className='browser-content'>
          <div className='controls'>
            <div className='btn left' onClick={e => onHandleClick(false)}>
              <IconArrowLeft size={77} color={"#fff"} />
            </div>
            <div className='btn right' onClick={e => onHandleClick(true)}>
              <IconArrowRight size={77} color={"#fff"} />
            </div>
          </div>

          <div className='picture'>
            <SwitchTransition mode='in-out'>
              <CSSTransition 
                key={pictureList[currentIndex]}
                classNames="pageChange"
                timeout={250}
              >
                <img className='image' src={pictureList[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className='browser-footer'>
          <div className='info'>
            <div className='desc'>
              <div className='count'>
                <span>{ currentIndex + 1 }/{ pictureList.length }:room</span>
                <span> Apartment图片{ currentIndex + 1 }</span>
              </div>

              <div 
                className='toggle' 
                onClick={e => onToggleClick()}
              >
                { isHidden ? "显示": "隐藏" }照片列表
                { isHidden ? <IconTriangleArrowTop /> : <IconTriangleArrowBottom /> }
              </div>
            </div>

            <div className='list'>
                  <PaginationScroll selectIndex={currentIndex}>
                    {
                      pictureList.map((item, index) => (
                        <div className='item' key={index}>
                          <img 
                            className={classNames("image", { "active": index === currentIndex })}  
                            src={item} 
                            alt="" 
                            onClick={e => onListImageClick(index)}
                          />
                        </div>
                      ))
                    }
                  </PaginationScroll>
            </div>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureList: PropTypes.array,
  pageIndex: PropTypes.number
}

export default PictureBrowser