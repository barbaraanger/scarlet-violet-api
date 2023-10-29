import { MongooseError } from "mongoose";

import mongoose = require('mongoose');

const database = 'pokemon-api';
const url = `mongodb://127.0.0.1:27017/${database}`;

export async function connectToMongoDB() {
    mongoose.connect(url)
        .then(() => console.log("successfully connected!"))
        .catch((error: MongooseError) => console.log(error));
}

