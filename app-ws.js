//WebSocket Valendo
const WebSocket = require('ws')

function onError(ws, err){
    console.error(`onError: ${err.message}`)
}

function onMessage(ws, data){
    console.log(`onMessage: ${data}`)
}

function onConnection(ws, req){
    ws.on('message', data => onMessage(ws,data));
    ws.on('error', error => onError(ws,error))
    console.log(`onConnection`)
}

//server = servidor HTTP a ser exportado
/* a função exportada cria um servidor (WebSocket.Server), chama um callback para cada conexão feita ao servidor (wss.on)*/ 
module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    })

    wss.on('connection', onConnection)

    console.log('Servidor WebSocket rodando')
    return wss
}