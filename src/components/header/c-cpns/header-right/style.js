import styled from "styled-components"

const HeaderRightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  

  .btns {
    display: flex;
    font-weight: 600;
    

    .item {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;
      color: ${props => props.theme.filiterTopHeaderStatus ? "#fff": ""};

      &.icon_global {
        margin-left: -2px;
      }

      &:hover {
        background-color: ${props => props.theme.filiterTopHeaderStatus ? "rgba(255,255,255,.1)": "#f5f5f5"}    ;
      }
    }


  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;

    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      font-weight: 600;
      box-shadow: 0 0 6px rgb(0 0 0 / 20%);
      color: #666;

      .top {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
      }

      .bottom {
        padding: 10px 0;
      }

      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
      }
    }
  }
`

export default HeaderRightWrapper