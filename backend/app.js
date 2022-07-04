// Importações
const express = require('express');
require('dotenv').config();

const router = require('./src/routes');

// Iniciando o express
const app = express();
app.use(express.json());

// Iniciando as rotas
app.use(router.taskRouter);
app.use(router.userRouter);

// Selecionando a porta que ira rodar
const PORT = process.env.PORT || 3333;

// Abrindo a porta para receber chamadas
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
