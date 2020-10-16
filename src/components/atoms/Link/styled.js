import styled, {css} from 'styled-components'
import { Link } from "react-router-dom"

const LinkStyled = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #212121;

  &:hover {
    text-decoration: underline;
  }
`;
const LinkReact = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #212121;

  &:hover {
    text-decoration: underline;
  }
`;


export { LinkStyled, LinkReact }