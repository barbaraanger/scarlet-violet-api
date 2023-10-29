import axios from "axios";

const pokeAPIUrl = 'https://pokeapi.co/api/v2';

export const getPokemonData = (params: { id: number }) => {
    axios.get(`${pokeAPIUrl}/pokemon/${params.id}`)
        .then((response) => {
            console.log(response)
            return response.data.types;
        }).catch((error) => {
            return error.message
        })
}