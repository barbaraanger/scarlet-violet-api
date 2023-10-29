import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    entry_number: Number,
    pokemon_species: {
        name: String,
        url: String
    },
    types: [String]
})
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export { Pokemon };

