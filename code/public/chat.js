// chat.js

const socket = new WebSocket('ws://localhost:3000');

document.getElementById('chat-doctor').addEventListener('click', () => {
    document.getElementById('chat-window').style.display = 'block';
});

document.getElementById('send-message').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    addMessageToChat('You', message);
    socket.send(message);
    messageInput.value = ''; // Clear the input
});

socket.onmessage = function (event) {
    addMessageToChat('Doctor', event.data);
};

function addMessageToChat(sender, message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    messagesDiv.appendChild(messageElement);
}

// Basic response handling
socket.onopen = function () {
    socket.send("User has entered the chat.");
};
