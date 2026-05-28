
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