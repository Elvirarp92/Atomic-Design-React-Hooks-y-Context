import React from "react";
import { Wrapper, Content } from "./styled";

const GenericTemplate = ({children, ...props}) => {

console.log(props);
  return(
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
};

export { GenericTemplate };