import React from "react";
import { Avatar, Text } from "../../atoms";
import { Container } from "./styled"; 


const ListMolecula = ({img, text}) => {

  return (
  <Container>
    <Avatar src={img}/>
    <Text>{text}</Text>
  </Container>
  )

};

export { ListMolecula };