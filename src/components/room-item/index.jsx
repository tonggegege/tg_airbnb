import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel  } from 'antd';

import RoomItemWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import PaginationScroll from '@/base-ui/pagination-scroll';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeDetailData } from '@/store/features/detail';
import { useNavigate } from 'react-router-dom';

const RoomItem = memo((props) => {
  const { itemData, itemWidth, descColor } = props 
  const [selectIndex, setSelectIndex] = useState(0)

  const carouselRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onHandleClick = function(isRight, event) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    let index = isRight ? selectIndex + 1 : selectIndex - 1

    let length = itemData.picture_urls.slice(0, 8).length

    if (index === length) {
      index = 0
    } else if(index === -1) {
      index = length - 1
    }

    setSelectIndex(index)
    event.stopPropagation()
  }

  function onDetailClick(item) {
    if (!item.picture_urls) return
    
    dispatch(changeDetailData(item))

    navigate("/detail")

  }

  const singerPicture = (
    <div className='cover'>
      <img className='image' src={ itemData.picture_url } alt="" />
    </div>
  )

  const morePicture = (
    <div className='slider'>

      <div className='controls'>
        <div className='item icon-left' onClick={e => onHandleClick(false, e)}><IconArrowLeft size={30} color={"#fff"}/></div>
        <div className='item icon-right' onClick={e => onHandleClick(true, e)}><IconArrowRight size={30} color={"#fff"}/></div>
      </div>

      <div className='pagination-content'>
        <PaginationScroll selectIndex={selectIndex}>
          {
            itemData.picture_urls?.slice(0, 8).map((item, index) => {
              return (
                <div key={index} className='item'>
                  <span className={classNames('dots', {"active": index === selectIndex})} ></span>
                </div>
              )
            })
          }
        </PaginationScroll>

        
      </div>

      <Carousel dots={false} ref={carouselRef}>
          {
            itemData?.picture_urls?.slice(0, 8).map((item, index) => {
              return (
                <div className='cover' key={index}>
                  <img  className='image' src={ item } alt="" />
                </div>
              )
            })
          }
      </Carousel>
    </div>
  )

  return (
    <RoomItemWrapper itemWidth={itemWidth} descColor={descColor} onClick={e => onDetailClick(itemData)}>

      {
        !itemData.picture_urls ?  singerPicture : morePicture 
      }

      <div className='desc'>{ itemData.verify_info.messages.join(" · ") }</div>

      <div className='name'>{ itemData.name }</div>

      <div className='price'>￥{itemData.price}/晚</div>

      <div className='ranking'>

        <Rate defaultValue={itemData.star_rating ?? 5} />

        <span className='count'>{ itemData.reviews_count }</span>

        {
          itemData.bottom_info && <span className='extra'> ·{ itemData.bottom_info.content }</span>
        }
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem