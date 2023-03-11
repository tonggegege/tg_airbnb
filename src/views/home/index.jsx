import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector , shallowEqual} from 'react-redux'

import HomeBanner from './c-cnps/home-banner'
import HomeWrapper from './style'
import HomeSectionV1 from './c-cnps/home-section-v1'
import { fetchHomeGoodPriceInfoAction } from '@/store/features/home'
import { isEmptyO } from '@/utils'
import HomeSectionV2 from './c-cnps/home-section-v2'
import HomeSectionV3 from './c-cnps/home-section-v3'
import HomeLongFor from './c-cnps/home-longFor'
import { changeHeaderfig } from '@/store/features/main'

const Home = memo(() => {

  const { 
    goodPriceInfoData, 
    hightScoreInfoData, 
    discountInfoData, 
    hotRecommendInfoData, 
    plusInfoData, 
    longForInfoData
   } = useSelector((state) => ({
    goodPriceInfoData: state.home.goodPriceInfo,
    hightScoreInfoData: state.home.highScoreInfo,
    discountInfoData: state.home.discountInfo,
    hotRecommendInfoData: state.home.hotRecommendInfo,
    plusInfoData: state.home.plusInfo,
    longForInfoData: state.home.longForInfo
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeGoodPriceInfoAction())
    dispatch(changeHeaderfig({ isFixed: true, isAlpha: true }))
  }, [dispatch])

  return (
    <div>
      <HomeBanner />
      <HomeWrapper>
        { isEmptyO(goodPriceInfoData) && <HomeSectionV1 infoData={goodPriceInfoData}/> }
        { isEmptyO(hightScoreInfoData) && <HomeSectionV1 infoData={hightScoreInfoData}/> }
        
        { isEmptyO(longForInfoData) && <HomeLongFor infoData={longForInfoData}/> }

        { isEmptyO(discountInfoData) && <HomeSectionV2 infoData={discountInfoData}/> }
        { isEmptyO(hotRecommendInfoData) && <HomeSectionV2 infoData={hotRecommendInfoData}/>}

        { isEmptyO(plusInfoData) && <HomeSectionV3 infoData={plusInfoData}/> }
      </HomeWrapper>
    </div>
  )
})

export default Home