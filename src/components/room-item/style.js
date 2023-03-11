import styled from "styled-components";

const RoomItemWrapper = styled.div`
  width: ${props => props.itemWidth}%;
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;

  .slider {
    position: relative;

    &:hover .controls{
      display: block;
    }

    .controls {
      display: none;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 83px;
        z-index: 9;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        

        &.icon-left {
          left: 0;
        }

        &.icon-right {
          right: 0;
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        }
      }
    }

    .pagination-content {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;
      overflow: hidden;


      .item {
        flex-shrink: 0;
        width: 14.29%;
        display: flex;
        align-items: center;
        justify-content: center;


        .dots {
          height: 6px;
          width: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            height: 8px;
            width: 8px;
          }
        }
      }
    }

    
  }

  .cover {
      position: relative;
      padding: 66.6% 8px 0;

      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.descColor || "#767676"} ;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .ranking {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;

    .ant-rate {
      font-size: 9px;
    }

    .ant-rate-star {
      margin-right: 0px;
      color: #00848A;
    }

    .count {
      margin-left: 2px;
    }

    .count, .extra {
      position: relative;
      top: 1px;
    }
  }
`

export default RoomItemWrapper