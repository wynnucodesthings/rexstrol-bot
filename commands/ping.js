const { version, SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check the bot\' latency'),
	async execute(interaction, client) {
		let embed = new Discord.EmbedBuilder()
			.setDescription(`I'm running on ${interaction.client.ws.ping.toLocaleString()}ms`)
			.setColor("#2F3136")
			.setFooter({ text: `Command requested by ${interaction.member.user.username}, Running DJS V${version}` }).setTimestamp()
		return interaction.reply({ embeds: [embed] }).catch((e) => console.log(e));
	},
};