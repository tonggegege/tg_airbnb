import styled from "styled-components"

const HeaderLeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.primaryColor};
  color: ${props => props.theme.filiterTopHeaderStatus ? "#fff": ""};
  .icon_logo {
    margin-left: 24px;
    
  }
`

export default HeaderLeftWrapper