'use strict'

const Bot = require('./src/BotElite');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const bot = new Bot(1, null);
readline.on('line', readLine);

function readLine(data) {
	bot.processData(JSON.parse(data));
	console.log(JSON.stringify({
		moves: bot.getMoves()
	}));
}
