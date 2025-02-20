// import { io } from "socket.io-client";

// // Define the WebSocket URL for the server
// export const SOCKET_URL = "wss://corecrowd.io";
// // export const SOCKET_URL = "ws://localhost:8000";

// // Initialize the socket connection with options
// const socket = io.connect(SOCKET_URL, {
//   path: "/ws/",
// });
// // const socket = io(SOCKET_URL, {
// //   // path: "/ws", // Specify the server path
// //   transports: ["ws"], // Ensure only WebSocket transport is used
// //   upgrade: false, // Prevent transport upgrades (stick to WebSocket)
// //   reconnection: true, // Enable reconnection attempts
// //   reconnectionAttempts: 5, // Set the number of reconnection attempts
// //   reconnectionDelay: 1000, // Set delay between reconnection attempts (in ms)
// // });

// // Event listener for successful connection
// socket.on("connect", () => {
//   console.log("Connected to the server");
// });

// // Event listener for connection errors
// socket.on("connect_error", (error) => {
//   console.error("Connection error:", error);
// });

// // Export the socket instance for use in other parts of the application
// export default socket;
