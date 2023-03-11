import styled from "styled-components";

const SectionTabWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  .scroll-content {
    .item {
      box-sizing: border-box;
      flex-shrink: 0;
      flex-basis: 120px;
      padding: 14px 16px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 17px;
      text-align: center;
      border: 0.5px solid #D8D8D8;
      white-space: nowrap;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: #00848A;
      }

      ${props => props.theme.mixin.boxShadow}
    }
  }
`

export default SectionTabWrapper