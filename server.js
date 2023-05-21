const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Обработчик нового подключения
io.on('connection', (socket) => {
	console.log('Новое подключение:', socket.id);

// Обработчик события изменения маршрута
	socket.on('pageTransition', (nextPage) => {
		// Отправить изменения маршрута всем остальным клиентам
		socket.broadcast.emit('pageTransition', nextPage);
	});
	
});

// Запустить сервер
const port = 8080; // Укажите порт по вашему усмотрению
server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});