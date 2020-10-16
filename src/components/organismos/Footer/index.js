import React from 'react'
import { Text, Link } from "../../atoms";
import { Wrapper, Credits } from "./styled";




const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        <Text> Footer </Text>
        <Link to="/">Home</Link>
      </Credits>
    </Wrapper>
  )
}

export { Footer }