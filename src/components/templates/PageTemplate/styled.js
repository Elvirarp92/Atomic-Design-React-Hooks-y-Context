import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  min-height: 100vh;
  box-sizing: border-box;

  @media screen and (max-width: 640px) {
    padding-top: 20px;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`
const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
`

const Footer = styled.footer`
  margin-top: auto;
`

export { Wrapper, Header, Content, Footer };