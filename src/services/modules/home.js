import tgRequest from "..";

export function fetchHomeGoodPriceInfo() {
  return tgRequest.get({
    url: "/home/goodprice"
  })
}

export function fetchHomeHighScoreInfo() {
  return tgRequest.get({
    url: "/home/highscore"
  })
}

export function fetchHomeDiscountInfo() {
  return tgRequest.get({
    url: "/home/discount"
  })
}

export function fetchHomeHotreCommenddest() {
  return tgRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function fetchHomePlusInfo() {
  return tgRequest.get({
    url: "/home/plus"
  })
}

export function fetchHomeLongForInfo() {
  return tgRequest.get({
    url: "/home/longfor"
  })
}