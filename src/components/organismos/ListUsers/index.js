import React from "react";
import { ListMolecula } from "../../moleculas";

const ListUsersOrganismos = ({arrayUser}) => {

  return (
  <>
    {arrayUser.map(({img, text, id}) => {
      return <ListMolecula key={id} img={img} text={text}/>
      })
    }
  </>)
};

export { ListUsersOrganismos};