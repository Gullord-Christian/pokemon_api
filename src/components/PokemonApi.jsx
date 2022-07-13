import React, {useState} from 'react'

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = (e) => {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPokemon(data.results)
            console.log(data);
        })
    }

    return(
        <div>
            <fieldset>
                <h3>Pokemon API</h3>
                <form>
                    <button onClick={fetchPokemon} type='submit'>Fetch pokemon</button>
                </form>
            </fieldset>
            {
                pokemon.length > 0 && 
                    pokemon.map((pokemon, index) =>{
                        return(
                            <ul>
                                <li key={index}>{pokemon.name}</li>
                            </ul>
                        );
                    })
                }
        </div>
    );
}

export default PokemonApi