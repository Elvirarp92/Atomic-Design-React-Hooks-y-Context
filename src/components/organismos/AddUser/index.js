import React from "react";
import { Button } from "../../atoms"

const AddUserOrganismo = ({action}) => {


  return (
    <Button onClick={action}>
      Add User
    </Button>
  )
};

export { AddUserOrganismo }