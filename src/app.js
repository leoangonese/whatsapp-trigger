const express = require('express');
const { createSession, sendMessage } = require('.');
const app = express();

app.post('/sendMessage', (req, res) => {
    try {
        createSession()
        return res.status(200).send('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        return res.status(500).send('Erro ao enviar mensagem');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
