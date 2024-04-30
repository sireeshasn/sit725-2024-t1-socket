let socket = io();


socket.on('number', (randomNumber) => {
    console.log('Random number:', randomNumber);
    
});

// Listen for 'hello' event from the server
socket.on('hello', (message) => {
    console.log(message);
    
});
