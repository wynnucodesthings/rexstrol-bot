const Discord = require("discord.js");
const { version, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Use this command to invite me to your servers!'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL(`https://discord.com/api/oauth2/authorize?client_id=${interaction.client.user.id}&permissions=8&scope=bot%20applications.commands`)
					.setLabel('invite')
					.setStyle(ButtonStyle.Link)
					.setEmoji('😏')
					.setDisabled(false),
			)
		let invite = new Discord.EmbedBuilder().setTitle("invite me to your servers! ").setColor("#2F3136")
			.setDescription("**invite me to your wonderful server!**\n** ```diff\n+Thanks for using this command its supporting me and my developer\n```**").addFields({ name: "**Thank you for using this command**", value: "I hope i can be good use of your server" })
			.setFooter({ text: `Command requested by ${interaction.member.user.username}, Running DJS V${version}` }).setTimestamp()
		return interaction.reply({ embeds: [invite], components: [row] });
	},
};


