module.exports = function (bot) {
	bot.onText(/me.*irl/i, msg => {
		const resp = 'me too thanks';
		bot.sendMessage(msg.chat.id, resp);
	});
	bot.onText(/me too thanks/i, msg => {
		const resp = 'me too thanks';
		bot.sendMessage(msg.chat.id, resp);
	});
	bot.onText(/;p\[/, msg => {
		bot.sendSticker(msg.chat.id, 'BQADBAADOQEAAqBWfgAB2V2T9yivgk8C');
	});
	bot.onText(/ik.*ihe/i, msg => {
		const resp = 'ik ook bedankt';
		bot.sendMessage(msg.chat.id, resp);
	});
	bot.onText(/i/i, msg => {
		const resp = 'zullen we daar een app voor maken';
		bot.sendMessage(msg.chat.id, resp);
	});
};
