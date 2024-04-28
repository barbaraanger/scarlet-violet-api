
export interface PokemonEspecies {
    name: string;
    url: string;
}

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonEspecies;
}