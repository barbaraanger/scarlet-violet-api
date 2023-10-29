import { Request, Response } from "express";
import { PokemonService } from "../service";
import { MongooseError } from "../types";

const pokemonService = new PokemonService();

export const fetchPokemon = (req: any, res: any) => {
    try {
        const response = pokemonService.fetchPokemon();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createPaldeaPokedex = (req: Request, res: Response) => {
    try {
        const results = pokemonService.createPaldeaPokedex()
            .then((results) => {
                results.map((result: { success: any; entry: any; error: any; }, index: number) => {
                    if (result.success) {
                        console.log(`Entry ${index + 1} was successfully inserted: ${result.entry}`)
                    } else {
                        console.log(`Error inserting entry ${index + 1} ${result.error}`)
                    }
                })
            });
        res.status(200).json(results);
        return results;
    } catch (error) {
        const errorMongoose: MongooseError = error as MongooseError;
        console.log(errorMongoose)
        res.sendStatus(500);
    }
}