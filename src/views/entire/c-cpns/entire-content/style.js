import styled from "styled-components";


const EntireContentWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 30px 20px;

  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.8);
  } 
`

export default EntireContentWrapper
