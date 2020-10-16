import React from 'react'
import { Wrapper, InnerWrapper } from "react";
import { Link } from "../../atoms";

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Link to="/">Home</Link>
      </InnerWrapper>
    </Wrapper>
  )
}

export { Header }