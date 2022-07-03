// bibliotecas
const express = require('express');
const connection = require('./src/models/connection');
require('dotenv').config();

// iniciando o express
const app = express();
app.use(express.json());
// selecionando a porta que ira rodar
const PORT = process.env.PORT || 3333;

app.get('/', async (req, res) => {
  const [response] = await connection.execute('SELECT * FROM OrganizadorDeTarefas.users');
  res.send(response);
});

// abrindo a porta para receber chamadas
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
