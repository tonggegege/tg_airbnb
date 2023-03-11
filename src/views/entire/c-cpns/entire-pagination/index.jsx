import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Pagination } from 'antd';

import EntirePaginationWrapper from './style'
import { fetchRoomDataAction } from '@/store/features/entire/actionCreators';

const EntirePagination = memo((props) => {
  const { roomTotal } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [currentCount, setCurrentCount] = useState(1)

  const dispatch = useDispatch()

  

  const onPageChangeClick = useCallback((page) => {
    const count = (page - 1) * 20 + 1
    setCurrentCount(count)
    setCurrentPage(page)
    dispatch(fetchRoomDataAction(page - 1))
    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <EntirePaginationWrapper>
        <div className='info'>
          <Pagination 
            current={currentPage}
            total={roomTotal}
            pageSize={20} 
            showSizeChanger={false}
            onChange={onPageChangeClick}
          />

          <div className='desc'>
            第 { currentCount } - { (currentPage) * 20 }个房源，共超过{ roomTotal }个
          </div>
        </div>
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes = {
  roomTotal: PropTypes.number
}

export default EntirePagination