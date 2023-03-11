import PaginationScroll from '@/base-ui/pagination-scroll'
import React, { memo, useState } from 'react'
import DemoWrapper from './style'

const Demo = memo((props) => {

  const [array] = useState(["abc", "cba", "nba", "123", "456", "678"])
  const [selectIndex, setSelectIndex] = useState(0)

  function onHandlerClick(isRight) {
    let index = isRight ? selectIndex + 1 : selectIndex - 1
    let length = array.length

    if (index === length) {
      index = 0
    } else if(index === -1) {
      index = length - 1
    }
    setSelectIndex(index)
    
  }

  return (
    <DemoWrapper>
      <button onClick={e => onHandlerClick(false)}>上一个</button>
      <button onClick={e => onHandlerClick(true)}>下一个</button>
      <div className='pagination-scroll'>
        <PaginationScroll selectIndex={selectIndex}>
          {
            array.map((item) => {
              return (
                <button key={item}>{item}</button>
              )
            })
          }
        </PaginationScroll>
      </div>
    </DemoWrapper>
  )
})

export default Demo