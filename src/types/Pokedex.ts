import { PokemonEntry } from ".";

export interface Pokedex {
    descriptions: Description[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: Names[];
    pokemon_entries: PokemonEntry[];
}

interface Names {
    language: { name: string; url: string };
    name: string;
}

interface Language {
    name: string;
    url: string;
}
interface Description {
    description: string;
    language: Language;
}