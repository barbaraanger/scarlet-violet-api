import express = require('express');
import { createPaldeaPokedex, fetchPokemon } from '../controllers';

const pokemonRouter = express.Router();

pokemonRouter.get('/pokemons', fetchPokemon);
pokemonRouter.get('/pokedex', createPaldeaPokedex)

export { pokemonRouter };

