import { Pokemon } from "../models";
import { PokemonType } from "../types/Pokemon";

export async function entryAlreadyExists(entryData: PokemonType) {
  const { entry_number } = entryData;

  const existingEntry = await Pokemon.findOne({ entry_number });

  if (existingEntry) {
    return true;
  }
  return false;
}