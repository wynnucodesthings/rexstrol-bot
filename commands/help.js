const Discord = require('discord.js');
const { version, SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get help on using the bot'),
	async execute(interaction) {
		let helper = new Discord.EmbedBuilder()
			.setColor("2F3136").setAuthor({ name: "Help command ", iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
			.setTitle(`Hello ${interaction.member.user.username}`)
			.setDescription(`To learn more about commands and how to use the bot please refer to the ` + `[website](https://bot.mamiri263.com/)`)
			.setFooter({ text: `Command requested by ${interaction.member.user.username}, Running DJS V${version}` }).setTimestamp()
		return interaction.reply({ embeds: [helper] }).catch((e) => console.log(e));
	},
};