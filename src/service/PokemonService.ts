import axios from "axios";
import { PokemonRepository } from "../repository"
import { PokemonEntry } from "../types";

export const POKE_API_PALDEA = "https://pokeapi.co/api/v2/pokedex/31/";

export class PokemonService {
    pokemonRepository: PokemonRepository;

    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }

    fetchAndSaveData = async () => {
        const results: any = []

        try {
            const response = await axios.get(POKE_API_PALDEA);
            const pokemons = response.data.results.map((pokemon: PokemonEntry) => pokemon);
            results.push({ success: true, saved: pokemons })
            await this.pokemonRepository.createMany(pokemons);
        } catch (error: any) {
            results.push({ success: false, error: error.message })
        }
        return results
    }

    fetchPokemonTypes() {
        // Placeholder implementation
    }
}
