import tgRequest from "..";

export function fetchEntireData(offset = 0, size = 20) {
  return tgRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}