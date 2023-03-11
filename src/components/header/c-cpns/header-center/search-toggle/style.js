import styled from "styled-components";


const SearchToggleWrapper = styled.div`
  color: ${props => props.theme.filiterTopHeaderStatus ? "#fff" : ""};

  .search-toggle {
      display: flex;
      
      .item {
        position: relative;
        top: -5px;
        padding: 5px 16px;
        cursor: pointer;

        .title {
          box-sizing: border-box;
          padding-bottom: 8px;

          &.active {
            border-bottom: 2px solid ${props => props.theme.filiterTopHeaderStatus ? "#fff": "#000"};
          }
        }
      }

      .search-options {
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translateX(-50%);

        .content {
          box-sizing: border-box;
          display: flex;
          width: 850px;
          height: 66px;
          border-radius: 32px;
          border: 1px solid #ddd;
          background-color: #fff;

          .o-item {
            flex: 1;
            display: flex;
            align-items: center;
            border-radius: 32px;

          .info {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
            padding: 0 30px;
            line-height: 1.12;

            &.active {
              border-right: 2px solid #ddd;
            }

            .title {
              font-size: 12px;
              font-weight: 800;
              color: #222;
            }

            .desc {
              font-size: 14px;
              color: #666;
            }
          }
        }
      }
    }
  }


`

export default SearchToggleWrapper