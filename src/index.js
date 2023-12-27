const venom = require('venom-bot')
const formatPhone = require('./helper/format').formatPhone;

const createSession = () => {
    venom
        .create({
            session: 'session-name'
        })
        .then((client) => sendMessage(client, '51985580860', 'teste'))
        .catch((erro) => {
            console.log(erro);
        });
}

createSession()

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