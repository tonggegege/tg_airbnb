import styled from "styled-components";

const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${props => props.footerColor};

  .info {
    display: flex;
    align-items: center;

    .title {
      margin-right: 6px;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export default SectionFooterWrapper