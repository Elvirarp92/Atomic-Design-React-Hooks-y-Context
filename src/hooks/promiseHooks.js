import { useState, useEffect } from "react";
import axios from "axios";

const cancelTokenSource = axios.CancelToken.source();


export default function (limit = 50) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [limitState, setLimitState] = useState(limit);

  useEffect(  () => {
     
  const functionAsync = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limitState}`, {
        cancelToken: cancelTokenSource.token
      })
      const arrayPokemonsUrl = data.results.map(({url}) => url);
      const newPromisePokemon = await Promise.all(
            arrayPokemonsUrl.map(url => axios.get(url, {
                cancelToken: cancelTokenSource.token
            })
            .then(({data}) => data)
        ))
      const pokemons = newPromisePokemon.map(pokemon => {
            const _pokemon = {};
            _pokemon.text = pokemon.name;
            _pokemon.id = pokemon.id;
            _pokemon.img = pokemon.sprites.back_default;
            return _pokemon;
          })
      setPokemons(pokemons);
      setLoading(false);

    }
    catch(err) {

      if(axios.isCancel(err)) {
          console.log("Cancel");
        } else {
          console.log(err);
          setError(err);
        }

    }
  }

  functionAsync();
  
 
 
  },[limitState])

  return [ pokemons, loading, error, setLimitState];
}
