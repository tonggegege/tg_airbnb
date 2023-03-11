import styled from "styled-components";

const SectionRoomsWrapper = styled.div`
  display: flex;
  margin: 0 -8px;
  flex-wrap: wrap;
  box-sizing: border-box;

  .item {
    width: 25%;
    padding: 8px;
    box-sizing: border-box;

    .cover {
      position: relative;
      padding: 66.6% 8px 0;

      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: #767676;
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


  }
`

export default SectionRoomsWrapper