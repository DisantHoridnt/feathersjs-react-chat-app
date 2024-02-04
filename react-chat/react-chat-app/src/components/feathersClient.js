import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const socket = io("http://localhost:3030"); // If your server is running on a different port or host, specify it here
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication());

export default client;