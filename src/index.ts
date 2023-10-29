import { connectToMongoDB } from './db';
import { pokemonRouter } from './routes';
import express = require('express');
import bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

connectToMongoDB();

app.use(express.json());
app.use(bodyParser.json());

app.use(pokemonRouter);

app.get('/', (req, res) => {
  res.send('Hello, Node.js with MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
