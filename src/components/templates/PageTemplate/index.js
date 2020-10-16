import React from 'react'
import { Wrapper, Header, Content, Footer } from "./styled";



const PageTemplate = ({
  header, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}


export { PageTemplate }
