import { io } from 'socket.io-client';

const socket = io(import.meta.env.REACT_APP_SOCKET_URL || 'https://task-assign-frontend-3a0bl826i-christophers-projects-78a1b782.vercel.app/', {
  withCredentials: true,
  transports: ['websocket']
});

export default socket;