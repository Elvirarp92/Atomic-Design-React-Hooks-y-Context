import React, { useState, useEffect, useRef } from "react";
import { GenericTemplate } from "../../templates";
import { ListUsersOrganismos, AddUserOrganismo } from "../../organismos";
import { Link } from "../../atoms";
import { promiseHooks } from "../../../hooks";
import { MobileContext } from "../../../contexts";
import axios from "axios";

const cancelTokenSource = axios.CancelToken.source();

const HomePage = () => {


  const [user, setUser] = useState([]);
  const [err, setError] = useState(undefined);
  const divRef = useRef();
  const [pokemons, loading, error, setLimitState] = promiseHooks(10);


  const addUser = () => {
    setLimitState(20);
  }

  useEffect(() => {
    return () => {
      console.log("Desmontado");
    }
  }, [])

  useEffect(() => {
    if(loading === false) {
      setUser(pokemons)
    }
  }, [pokemons, loading])



  return (
    <MobileContext.Consumer>
    {
      ({mobileMenu, setMobileMenu}) => {
        return (
          <GenericTemplate mobileMenu={mobileMenu}>
            <>
              <ListUsersOrganismos arrayUser={user}/>
              <AddUserOrganismo action={addUser}/>
              <div ref={divRef}>
                REFERENCIA
              </div>
              <Link to='/about'> About </Link>
            </>
          </GenericTemplate>
        )
      }
    }
    </MobileContext.Consumer>
  )
};

export { HomePage };