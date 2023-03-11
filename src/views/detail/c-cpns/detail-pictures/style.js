import styled from "styled-components";

const DetailPictureWrapper = styled.div`
  position: relative;
  .picture-list {
    .picture-wrapper {
    overflow: hidden;
    display: flex;
    height: 600px;

    .left {
      width: 50%;
      .item {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .item {
        flex-shrink: 0;
        width: 50%;
        height: 50%;
        border: 1px solid #000;

        &:nth-child(2n) {
          margin-left: -1px;
        }

        &:nth-child(-n+2) {
          position: relative;
          top: 1px;
        }
      }
    }

    .image {
      width: 100%;
      height: 100%;

      transition: all 250ms ease;

      &:hover {
        transform: scale(1.08);
      }
    }

    .item {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      .cover {
        display: none;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
      }


      &:hover .cover {
        display: none;
      }
    }

      &:hover .cover {
        display: flex;
      }

    
    
    }

    .show-btn {
      position: absolute;
      z-index: 99;
      right: 15px;
      bottom: 15px;
      line-height: 22px;
      padding: 6px 15px;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;

    }
  }
`

export default DetailPictureWrapper
