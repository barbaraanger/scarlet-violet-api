import { Pokemon } from "../models";
import { IPokemon } from "../types";

export class PokemonRepository {
    findByEntryNumber = async (entryNumber: number) => {
        try {
            const pokemon = await Pokemon.findOne({ entry_number: entryNumber }).exec();
            if (pokemon) {
                console.log("Pokemon found:", pokemon);
            } else {
                console.log("Pokemon not found");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    createMany = async (pokemons: IPokemon[]) => {
        await Pokemon.insertMany(pokemons);
    }

    entryAlreadyExists = async (entryData: IPokemon) => {
        const { entry_number } = entryData;

        const existingEntry = await Pokemon.findOne({ entry_number });

        if (existingEntry) {
            return true;
        }
        return false;
    }
}