const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { exec } = require('child_process');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Хранилище текущих маршрутов для каждого клиента
const routeStore = new Map();

// Обработчик нового подключения
io.on('connection', (socket) => {
	console.log('Новое подключение:', socket.id);
	
	// Обработчик события изменения маршрута
	socket.on('pageTransition', (nextPage) => {
		// Сохранить новый маршрут для данного клиента
		routeStore.set(socket.id, nextPage);
		
		// Отправить изменения маршрута всем остальным клиентам
		socket.broadcast.emit('pageTransition', nextPage);
		
	});
	
	// Отправить текущий маршрут клиенту при подключении
	const currentRoute = routeStore.get(socket.id);
	if (currentRoute) {
		socket.emit('pageTransition', currentRoute);
	}
	
	// Обработчик отключения клиента
	socket.on('disconnect', () => {
		// Удалить маршрут из хранилища при отключении клиента
		routeStore.delete(socket.id);
	});
});

// Запустить сервер
const port = 8080;
server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});