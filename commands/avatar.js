const Discord = require('discord.js');
const { version, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('View your avatar or somone else\'s avatar')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The person you want to use this on')
                .setRequired(true)),

    async execute(interaction) {
        // checks if the user has a avatar or not
        let user_i = interaction.options.getMember('user') || interaction.member;
        let avatar = user_i.user.displayAvatarURL({ dynamic: true, size: 1024 });

        if (!user_i.avatarURL) return interaction.reply(`That user does not have an avatar`);

        // creats an enbed with the users name and avatar
        const avatarENBD = new Discord.EmbedBuilder()
            .setTitle(`${user_i.user.username}'s Avatar`)
            .setColor("#2F3136")
            .setImage(`${avatar}`)
            .setURL(`${avatar}`)
            .setFooter({ text: `Running DJS V${version}` }).setTimestamp()
        return interaction.reply({ embeds: [avatarENBD] }).catch((e) => console.log(e));
    },
};