import styled from "styled-components";


const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  color: #fff;
  background-color: #000;

  .browser-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    .browser-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 86px;

      .close-btn {
        margin-right: 25px;
        cursor: pointer;
      }

    }

    .browser-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      position: relative;

      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        .btn {
          display: flex;
          width: 83px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          height: 100%;
        }
      }

      .picture {
        position: relative;
        height: 100%;
        overflow: hidden;
        width: 100%;
        max-width: 105vh;

        .image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 100%;
          user-select: none;
        }

        .pageChange-enter {
          transform: translateX(${props => props.isNext ? "100%": "-100%"});
          opacity: 0;
        }

        .pageChange-enter-active {
          transform: translateX(0);
          opacity: 1;
          transition: all 250ms ease;
        }

        .pageChange-exit {
          opacity: 1;
        }

        .pageChange-exit-active {
          opacity: 0;
          transition: all 250ms ease;
        }
      }  
    }

    .browser-footer {
      box-sizing: border-box;
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 100px;
      margin-top: 10px;
      color: #fff;

      .info {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 105vh;
        color: #fff;

        .desc {
          display: flex;
          justify-content: space-between;

          .toggle {
            cursor: pointer;
          }
        }

        .list {
          box-sizing: border-box;
          margin-top: 3px;
          overflow: hidden;
          transition: height 300ms ease;
          height: ${props => props.isHidden ? "0": "67px"};
          margin: 0 -8px;

          .item {
            box-sizing: border-box;
            flex-shrink: 0;
            padding: 0 8px;

            .image {
              height: 67px;
              opacity: 0.5;
              cursor: pointer;

              &.active {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
`

export default PictureBrowserWrapper
