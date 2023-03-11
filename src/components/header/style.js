import styled from "styled-components"

export const HeaderWrapper = styled.div`
  position: relative;
  border-bottom: ${props => props.theme.filiterTopHeaderStatus ? "": "1px solid rgba(233,233,233,1)"} ;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: ${props => props.theme.filiterTopHeaderStatus ? "rgba(255,255,255,0)": "#fff"};
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: ${props => props.theme.filiterTopHeaderStatus ? "rgba(255,255,255,0)": "#fff"};

    .top {
      display: flex;
      height: 80px;
      align-items: center;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: rgba(0,0,0,.3);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "90px": "0px"};
  
`