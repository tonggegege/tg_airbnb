import styled from "styled-components";


const LongForItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  padding: 0 8px;
  box-sizing: border-box;

  .inner {
    position: relative;
    border-radius: 3px;
    overflow: hidden;

    .image {
      width: 100%;
    }

    .bg-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg,rgba(0,0,0,0) 3%,rgb(0,0,0) 100%);
    }

    .info {
      position: absolute;
      bottom: 28px;
      right: 0;
      left: 0;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      
      .city {
        font-size: 18px;
        font-weight: 600;
      }

      .price {
        font-size: 14px;
      }
    }
  }
`

export default LongForItemWrapper
