const venom = require('venom-bot')
const formatPhone = require('./helper/format').formatPhone;

const createSession = () => {
    venom
        .create({
            session: 'session-name'
        })
        .then((client) => sendMessage(client, '999999999', 'teste'))
        .catch((erro) => {
            console.log(erro);
        });
}

const sendMessage = async (client, number, message) => {
    const formatted = formatPhone(number)
    await client
        .sendText(formatted, message)
        .then((result) => {
            console.log('Result: ', result);
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro);
        });
}

module.exports = { createSession, sendMessage }