import express from 'express';

import './database'

const app = express();
app.use(express.json());

const PORT = 3333;

app.get('/login', (request, response) => {
    response.json({
        message: "Olá, seja bem vindo!"
    })
});

app.listen(PORT, () =>console.log(`Servidor rodando na porta ${PORT}`));