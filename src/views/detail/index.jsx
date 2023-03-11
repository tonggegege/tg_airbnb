import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DetailPictures from './c-cpns/detail-pictures'
import { changeHeaderfig } from '@/store/features/main'
import DetailWrapper from './style'

const Detail = memo(() => {

  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeHeaderfig({ isFixed: false }))
    }, [dispatch])

  const { detailData } = useSelector((state) => ({
    detailData: state.detail.detailData
  }))

  return (
    <DetailWrapper>
      { detailData.picture_urls && <DetailPictures pictures={detailData.picture_urls}/> }
    </DetailWrapper>
  )
})

export default Detail