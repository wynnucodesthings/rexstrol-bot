const Discord = require('discord.js');
const { version, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask and receive a random answer')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('The question you want the answer to')
                .setRequired(true)),

    async execute(interaction) {
        let answers = [
            'No😩',
            'Yes😉',
            'Maybe😛',
            'Never!!!👹',
            'Yes of course🤗',
            'Nope',
            'Yes but no😔',
            'Probably😉',
            'Of course not, You silly baka🤭',
            'SIMP!',
        ]

        let answer = answers[Math.floor(Math.random() * answers.length)]
        let embed = new Discord.EmbedBuilder()
            .setTitle("Results:")
            .setDescription(answer)
            .setColor("#2F3136")
            .setFooter({ text: `Running DJS V${version}` }).setTimestamp()
        return interaction.reply({ embeds: [embed] }).catch((e) => console.log(e));
    },
};