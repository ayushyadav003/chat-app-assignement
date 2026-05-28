const SERVER_URL = 'ws://localhost:5000';

let socket = null;

//connection

export const connectSocket = () => {
 console.log(`Connecting to WebSocket at ${SERVER_URL}...`)

//  dummy connection
//     socket = new WebSocket(SERVER_URL)

socket = {
    connected: true,
}

console.log('WebSocket connected:')

return socket 

}



const channel = new BroadcastChannel('chat-room')

export const sendMessage = (message) => {
  channel.postMessage(message)
}

export const subscribeToMessages = (callback) => {
    channel.onmessage = (event) => {
        callback(event.data)
    }
}

export const closeConnection = () => {
    channel.close()
}