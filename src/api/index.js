import axios from "axios";

export const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=152')
    .then(res => res.data.results)
    .catch((err) => console.log(err));
}

