import styled from "styled-components";


const ScrollViewWrapper = styled.div`
  width: 100%;
  position: relative;

  .control {
    z-index: 9;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 14%);
    cursor: pointer;
  }

  .icon-arrow-left {
    left: -20px;
  }

  .icon-arrow-right {
    right: -20px;
  }

  .scroll {
    overflow: hidden;
    .scroll-view {
      display: flex;
      transition: all 250ms ease;
    }
  }

  
`

export default ScrollViewWrapper