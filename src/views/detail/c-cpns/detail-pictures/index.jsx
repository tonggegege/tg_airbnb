import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import DetailPictureWrapper from './style'

const DetailPictures = memo((props) => {
  const { pictures } = props
  const [showBrowser, setShowBrowser] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)


  function onItemClick(index, event) {
    setPageIndex(index)
    setShowBrowser(true)

    event.stopPropagation()
  }

  const showPictureList = (
    <div className='picture-list'>
        <div className='picture-wrapper'>
          <div className='left'>
            <div className='item'>
              <img 
                className='image' 
                src={pictures[0]} 
                alt="" 
                onClick={e => onItemClick(0, e)}
              />
              <div className='cover'></div>
            </div>
          </div>
          <div className='right'>
            {
              pictures.slice(1, 5).map((item, index) => {
                return (
                  <div 
                    className='item' 
                    key={index}>
                    <img 
                      className='image' 
                      src={item} 
                      alt="" 
                      onClick={e => onItemClick(index + 1, e)}
                    />
                    <div className='cover'></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='show-btn' onClick={e => onItemClick(0, e)}>显示照片</div>
    </div>
  )

  return (
    <DetailPictureWrapper>
      {
        !showBrowser ? showPictureList : (
          <PictureBrowser 
            pictureList={pictures} 
            onClickCloseListener={e => setShowBrowser(false)}
            pageIndex={pageIndex}
          />
      )}
    </DetailPictureWrapper>
  )
})

DetailPictures.propTypes = {
  pictures: PropTypes.array
}

export default DetailPictures


