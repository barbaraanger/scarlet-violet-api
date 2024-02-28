import { entryAlreadyExists } from "../helpers";
import { Pokemon } from "../models/PokemonModel";
import { getPokemonData } from "../pokeAPI";
import { paldeaPokedex } from '../pokedex';

export class PokemonService {

    fetchPokemon = async () => {
        paldeaPokedex.map((entry) => {
            const pokemonSchema = new Pokemon(entry);
            pokemonSchema.save()
        })

        return Pokemon.find({});
    }

    createPaldeaPokedex = async () => {
        const results: any = []
        try {
            paldeaPokedex.map(async (entry) => {
                if (await entryAlreadyExists(entry)) {
                    results.push({ success: false });
                } else {
                    const { entry_number } = entry;
                    const newEntry = new Pokemon(entry);
                    const pokemonTypes = getPokemonData({ id: entry_number });
                    console.log(pokemonTypes)
                    try {
                        const savedEntry = await newEntry.save();
                        console.log('New entry saved: ', savedEntry);
                        results.push({ success: true, entry: savedEntry });
                        return savedEntry;
                    } catch (error) {
                        console.error('Error saving new entry:', error);
                        return error;
                    }
                }
            })
        } catch (error: any) {
            results.push({ success: false, error: error.message })
        }
        return results
    }
    fetchPokemonTypes(entryNumber: Number) {

    }
}
