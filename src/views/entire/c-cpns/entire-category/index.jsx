import React, { memo, useState } from 'react'

import EntireCategoryWrapper from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireCategory = memo((props) => {

  const [ CategoryArray, setCategoryArray ] = useState([])
  
  function onCategoryClick(item, index) {
    let newCategoryArray = [...CategoryArray]
    
    if (newCategoryArray.includes(item)) {
      const itemIndex = newCategoryArray.findIndex(filterItem => item === filterItem)
      newCategoryArray.splice(itemIndex, 1)
    } else {
      newCategoryArray.push(item)
    }

    setCategoryArray(newCategoryArray)

  }

  return (
    <EntireCategoryWrapper>
      <div className='filter'>
        {
          filterData.map((item, index) => {
            return (
              <div 
                key={item}
                className={classNames("item", { "active": CategoryArray.includes(item) })}
                onClick={e => onCategoryClick(item, index)}

              >{item}</div>
            )
          })
        }
      </div>
    </EntireCategoryWrapper>
  )
})


export default EntireCategory