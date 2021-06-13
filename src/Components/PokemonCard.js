import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PokemonCard () {

    const [pokemon, setPokemon] = useState(null);
    console.log("WHAT IS STATE?" , pokemon);

  useEffect(() => {
    console.log("ON MOUNT:");
    async function fetchPokemon() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/jigglypuff"
      );
      console.log(response);
      setPokemon(response.data); // trigger rerender
    }

   fetchPokemon();
  }, []);

    console.log(pokemon);

    return (
        
        <div>
      {pokemon ? (
         <>
          <h1>{pokemon.name}</h1>
      {pokemon.sprites ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        ) : ( 
          null
        )
       }
          <h2> Weight:{pokemon.weight}</h2>
          <h2>Number of moves: 
          {pokemon.moves.length}

          </h2>
        <h2>Abilities</h2>
          <h3> 
            {pokemon.abilities.map((ability) => {
              console.log(ability); // { ability: { name: "stomp" }}
              return <p>{ability.ability.name}</p>;
            })}
          </h3>
          
          </>
      ) : (
        <h3>Loading</h3>
      )}
    </div>


    )
}