import styled from "styled-components"

const HeaderCenterWrapper = styled.div`
  z-index: 99;
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    // 可让元素脱离标准流，防止元素进行动画切换时，相互拥挤
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
    }

    ${props => props.theme.mixin.boxShadow}
  }

  .search-detail {
    position: relative;
    font-size: 16px;
    color: #222;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`

export default HeaderCenterWrapper