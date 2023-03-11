import styled from "styled-components";


const EntireCategoryWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
  padding-left: 16px;

  .filter {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 1.12;
    
    .item {
      box-sizing: border-box;
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      ${props => props.theme.mixin.boxShadow}

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }

`

export default EntireCategoryWrapper
