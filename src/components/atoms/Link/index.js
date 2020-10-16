import React from 'react'
import { LinkStyled, LinkReact } from "./styled";

const Link = ({ ...props }) => {
  if (props.to) {
    return <LinkReact {...props}/>
  }
  return <LinkStyled {...props} />
}

export { Link }